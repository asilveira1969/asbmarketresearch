param(
  [ValidateSet("start", "dev")]
  [string]$Mode = "start",
  [string]$BindHost = "127.0.0.1",
  [int]$Port = 3053
)

$ErrorActionPreference = "Stop"
$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$healthUrl = "http://$BindHost`:$Port/en"
$runNext = Join-Path $PSScriptRoot "run-next.ps1"
$logsDir = Join-Path $repoRoot "logs"
$stdoutLog = Join-Path $logsDir "site-$Mode-$Port.out.log"
$stderrLog = Join-Path $logsDir "site-$Mode-$Port.err.log"

function Test-SiteHealthy {
  try {
    $response = Invoke-WebRequest -UseBasicParsing -Uri $healthUrl -TimeoutSec 3
    return $response.StatusCode -eq 200
  } catch {
    return $false
  }
}

function Start-SiteProcess {
  if (-not (Test-Path $logsDir)) {
    New-Item -ItemType Directory -Path $logsDir | Out-Null
  }

  $powershellExe = Join-Path $env:WINDIR "System32\WindowsPowerShell\v1.0\powershell.exe"
  $argumentList = "-NoProfile -ExecutionPolicy Bypass -File `"$runNext`" -Mode $Mode -BindHost $BindHost -Port $Port"

  Start-Process `
    -WindowStyle Hidden `
    -FilePath $powershellExe `
    -ArgumentList $argumentList `
    -WorkingDirectory $repoRoot `
    -RedirectStandardOutput $stdoutLog `
    -RedirectStandardError $stderrLog | Out-Null
}

if (Test-SiteHealthy) {
  Write-Host "Site already up at $healthUrl"
  exit 0
}

Start-SiteProcess

for ($attempt = 1; $attempt -le 45; $attempt++) {
  if (Test-SiteHealthy) {
    Write-Host "Site is up at $healthUrl"
    exit 0
  }

  Start-Sleep -Seconds 1
}

throw "Site did not become healthy at $healthUrl."
