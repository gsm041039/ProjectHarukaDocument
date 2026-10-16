@echo off
chcp 65001 >nul
setlocal
rem ==== 設定：換 port 或者換底座，只改呢三行 ====
set WORKBENCH_PORT=4317
set SERVER_EXE=node
set SERVER_ARGS=server.mjs
rem ===============================================

set ROOT=%~dp0
rem 搬咗 bat 去第二度都得：喺自己位置搵唔到 repo，就用呢個固定路徑
if not exist "%ROOT%tools\workbench\server.mjs" set ROOT=D:\Projects\ProjectHarukaDocument\
set WB=%ROOT%tools\workbench
set STATE=%ROOT%canon\_working\.tmp\workbench
set PIDFILE=%STATE%\server.pid
if not exist "%STATE%" mkdir "%STATE%"

rem 已經開緊：唔開多個，直接開網頁
netstat -ano | findstr /R /C:":%WORKBENCH_PORT% .*LISTENING" >nul
if not errorlevel 1 (
  echo Workbench 已經開緊，直接打開網頁。
  start "" http://localhost:%WORKBENCH_PORT%
  exit /b 0
)

cd /d "%WB%"
if not exist node_modules (
  echo 第一次用，安裝緊依賴...
  call npm install --silent || (echo 安裝失敗 & pause & exit /b 1)
)

echo 更新專案索引...
python build_index.py || echo （索引更新失敗，網頁會顯示提示，其他功能照用）

echo 啟動 server...
powershell -NoProfile -Command "$env:WORKBENCH_PORT='%WORKBENCH_PORT%'; $p = Start-Process -FilePath '%SERVER_EXE%' -ArgumentList '%SERVER_ARGS%' -WorkingDirectory '%WB%' -WindowStyle Hidden -RedirectStandardOutput '%STATE%\server.log' -RedirectStandardError '%STATE%\server.err.log' -PassThru; $p.Id | Out-File -Encoding ascii '%PIDFILE%'"

for /L %%i in (1,1,30) do (
  curl -s -o nul http://127.0.0.1:%WORKBENCH_PORT%/api/health && goto ready
  ping -n 2 127.0.0.1 >nul
)
echo Server 30 秒內冇回應，睇吓 %STATE%\server.err.log
pause
exit /b 1

:ready
echo 已啟動：http://localhost:%WORKBENCH_PORT%
start "" http://localhost:%WORKBENCH_PORT%
exit /b 0
