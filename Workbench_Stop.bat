@echo off
chcp 65001 >nul
setlocal
set WORKBENCH_PORT=4317
set ROOT=%~dp0
rem 搬咗 bat 去第二度都得：喺自己位置搵唔到 repo，就用呢個固定路徑
if not exist "%ROOT%tools\workbench\server.mjs" set ROOT=D:\Projects\ProjectHarukaDocument\
set PIDFILE=%ROOT%canon\_working\.tmp\workbench\server.pid
set KILLED=

if exist "%PIDFILE%" (
  set /p PID=<"%PIDFILE%"
  call taskkill /PID %%PID%% /T /F >nul 2>&1 && set KILLED=1
  del "%PIDFILE%" >nul 2>&1
)

rem 搵唔到 PID 檔（或者 PID 已經冇咗）：按 port 搵返個 process
for /f "tokens=5" %%p in ('netstat -ano ^| findstr /R /C:":%WORKBENCH_PORT% .*LISTENING"') do (
  taskkill /PID %%p /T /F >nul 2>&1 && set KILLED=1
)

if defined KILLED (echo Workbench 已關閉。) else (echo Workbench 本身冇開緊。)
ping -n 3 127.0.0.1 >nul
