# Instructions pour pousser sur GitHub

## Étape 1: Créer un nouveau repository sur GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur le bouton **"+"** en haut à droite
3. Sélectionnez **"New repository"**
4. Nommez votre repository (ex: `portfolio` ou `djibo-portfolio`)
5. **NE PAS** cocher "Initialize this repository with a README"
6. Cliquez sur **"Create repository"**

## Étape 2: Lier votre projet local au repository GitHub

Après avoir créé le repository, GitHub vous donnera des commandes. Utilisez celles-ci :

```bash
# Remplacez VOTRE-USERNAME et VOTRE-REPO par vos informations
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
git branch -M main
git push -u origin main
```

## Étape 3: Vérifier

Une fois poussé, rafraîchissez la page GitHub et vous devriez voir tous vos fichiers !

## 🚀 Déploiement (Optionnel)

### Option 1: GitHub Pages

1. Allez dans **Settings** > **Pages**
2. Source: **GitHub Actions**
3. Créez un fichier `.github/workflows/deploy.yml` avec le contenu ci-dessous

### Option 2: Vercel (Recommandé)

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez votre compte GitHub
3. Importez votre repository
4. Vercel détectera automatiquement Vite
5. Cliquez sur **Deploy**

### Option 3: Netlify

1. Allez sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier `dist` après avoir fait `npm run build`
3. Ou connectez votre repository GitHub pour un déploiement automatique

## 📝 Commandes Git utiles

```bash
# Voir le statut
git status

# Ajouter des modifications
git add .

# Commit
git commit -m "Votre message"

# Pousser vers GitHub
git push

# Voir l'historique
git log --oneline
```

## ⚠️ Important

- Assurez-vous que `.gitignore` exclut `node_modules` et `dist`
- Ne committez jamais de fichiers sensibles (clés API, mots de passe)
- Faites des commits réguliers avec des messages clairs
