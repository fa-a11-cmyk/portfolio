#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Démarrage du déploiement automatique...${NC}\n"

# Step 1: Install dependencies
echo -e "${YELLOW}📦 Installation des dépendances...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors de l'installation${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Dépendances installées${NC}\n"

# Step 2: Build the project
echo -e "${YELLOW}🔨 Construction du projet...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors de la construction${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Projet construit avec succès${NC}\n"

# Step 3: Initialize Git if not already done
if [ ! -d .git ]; then
    echo -e "${YELLOW}📝 Initialisation du repository Git...${NC}"
    git init
    git add .
    git commit -m "Initial commit: vscode-portfolio"
    git branch -M main
    echo -e "${GREEN}✅ Repository Git initialisé${NC}\n"
fi

# Step 4: Check if Vercel CLI is installed
echo -e "${YELLOW}🔍 Vérification de Vercel CLI...${NC}"
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}📥 Installation de Vercel CLI...${NC}"
    npm install -g vercel
fi
echo -e "${GREEN}✅ Vercel CLI prêt${NC}\n"

# Step 5: Deploy to Vercel
echo -e "${YELLOW}🌐 Déploiement sur Vercel...${NC}"
echo -e "${YELLOW}Assurez-vous que vous êtes connecté à Vercel${NC}"
echo -e "${YELLOW}Vous pouvez vous connecter avec: vercel login${NC}\n"

vercel --prod

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Déploiement réussi!${NC}\n"
    echo -e "${GREEN}🎉 Votre portfolio est maintenant en ligne!${NC}"
else
    echo -e "${RED}❌ Erreur lors du déploiement${NC}"
    exit 1
fi
