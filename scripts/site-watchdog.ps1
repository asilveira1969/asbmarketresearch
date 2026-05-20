param(
  [ValidateSet("start", "dev")]
  [string]$Mode = "start",
  [string]$BindHost = "127.0.0.1",
  [int]$Port = 3053,
  [int]$IntervalSeconds = 60
)

$ErrorActionPreference = "Continue"
$ensureSite = Join-Path $PSScriptRoot "ensure-site.ps1"

while ($true) {
  try {
    & powershell -ExecutionPolicy Bypass -File $ensureSite -Mode $Mode -BindHost $BindHost -Port $Port | Out-Null
  } catch {
    Start-Sleep -Seconds 5
  }

  Start-Sleep -Seconds $IntervalSeconds
}
