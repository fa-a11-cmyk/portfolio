# vscode-portfolio

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/itsnitinr/vscode-portfolio)

Un portfolio de développeur au thème VS Code construit avec Next.js et déployé sur Vercel.

![vscode-portfolio banner](https://imgur.com/JXJ9mpO.gif)

## ✨ Fonctionnalités

- 🎨 **Thème VS Code** - Interface inspirée de Visual Studio Code
- 🚀 **Performance optimisée** - Next.js avec optimisations Vercel
- 📱 **Responsive** - Fonctionne parfaitement sur tous les appareils
- 🌙 **Thèmes multiples** - GitHub Dark, Dracula, Ayu, Nord
- 📝 **Articles automatiques** - Intégration Dev.to
- 🐙 **Repos GitHub** - Affichage automatique de vos projets
- ⚡ **Animations fluides** - Transitions modernes et élégantes
- 🔒 **Sécurisé** - Headers de sécurité configurés

## 🗺️ Roadmap

- [ ] Thèmes et personnalisations
  - [x] GitHub Dark (défaut)
  - [ ] One Dark Pro
  - [x] Dracula
  - [x] Ayu
  - [x] Nord
- [ ] Terminal interactif personnalisé

## 🚀 Déploiement Rapide

### Option 1 : Déploiement Automatique (Recommandé)

**Windows :**
```bash
.\deploy.bat
```

**Mac/Linux :**
```bash
chmod +x deploy.sh
./deploy.sh
```

### Option 2 : Déploiement Manuel

```bash
# 1. Installer les dépendances
npm install

# 2. Configurer les variables d'environnement
# Éditer .env.local avec vos clés API

# 3. Tester localement
npm run dev

# 4. Déployer
npm run deploy
```

### Option 3 : Interface Vercel

1. Aller sur https://vercel.com
2. Cliquer "New Project"
3. Importer votre repository GitHub
4. Ajouter les variables d'environnement
5. Cliquer "Deploy"

## 📋 Configuration

### Variables d'Environnement

Créez un fichier `.env.local` :

```env
DEV_TO_API_KEY=your-dev-to-api-key
GITHUB_API_KEY=your-github-api-key
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
```

**Obtenir les clés :**

- **Dev.to** : https://dev.to/settings/account → API Keys
- **GitHub** : https://github.com/settings/tokens → Generate new token

## 🛠️ Développement Local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

## 📁 Structure du Projet

```
vscode-portfolio/
├── components/          # Composants React
├── pages/              # Pages Next.js
├── styles/             # Fichiers CSS
├── data/               # Données statiques
├── public/             # Fichiers statiques
├── .env.local          # Variables d'environnement
├── next.config.ts      # Configuration Next.js
├── vercel.json         # Configuration Vercel
└── package.json        # Dépendances
```

## 🎨 Personnalisation

### Modifier le contenu

- **Accueil** : `pages/index.tsx`
- **À propos** : `pages/about.tsx`
- **Projets** : `data/projects.ts`
- **Compétences** : `data/skillsAndCerts.js`

### Modifier les styles

- **Thèmes** : `styles/themes.css`
- **Composants** : `styles/*.module.css`

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Vercel](https://vercel.com/docs)
- [API Dev.to](https://developers.forem.com/api)
- [API GitHub](https://docs.github.com/en/rest)

## 🚢 Déploiement en Production

```bash
# Build pour la production
npm run build

# Tester la build
npm run start

# Déployer sur Vercel
npm run deploy
```

## 🔄 Mise à Jour du Site

Après chaque modification :

```bash
git add .
git commit -m "Update: description"
git push origin main
```

Vercel redéploiera automatiquement !

## 📊 Performance

- ⚡ Lighthouse Score : 95+
- 🚀 First Contentful Paint : < 1s
- 📦 Bundle Size : Optimisé

## 🆘 Dépannage

### Les articles ne s'affichent pas
- Vérifier que `DEV_TO_API_KEY` est correct
- Vérifier les logs Vercel

### Les repos ne s'affichent pas
- Vérifier que `GITHUB_API_KEY` est correct
- Vérifier que `NEXT_PUBLIC_GITHUB_USERNAME` est correct

### Erreur de build
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📝 Licence

MIT - Libre d'utilisation

## 🤝 Contribution

Les contributions sont bienvenues ! Ouvrez une issue ou une pull request.

---

**Besoin d'aide ?** Consultez [QUICK_START.md](./QUICK_START.md) ou [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
