# 🚀 Guide de Déploiement Rapide

## Option 1 : Déploiement Automatique (Recommandé)

### Sur Windows :
```bash
.\deploy.bat
```

### Sur Mac/Linux :
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## Option 2 : Déploiement via npm

### Étape 1 : Configuration locale
```bash
# Installer les dépendances
npm install

# Configurer les variables d'environnement
# Éditer .env.local avec vos clés API
```

### Étape 2 : Tester localement
```bash
npm run dev
# Ouvrir http://localhost:3000
```

### Étape 3 : Déployer
```bash
# Déploiement en production
npm run deploy

# Ou déploiement en preview
npm run deploy:preview
```

---

## Option 3 : Déploiement via Interface Vercel

1. Aller sur https://vercel.com
2. Cliquer "New Project"
3. Importer votre repository GitHub
4. Ajouter les variables d'environnement :
   - `DEV_TO_API_KEY`
   - `GITHUB_API_KEY`
   - `NEXT_PUBLIC_GITHUB_USERNAME`
5. Cliquer "Deploy"

---

## 📋 Checklist avant déploiement

- [ ] `.env.local` configuré avec vos clés API
- [ ] `npm run build` fonctionne sans erreur
- [ ] `npm run dev` fonctionne localement
- [ ] Repository GitHub créé et poussé
- [ ] Vercel CLI installé (`npm install -g vercel`)
- [ ] Connecté à Vercel (`vercel login`)

---

## 🔑 Obtenir les clés API

### Dev.to API Key
1. Aller sur https://dev.to/settings/account
2. Scroller jusqu'à "API Keys"
3. Générer une nouvelle clé
4. Copier dans `.env.local`

### GitHub API Key
1. Aller sur https://github.com/settings/tokens
2. Cliquer "Generate new token (classic)"
3. Sélectionner scopes : `public_repo`, `user`
4. Copier dans `.env.local`

---

## ✅ Vérifier le déploiement

Après le déploiement :
- Votre site sera à : `https://your-project.vercel.app`
- Vérifier que les articles s'affichent
- Vérifier que les repos GitHub s'affichent
- Tester sur mobile

---

## 🔄 Mise à jour du site

Après chaque modification :
```bash
git add .
git commit -m "Update: description"
git push origin main
```

Vercel redéploiera automatiquement !

---

## 🆘 Dépannage

### Les articles ne s'affichent pas
```bash
# Vérifier la clé Dev.to
echo $DEV_TO_API_KEY
```

### Les repos ne s'affichent pas
```bash
# Vérifier la clé GitHub
echo $GITHUB_API_KEY
```

### Erreur de build
```bash
# Nettoyer et reconstruire
rm -rf .next node_modules
npm install
npm run build
```

---

**Besoin d'aide ?**
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [GitHub API Docs](https://docs.github.com/en/rest)
