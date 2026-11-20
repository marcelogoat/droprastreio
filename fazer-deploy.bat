@echo off
chcp 65001 > nul
echo ==========================================
echo Enviando atualizacoes para o GitHub e Vercel...
echo ==========================================
git push origin main
echo.
if %errorlevel% equ 0 (
    echo [SUCESSO] Codigo enviado com sucesso para o GitHub!
    echo A Vercel ja esta gerando o deploy atualizado automaticamente.
) else (
    echo [ATENCAO] Houve um problema no envio.
)
echo.
pause
