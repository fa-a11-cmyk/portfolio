# Guide de Déploiement sur Vercel

## Étape 1 : Préparer votre projet

### 1.1 Configurer les variables d'environnement
Modifiez le fichier `.env.local` avec vos vraies clés :

```bash
DEV_TO_API_KEY=your-actual-dev-to-api-key
GITHUB_API_KEY=your-actual-github-api-key
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
```

**Comment obtenir les clés :**

- **Dev.to API Key** : 
  - Allez sur https://dev.to/settings/account
  - Scrollez jusqu'à "API Keys"
  - Générez une nouvelle clé

- **GitHub API Key** :
  - Allez sur https://github.com/settings/tokens
  - Cliquez sur "Generate new token (classic)"
  - Sélectionnez les scopes : `public_repo`, `user`
  - Copiez le token

### 1.2 Vérifier la build locale
```bash
npm run build
npm run start
```

## Étape 2 : Pousser sur GitHub

```bash
git init
git add .
git commit -m "Initial commit: vscode-portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vscode-portfolio.git
git push -u origin main
```

## Étape 3 : Déployer sur Vercel

### Option A : Via l'interface Vercel (Recommandé)

1. Allez sur https://vercel.com
2. Cliquez sur "New Project"
3. Sélectionnez votre repository GitHub
4. Vercel détectera automatiquement que c'est un projet Next.js
5. Cliquez sur "Environment Variables" et ajoutez :
   - `DEV_TO_API_KEY`
   - `GITHUB_API_KEY`
   - `NEXT_PUBLIC_GITHUB_USERNAME`
6. Cliquez sur "Deploy"

### Option B : Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Suivez les instructions et entrez vos variables d'environnement quand demandé.

## Étape 4 : Configuration du domaine personnalisé (Optionnel)

1. Dans le dashboard Vercel, allez à "Settings" > "Domains"
2. Ajoutez votre domaine personnalisé
3. Suivez les instructions DNS

## Étape 5 : Optimisations recommandées

### Ajouter un fichier `vercel.json` pour plus de contrôle :

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "nodeVersion": "20.x"
}
```

### Ajouter des headers de sécurité dans `next.config.ts` :

```typescript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        }
      ]
    }
  ]
}
```

## Étape 6 : Vérifier le déploiement

- Votre site sera accessible à : `https://your-project.vercel.app`
- Vérifiez que toutes les pages se chargent correctement
- Testez les appels API (articles, repos GitHub)
- Vérifiez la performance sur https://pagespeed.web.dev

## Dépannage

### Les articles ne s'affichent pas
- Vérifiez que `DEV_TO_API_KEY` est correct
- Vérifiez les logs Vercel : Dashboard > Deployments > Logs

### Les repos GitHub ne s'affichent pas
- Vérifiez que `GITHUB_API_KEY` est correct
- Vérifiez que `NEXT_PUBLIC_GITHUB_USERNAME` correspond à votre username

### Erreur de build
- Vérifiez que `npm run build` fonctionne localement
- Vérifiez les logs de build dans Vercel

## Mise à jour du site

Après chaque modification :
```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

Vercel redéploiera automatiquement !

---

**Besoin d'aide ?** Consultez la documentation :
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
