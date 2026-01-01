# 🎯 Commencer Maintenant

## 5 Minutes pour Déployer Votre Portfolio

### Étape 1 : Configurer les Clés API (2 min)

#### Dev.to API Key
1. Aller sur https://dev.to/settings/account
2. Scroller jusqu'à "API Keys"
3. Cliquer "Generate new token"
4. Copier la clé

#### GitHub API Key
1. Aller sur https://github.com/settings/tokens
2. Cliquer "Generate new token (classic)"
3. Sélectionner : `public_repo`, `user`
4. Cliquer "Generate token"
5. Copier la clé

### Étape 2 : Configurer .env.local (1 min)

Ouvrir `.env.local` et remplacer :

```env
DEV_TO_API_KEY=votre-clé-dev-to
GITHUB_API_KEY=votre-clé-github
NEXT_PUBLIC_GITHUB_USERNAME=votre-username-github
```

### Étape 3 : Tester Localement (1 min)

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000 et vérifier que tout fonctionne.

### Étape 4 : Déployer (1 min)

**Windows :**
```bash
.\deploy.bat
```

**Mac/Linux :**
```bash
chmod +x deploy.sh
./deploy.sh
```

Suivre les instructions à l'écran.

### Étape 5 : Vérifier (Quelques secondes)

- Attendre que Vercel finisse le déploiement
- Cliquer sur le lien fourni
- Vérifier que le site fonctionne

## ✅ C'est Fait !

Votre portfolio est maintenant en ligne ! 🎉

## 🔄 Mettre à Jour le Site

Après chaque modification :

```bash
git add .
git commit -m "Update: description"
git push origin main
```

Vercel redéploiera automatiquement !

## 📝 Personnaliser le Contenu

### Modifier le Nom et la Bio
Fichier : `pages/index.tsx`

```typescript
const developerInfo = {
  name: 'Votre Nom',
  role: 'Votre Rôle',
  bio: 'Votre Bio',
};
```

### Ajouter des Projets
Fichier : `data/projects.ts`

```typescript
export const projects: Project[] = [
  {
    title: 'Mon Projet',
    description: 'Description',
    link: 'https://...',
    logo: '/logos/...',
  },
  // ...
];
```

### Ajouter des Compétences
Fichier : `data/skillsAndCerts.js`

```javascript
export const technologies = [
  'Technologie 1',
  'Technologie 2',
  // ...
];
```

## 🎨 Changer le Thème

Fichier : `styles/themes.css`

Les thèmes disponibles :
- GitHub Dark (défaut)
- Dracula
- Ayu
- Nord

## 🚀 Optimisations Incluses

- ✅ Animations fluides
- ✅ Performance optimisée
- ✅ Responsive design
- ✅ Sécurité configurée
- ✅ Déploiement automatique

## 📚 Documentation

- `QUICK_START.md` - Démarrage rapide
- `DEPLOYMENT_GUIDE.md` - Déploiement détaillé
- `GITHUB_ACTIONS_SETUP.md` - Déploiement automatique
- `PERFORMANCE.md` - Optimisations
- `SETUP_SUMMARY.md` - Résumé complet

## 🆘 Besoin d'Aide ?

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
rm -rf .next node_modules
npm install
npm run build
```

## 💡 Conseils

1. **Testez localement d'abord** - `npm run dev`
2. **Vérifiez les logs** - Vercel Dashboard → Deployments
3. **Utilisez GitHub Actions** - Déploiement automatique
4. **Optimisez les images** - Utilisez `next/image`
5. **Mettez à jour régulièrement** - Gardez le contenu frais

## 🎯 Prochaines Étapes

- [ ] Configurer les clés API
- [ ] Tester localement
- [ ] Déployer sur Vercel
- [ ] Vérifier le site
- [ ] Personnaliser le contenu
- [ ] Configurer GitHub Actions (optionnel)
- [ ] Ajouter un domaine personnalisé (optionnel)

## 🎉 Bravo !

Vous avez un portfolio professionnel en ligne ! 

**Partagez-le avec le monde !** 🌍

---

**Besoin de plus d'aide ?** Consultez les autres guides ou la documentation officielle.
