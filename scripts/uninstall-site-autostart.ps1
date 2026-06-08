$ErrorActionPreference = "Stop"
$launcherName = "ASB Market Research Site Watchdog.cmd"
$startupDir = [Environment]::GetFolderPath("Startup")
$launcherPath = Join-Path $startupDir $launcherName

if (Test-Path $launcherPath) {
  Remove-Item $launcherPath -Force
  Write-Host "Removed startup launcher '$launcherPath'."
} else {
  Write-Host "Startup launcher '$launcherPath' was not installed."
}
