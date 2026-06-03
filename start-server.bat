@echo off
cd /d "%~dp0"
echo Starting portfolio website at http://127.0.0.1:4180/index.html
echo.
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
  python -m http.server 4180 --bind 127.0.0.1
) else (
  py -3 -m http.server 4180 --bind 127.0.0.1
)
pause
