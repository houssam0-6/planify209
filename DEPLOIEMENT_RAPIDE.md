# 🚀 Déploiement RAPIDE - PLANIFY

## 🎯 Je recommande : VERCEL

---

## ⚡ VERCEL - 3 étapes (5 minutes)

### 1️⃣ Pousser sur GitHub
```bash
cd planify
git init
git add .
git commit -m "Initial commit"

# Créez un repo sur https://github.com/new
git remote add origin https://github.com/VOTRE-USERNAME/planify.git
git branch -M main
git push -u origin main
```

### 2️⃣ Déployer sur Vercel
1. Allez sur **https://vercel.com/**
2. Connectez-vous avec **GitHub**
3. Cliquez **"Add New Project"**
4. Importez **planify**
5. Cliquez **"Deploy"**

### 3️⃣ C'est en ligne ! 🎉
```
https://planify-xyz.vercel.app
```

---

## 🔧 Configuration MockAPI

**Dans `src/config/api.js` :**
```javascript
export const API_URL = 'https://VOTRE-URL.mockapi.io/api/v1';
```

**Puis redéployez :**
```bash
git add .
git commit -m "Update API URL"
git push
```
Vercel redéploie automatiquement ! ✅

---

## 📱 Alternative : NETLIFY

### Via Drag & Drop (Sans Git)
```bash
npm run build
```
Glissez le dossier `build/` sur **https://app.netlify.com/drop**

---

## ✅ Checklist

- [ ] MockAPI configuré (URL dans `api.js`)
- [ ] Testé en local (`npm start`)
- [ ] Code sur GitHub
- [ ] Compte Vercel créé
- [ ] Projet importé
- [ ] Site déployé
- [ ] Testé inscription/connexion en ligne

---

## 🎉 Votre site est en ligne !

Partagez le lien avec vos amis ! 🚀
