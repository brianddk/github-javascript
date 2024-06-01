@echo off
setlocal
cd %~dp0\..
set arg=%1
if ""=="%arg%" set arg=--check
for /d %%p in (ex?) do @(npx prettier %arg% %%p\. && echo %%p\. is pretty)
endlocal