param(
  [ValidateSet("start", "dev")]
  [string]$Mode = "start",
  [string]$BindHost = "127.0.0.1",
  [int]$Port = 3053
)

$ErrorActionPreference = "Stop"
$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path

function Resolve-NodePath {
  $command = Get-Command node -ErrorAction SilentlyContinue
  if ($command -and $command.Source) {
    return $command.Source
  }

  $fallback = "C:\nvm4w\nodejs\node.exe"
  if (Test-Path $fallback) {
    return $fallback
  }

  throw "Unable to locate node.exe."
}

$env:DEBUG = ""
Remove-Item Env:NEXT_TEST_MODE -ErrorAction SilentlyContinue
Remove-Item Env:__NEXT_TEST_MODE -ErrorAction SilentlyContinue

$nodePath = Resolve-NodePath
$nextBin = Join-Path $repoRoot "node_modules\next\dist\bin\next"

if (-not (Test-Path $nextBin)) {
  throw "Unable to locate Next.js binary at $nextBin."
}

Set-Location $repoRoot
& $nodePath $nextBin $Mode "-H" $BindHost "-p" "$Port"
