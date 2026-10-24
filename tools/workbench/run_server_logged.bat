@echo off
cd /d "%~dp0"
"%SERVER_EXE%" %SERVER_ARGS% >> "%WORKBENCH_LOG%" 2>&1
