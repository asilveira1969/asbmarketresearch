param(
  [ValidateSet("start", "dev")]
  [string]$Mode = "start",
  [string]$BindHost = "127.0.0.1",
  [int]$Port = 3053,
  [int]$IntervalSeconds = 60
)

$ErrorActionPreference = "Continue"
$ensureSite = Join-Path $PSScriptRoot "ensure-site.ps1"
$powershellExe = Join-Path $env:WINDIR "System32\WindowsPowerShell\v1.0\powershell.exe"

while ($true) {
  try {
    & $powershellExe -NoProfile -ExecutionPolicy Bypass -File $ensureSite -Mode $Mode -BindHost $BindHost -Port $Port | Out-Null
  } catch {
    Start-Sleep -Seconds 5
  }

  Start-Sleep -Seconds $IntervalSeconds
}
