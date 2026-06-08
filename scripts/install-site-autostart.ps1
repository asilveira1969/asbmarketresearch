param(
  [ValidateSet("start", "dev")]
  [string]$Mode = "dev",
  [string]$BindHost = "127.0.0.1",
  [int]$Port = 3053,
  [int]$IntervalSeconds = 30
)

$ErrorActionPreference = "Stop"
$launcherName = "ASB Market Research Site Watchdog.cmd"
$powershellExe = Join-Path $env:WINDIR "System32\WindowsPowerShell\v1.0\powershell.exe"
$watchdogPath = Join-Path $PSScriptRoot "site-watchdog.ps1"
$startupDir = [Environment]::GetFolderPath("Startup")
$launcherPath = Join-Path $startupDir $launcherName

$launcherContent = @"
@echo off
start "" "$powershellExe" -NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File "$watchdogPath" -Mode $Mode -BindHost $BindHost -Port $Port -IntervalSeconds $IntervalSeconds
"@

Set-Content -Path $launcherPath -Value $launcherContent -Encoding ASCII

Start-Process `
  -WindowStyle Hidden `
  -FilePath $powershellExe `
  -ArgumentList @(
    "-NoProfile",
    "-WindowStyle",
    "Hidden",
    "-ExecutionPolicy",
    "Bypass",
    "-File",
    $watchdogPath,
    "-Mode",
    $Mode,
    "-BindHost",
    $BindHost,
    "-Port",
    "$Port",
    "-IntervalSeconds",
    "$IntervalSeconds"
  ) | Out-Null

Write-Host "Installed startup launcher at $launcherPath."
