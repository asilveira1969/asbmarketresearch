param(
  [ValidateSet("start", "dev")]
  [string]$Mode = "start",
  [string]$BindHost = "127.0.0.1",
  [int]$Port = 3053
)

$ErrorActionPreference = "Stop"
$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$healthUrl = "http://$BindHost`:$Port/es"

function Test-SiteHealthy {
  try {
    $response = Invoke-WebRequest -UseBasicParsing -Uri $healthUrl -TimeoutSec 3
    return $response.StatusCode -eq 200
  } catch {
    return $false
  }
}

function Start-SiteProcess {
    $command =
    if ($Mode -eq "dev") {
      "npm run dev -- --hostname $BindHost --port $Port"
    } else {
      "npm run start -- --hostname $BindHost --port $Port"
    }

  Start-Process -WindowStyle Hidden -FilePath "cmd.exe" -ArgumentList "/c", "cd /d `"$repoRoot`" && $command" | Out-Null
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
