# Configuration GitHub Actions + Vercel

## 🔧 Configuration Automatique du Déploiement

Ce projet inclut un workflow GitHub Actions qui déploie automatiquement sur Vercel à chaque push sur `main`.

## 📋 Étapes de Configuration

### 1. Créer les Secrets GitHub

1. Aller sur votre repository GitHub
2. Aller à **Settings** → **Secrets and variables** → **Actions**
3. Ajouter les secrets suivants :

#### `VERCEL_TOKEN`
- Aller sur https://vercel.com/account/tokens
- Créer un nouveau token
- Copier et ajouter comme secret

#### `VERCEL_ORG_ID`
- Aller sur https://vercel.com/account/settings
- Copier l'ID de l'organisation
- Ajouter comme secret

#### `VERCEL_PROJECT_ID`
- Après le premier déploiement sur Vercel
- Aller dans les paramètres du projet
- Copier le Project ID
- Ajouter comme secret

### 2. Ajouter les Variables d'Environnement Vercel

1. Aller sur https://vercel.com
2. Sélectionner votre projet
3. Aller à **Settings** → **Environment Variables**
4. Ajouter :
   - `DEV_TO_API_KEY`
   - `GITHUB_API_KEY`
   - `NEXT_PUBLIC_GITHUB_USERNAME`

### 3. Tester le Workflow

```bash
# Faire un commit et push
git add .
git commit -m "Setup: GitHub Actions deployment"
git push origin main
```

Vérifier que le workflow s'exécute :
- Aller à **Actions** dans votre repository
- Voir le workflow en cours d'exécution

## 🚀 Déploiement Automatique

Après la configuration, chaque push sur `main` :
1. ✅ Installe les dépendances
2. ✅ Lance le linter
3. ✅ Construit le projet
4. ✅ Déploie sur Vercel

## 📊 Vérifier le Déploiement

- **GitHub** : Actions → Voir le workflow
- **Vercel** : Dashboard → Voir les déploiements
- **Site** : Accéder à votre URL Vercel

## 🔄 Mise à Jour du Site

Maintenant, pour mettre à jour votre site :

```bash
# Faire vos modifications
# ...

# Commit et push
git add .
git commit -m "Update: description"
git push origin main

# Le déploiement se fait automatiquement !
```

## 🆘 Dépannage

### Le workflow échoue
- Vérifier les logs dans **Actions**
- Vérifier que les secrets sont correctement configurés
- Vérifier que `npm run build` fonctionne localement

### Le déploiement Vercel échoue
- Vérifier les logs Vercel
- Vérifier les variables d'environnement
- Vérifier que les clés API sont valides

### Les variables d'environnement ne sont pas chargées
- Vérifier qu'elles sont ajoutées dans Vercel
- Vérifier que les noms correspondent exactement
- Redéployer après les avoir ajoutées

## 📚 Ressources

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Vercel GitHub Integration](https://vercel.com/docs/git/vercel-for-github)
- [Vercel Tokens](https://vercel.com/account/tokens)

---

**Configuration terminée !** Votre portfolio se déploiera automatiquement à chaque push. 🎉
