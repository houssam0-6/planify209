# 🚀 Guide de Déploiement PLANIFY

## 🎯 Recommandation : VERCEL

---

# 📦 MÉTHODE 1 : VERCEL (Recommandé)

## ⚡ Déploiement en 5 minutes

### Option A : Via Interface Web (Plus facile)

#### 1️⃣ Créer un compte Vercel
1. Allez sur **https://vercel.com/**
2. Cliquez sur **"Sign Up"**
3. Connectez-vous avec **GitHub** (recommandé)

#### 2️⃣ Pousser votre code sur GitHub

**Si vous n'avez pas encore de repository GitHub :**

```bash
# Dans le dossier planify/
git init
git add .
git commit -m "Initial commit - PLANIFY"

# Créez un nouveau repository sur https://github.com/new
# Nommez-le "planify"
# Puis exécutez :
git remote add origin https://github.com/VOTRE-USERNAME/planify.git
git branch -M main
git push -u origin main
```

#### 3️⃣ Importer sur Vercel
1. Retournez sur **https://vercel.com/**
2. Cliquez sur **"Add New..."** → **"Project"**
3. Importez votre repository **planify** depuis GitHub
4. Vercel détecte automatiquement que c'est un projet React
5. **Configuration** :
   ```
   Framework Preset: Create React App
   Build Command: npm run build
   Output Directory: build
   Install Command: npm install
   ```
6. Cliquez sur **"Deploy"** 🚀

#### 4️⃣ Attendre le déploiement (1-2 min)
- Vercel va :
  - Installer les dépendances (`npm install`)
  - Build le projet (`npm run build`)
  - Déployer sur un domaine gratuit

#### 5️⃣ Votre site est en ligne ! 🎉
Vous recevrez une URL comme :
```
https://planify-abc123.vercel.app
```

---

### Option B : Via CLI (Plus rapide si vous connaissez le terminal)

```bash
# Installer Vercel CLI
npm install -g vercel

# Dans le dossier planify/
vercel login

# Déployer
vercel

# Suivez les instructions :
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? planify
# - In which directory? ./
# - Override settings? No

# Pour la production
vercel --prod
```

---

## 🔧 Configuration de l'URL MockAPI sur Vercel

### Méthode 1 : Variables d'environnement (Recommandé)

1. Sur Vercel, allez dans votre projet
2. Cliquez sur **"Settings"** → **"Environment Variables"**
3. Ajoutez :
   ```
   Name: REACT_APP_API_URL
   Value: https://VOTRE-URL.mockapi.io/api/v1
   ```
4. Cliquez sur **"Save"**
5. Redéployez le projet

**Modifiez `src/config/api.js` :**
```javascript
export const API_URL = process.env.REACT_APP_API_URL || 'https://675abc123.mockapi.io/api/v1';

export const ENDPOINTS = {
  users: `${API_URL}/users`,
  events: `${API_URL}/events`
};
```

### Méthode 2 : Hardcoder l'URL (Plus simple)
Gardez votre URL directement dans `src/config/api.js` et commitez le fichier.

---

## 🌐 Avoir un domaine personnalisé

### Sur Vercel (Gratuit)
1. Allez dans **"Settings"** → **"Domains"**
2. Ajoutez votre domaine (ex: `planify.com`)
3. Suivez les instructions pour configurer le DNS
4. Vercel génère automatiquement le certificat SSL (HTTPS)

---

# 📦 MÉTHODE 2 : NETLIFY

## ⚡ Déploiement en 5 minutes

### Option A : Via Interface Web

#### 1️⃣ Créer un compte Netlify
1. Allez sur **https://www.netlify.com/**
2. Cliquez sur **"Sign Up"**
3. Connectez-vous avec **GitHub**

#### 2️⃣ Pousser sur GitHub
(Même procédure que Vercel ci-dessus)

#### 3️⃣ Importer sur Netlify
1. Sur Netlify, cliquez sur **"Add new site"** → **"Import an existing project"**
2. Choisissez **GitHub**
3. Sélectionnez votre repository **planify**
4. **Configuration** :
   ```
   Build command: npm run build
   Publish directory: build
   ```
5. Cliquez sur **"Deploy site"** 🚀

#### 4️⃣ Votre site est en ligne !
URL comme : `https://planify-abc123.netlify.app`

---

### Option B : Via Drag & Drop (Sans GitHub)

#### 1️⃣ Builder le projet localement
```bash
cd planify
npm run build
```

#### 2️⃣ Déployer sur Netlify
1. Allez sur **https://app.netlify.com/drop**
2. **Glissez-déposez** le dossier `build/` sur la page
3. C'est tout ! 🎉

---

### Option C : Via CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Dans le dossier planify/
netlify login

# Builder
npm run build

# Déployer
netlify deploy

# Pour la production
netlify deploy --prod
```

---

## 🔧 Configuration MockAPI sur Netlify

Même procédure que Vercel :

1. Sur Netlify → **"Site settings"** → **"Environment variables"**
2. Ajoutez :
   ```
   REACT_APP_API_URL = https://VOTRE-URL.mockapi.io/api/v1
   ```
3. Redéployez

---

# 📊 Comparaison Vercel vs Netlify

| Critère | Vercel | Netlify |
|---------|--------|---------|
| **Facilité** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Vitesse déploiement** | 1-2 min | 1-2 min |
| **Support React** | ⭐⭐⭐⭐⭐ (Natif) | ⭐⭐⭐⭐ |
| **HTTPS gratuit** | ✅ Automatique | ✅ Automatique |
| **Domaine personnalisé** | ✅ Gratuit | ✅ Gratuit |
| **Preview branches** | ✅ | ✅ |
| **Drag & Drop** | ❌ | ✅ |
| **Limite gratuite** | 100 GB/mois | 100 GB/mois |

---

# 🎯 Mon choix : VERCEL

**Pourquoi ?**
- Plus rapide pour les projets React
- Interface plus moderne
- Déploiement instantané
- Meilleure intégration GitHub
- Plus populaire dans la communauté React

---

# ✅ Checklist avant déploiement

- [ ] Vérifier que `src/config/api.js` contient votre URL MockAPI
- [ ] Tester localement : `npm start`
- [ ] Builder localement : `npm run build`
- [ ] Pousser sur GitHub (si déploiement via Git)
- [ ] Créer un compte Vercel/Netlify
- [ ] Importer le projet
- [ ] Attendre le déploiement
- [ ] Tester le site en ligne
- [ ] Partager le lien ! 🎉

---

# 🐛 Problèmes courants

## Erreur : "Page not found" sur /login ou /register

**Solution :**
- Sur **Vercel** : Le fichier `vercel.json` est déjà inclus ✅
- Sur **Netlify** : Le fichier `public/_redirects` est déjà inclus ✅

## Erreur : "API calls fail" après déploiement

**Solution :**
1. Vérifiez que votre URL MockAPI est correcte
2. Vérifiez que MockAPI est accessible publiquement
3. Regardez la console du navigateur (F12) pour les erreurs CORS
4. MockAPI devrait fonctionner sans problème CORS

## Le site ne se met pas à jour

**Solution :**
```bash
# Sur Vercel
vercel --prod --force

# Sur Netlify
netlify deploy --prod
```

---

# 🚀 Étapes après déploiement

1. **Tester toutes les fonctionnalités** :
   - Inscription
   - Connexion
   - Ajout d'événement
   - Modification
   - Suppression
   - Filtrage
   - Rafraîchissement

2. **Partager le lien** :
   ```
   🎉 PLANIFY est en ligne !
   🔗 https://planify-abc123.vercel.app
   ```

3. **Configurer un domaine personnalisé** (optionnel) :
   - Achetez un domaine sur Namecheap, GoDaddy, etc.
   - Ajoutez-le sur Vercel/Netlify
   - Suivez les instructions DNS

4. **Monitoring** :
   - Vercel et Netlify vous envoient des emails à chaque déploiement
   - Vous pouvez voir les logs d'erreurs dans le dashboard

---

# 📱 Tester sur mobile

Une fois déployé, testez votre site sur mobile :
1. Ouvrez l'URL sur votre smartphone
2. Ajoutez à l'écran d'accueil (comme une app native !)
3. Le design responsive s'adaptera automatiquement

---

# 🎉 Félicitations !

Votre application PLANIFY est maintenant accessible partout dans le monde ! 🌍

**Prochaines étapes possibles :**
- Ajouter Google Analytics
- Configurer un domaine personnalisé
- Ajouter des fonctionnalités (notifications, export PDF, etc.)
- Partager avec vos amis !

---

## 📞 Ressources utiles

- **Vercel Docs** : https://vercel.com/docs
- **Netlify Docs** : https://docs.netlify.com/
- **MockAPI Docs** : https://mockapi.io/docs
- **React Docs** : https://react.dev/

**Bon déploiement ! 🚀**
