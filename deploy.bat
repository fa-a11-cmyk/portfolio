@echo off
setlocal enabledelayedexpansion

REM Colors simulation
set "GREEN=[92m"
set "YELLOW=[93m"
set "RED=[91m"
set "NC=[0m"

echo %YELLOW%🚀 Démarrage du déploiement automatique...%NC%
echo.

REM Step 1: Install dependencies
echo %YELLOW%📦 Installation des dépendances...%NC%
call npm install
if errorlevel 1 (
    echo %RED%❌ Erreur lors de l'installation%NC%
    exit /b 1
)
echo %GREEN%✅ Dépendances installées%NC%
echo.

REM Step 2: Build the project
echo %YELLOW%🔨 Construction du projet...%NC%
call npm run build
if errorlevel 1 (
    echo %RED%❌ Erreur lors de la construction%NC%
    exit /b 1
)
echo %GREEN%✅ Projet construit avec succès%NC%
echo.

REM Step 3: Initialize Git if not already done
if not exist .git (
    echo %YELLOW%📝 Initialisation du repository Git...%NC%
    call git init
    call git add .
    call git commit -m "Initial commit: vscode-portfolio"
    call git branch -M main
    echo %GREEN%✅ Repository Git initialisé%NC%
    echo.
)

REM Step 4: Check if Vercel CLI is installed
echo %YELLOW%🔍 Vérification de Vercel CLI...%NC%
where vercel >nul 2>nul
if errorlevel 1 (
    echo %YELLOW%📥 Installation de Vercel CLI...%NC%
    call npm install -g vercel
)
echo %GREEN%✅ Vercel CLI prêt%NC%
echo.

REM Step 5: Deploy to Vercel
echo %YELLOW%🌐 Déploiement sur Vercel...%NC%
echo %YELLOW%Assurez-vous que vous êtes connecté à Vercel%NC%
echo %YELLOW%Vous pouvez vous connecter avec: vercel login%NC%
echo.

call vercel --prod

if errorlevel 1 (
    echo %RED%❌ Erreur lors du déploiement%NC%
    exit /b 1
)

echo %GREEN%✅ Déploiement réussi!%NC%
echo.
echo %GREEN%🎉 Votre portfolio est maintenant en ligne!%NC%

pause
