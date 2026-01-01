# ✅ Checklist de Déploiement

## 📋 Avant de Commencer

- [ ] Node.js installé (v18+)
- [ ] Git installé
- [ ] Compte GitHub créé
- [ ] Compte Vercel créé (https://vercel.com)

## 🔑 Configuration des Clés API

### Dev.to
- [ ] Aller sur https://dev.to/settings/account
- [ ] Générer une API Key
- [ ] Copier la clé
- [ ] Ajouter dans `.env.local` : `DEV_TO_API_KEY=...`

### GitHub
- [ ] Aller sur https://github.com/settings/tokens
- [ ] Générer un token (classic)
- [ ] Sélectionner scopes : `public_repo`, `user`
- [ ] Copier le token
- [ ] Ajouter dans `.env.local` : `GITHUB_API_KEY=...`
- [ ] Ajouter dans `.env.local` : `NEXT_PUBLIC_GITHUB_USERNAME=...`

## 🛠️ Configuration Locale

- [ ] Ouvrir le terminal dans le dossier du projet
- [ ] Exécuter : `npm install`
- [ ] Éditer `.env.local` avec vos clés
- [ ] Exécuter : `npm run dev`
- [ ] Ouvrir http://localhost:3000
- [ ] Vérifier que le site fonctionne
- [ ] Vérifier que les articles s'affichent
- [ ] Vérifier que les repos s'affichent

## 📤 Préparation GitHub

- [ ] Créer un repository sur GitHub
- [ ] Initialiser Git localement : `git init`
- [ ] Ajouter les fichiers : `git add .`
- [ ] Faire un commit : `git commit -m "Initial commit"`
- [ ] Ajouter la remote : `git remote add origin https://github.com/...`
- [ ] Pousser : `git push -u origin main`

## 🚀 Déploiement sur Vercel

### Option A : Déploiement Automatique
- [ ] Exécuter `.\deploy.bat` (Windows) ou `./deploy.sh` (Mac/Linux)
- [ ] Suivre les instructions
- [ ] Attendre la fin du déploiement

### Option B : Déploiement Manuel
- [ ] Installer Vercel CLI : `npm install -g vercel`
- [ ] Se connecter : `vercel login`
- [ ] Déployer : `npm run deploy`

### Option C : Interface Vercel
- [ ] Aller sur https://vercel.com
- [ ] Cliquer "New Project"
- [ ] Importer votre repository GitHub
- [ ] Ajouter les variables d'environnement
- [ ] Cliquer "Deploy"

## ✨ Après le Déploiement

- [ ] Vérifier que le site est accessible
- [ ] Vérifier que les articles s'affichent
- [ ] Vérifier que les repos s'affichent
- [ ] Tester sur mobile
- [ ] Vérifier les performances sur PageSpeed
- [ ] Partager le lien !

## 🔄 Configuration du Déploiement Automatique (Optionnel)

- [ ] Aller sur votre repository GitHub
- [ ] Aller à Settings → Secrets and variables → Actions
- [ ] Ajouter `VERCEL_TOKEN` (de https://vercel.com/account/tokens)
- [ ] Ajouter `VERCEL_ORG_ID` (de https://vercel.com/account/settings)
- [ ] Ajouter `VERCEL_PROJECT_ID` (après le premier déploiement)
- [ ] Le workflow GitHub Actions se lancera automatiquement

## 📝 Personnalisation

- [ ] Modifier le nom dans `pages/index.tsx`
- [ ] Modifier la bio dans `pages/index.tsx`
- [ ] Ajouter des projets dans `data/projects.ts`
- [ ] Ajouter des compétences dans `data/skillsAndCerts.js`
- [ ] Changer le thème dans `styles/themes.css`

## 🔍 Vérification Finale

- [ ] Site accessible via l'URL Vercel
- [ ] Tous les liens fonctionnent
- [ ] Les images se chargent correctement
- [ ] Les animations fonctionnent
- [ ] Pas d'erreurs dans la console
- [ ] Responsive sur mobile
- [ ] Performance > 90 sur PageSpeed

## 📊 Monitoring

- [ ] Vérifier les logs Vercel régulièrement
- [ ] Vérifier les analytics Vercel
- [ ] Vérifier PageSpeed Insights mensuellement
- [ ] Mettre à jour le contenu régulièrement

## 🎉 Félicitations !

Vous avez complété tous les étapes ! Votre portfolio est maintenant :
- ✅ En ligne
- ✅ Optimisé
- ✅ Automatisé
- ✅ Prêt pour la production

---

**Prochaine étape : Partager votre portfolio avec le monde !** 🌍

Pour toute question, consultez les guides :
- `GETTING_STARTED.md` - Démarrage rapide
- `QUICK_START.md` - Options de déploiement
- `DEPLOYMENT_GUIDE.md` - Guide détaillé
- `GITHUB_ACTIONS_SETUP.md` - Déploiement automatique
