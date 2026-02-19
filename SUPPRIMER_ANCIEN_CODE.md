# 🗑️ Supprimer l'ancien code GitHub - Guide complet

## 🎯 SOLUTION RECOMMANDÉE : Supprimer et recréer

---

## ✅ **ÉTAPE PAR ÉTAPE (5 minutes)**

### 1️⃣ **Supprimer le repository sur GitHub**

1. Allez sur **https://github.com/VOTRE-USERNAME/planify**
2. Cliquez sur **"Settings"** (⚙️)
3. Scrollez en bas → section **"Danger Zone"** (rouge)
4. Cliquez sur **"Delete this repository"**
5. Tapez le nom complet : `VOTRE-USERNAME/planify`
6. Cliquez sur **"I understand the consequences, delete this repository"**

✅ **Repository supprimé !**

---

### 2️⃣ **Nettoyer votre dossier local**

```bash
# Allez dans votre dossier planify
cd planify

# Supprimer l'ancien Git
rm -rf .git

# Réinitialiser un nouveau Git
git init
```

---

### 3️⃣ **Créer un NOUVEAU repository sur GitHub**

1. Allez sur **https://github.com/new**
2. **Repository name** : `planify`
3. **Description** : `Application de planification d'emploi du temps avec React et MockAPI`
4. **Public** ou **Private** (votre choix)
5. ⚠️ **NE COCHEZ PAS** "Add a README file"
6. ⚠️ **NE COCHEZ PAS** "Add .gitignore"
7. Cliquez sur **"Create repository"**

---

### 4️⃣ **Pousser votre code sur le nouveau repo**

GitHub vous donnera ces commandes, exécutez-les :

```bash
# Dans le dossier planify/
git add .
git commit -m "Initial commit - PLANIFY complete"

git remote add origin https://github.com/VOTRE-USERNAME/planify.git
git branch -M main
git push -u origin main
```

✅ **Votre nouveau code est sur GitHub !**

---

## 🚀 **Alternative : Force Push (garder le même repo)**

Si vous voulez **garder l'URL du repo** mais remplacer tout le contenu :

```bash
# Dans le dossier planify/

# Supprimer l'ancien Git local
rm -rf .git

# Réinitialiser
git init
git add .
git commit -m "Fresh start - PLANIFY complete"

# Remplacez par VOTRE URL de repo existant
git remote add origin https://github.com/VOTRE-USERNAME/planify.git

# Force push (ÉCRASE TOUT l'ancien code)
git push -u origin main --force
```

⚠️ **ATTENTION** : `--force` écrase complètement l'historique GitHub

---

## 🔍 **Vérifier que ça a marché**

1. Allez sur **https://github.com/VOTRE-USERNAME/planify**
2. Vous devriez voir :
   ```
   planify/
   ├── src/
   ├── public/
   ├── GUIDE_DEPLOIEMENT.md
   ├── GUIDE_INSTALLATION.md
   ├── vercel.json
   ├── package.json
   └── ...
   ```

✅ **Si vous voyez ces fichiers, c'est bon !**

---

## ⚠️ **Erreurs courantes**

### Erreur : "remote origin already exists"

```bash
# Supprimer l'ancien remote
git remote remove origin

# Rajouter le bon
git remote add origin https://github.com/VOTRE-USERNAME/planify.git
```

### Erreur : "Updates were rejected"

```bash
# Force push pour écraser
git push -u origin main --force
```

### Erreur : "Permission denied"

Vous n'êtes pas connecté à GitHub :
```bash
# Configurer votre identité
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"

# Utiliser HTTPS avec token ou SSH
```

---

## 🎉 **Après avoir poussé sur GitHub**

### Déployer sur Vercel :

1. Allez sur **https://vercel.com/**
2. Cliquez sur **"Add New Project"**
3. Importez votre repo **planify**
4. Cliquez sur **"Deploy"**
5. ✅ Votre site est en ligne en 2 minutes !

---

## 📦 **Résumé des commandes**

```bash
# 1. Nettoyer
rm -rf .git

# 2. Réinitialiser
git init
git add .
git commit -m "Initial commit - PLANIFY"

# 3. Pousser (après avoir créé le repo sur GitHub)
git remote add origin https://github.com/VOTRE-USERNAME/planify.git
git branch -M main
git push -u origin main
```

---

## 🆘 **Besoin d'aide ?**

### Voir les remotes configurés :
```bash
git remote -v
```

### Voir l'historique des commits :
```bash
git log --oneline
```

### Voir les fichiers trackés :
```bash
git status
```

---

## ✅ **Checklist finale**

- [ ] Ancien repo supprimé sur GitHub
- [ ] Dossier `.git` supprimé localement
- [ ] Nouveau repo créé sur GitHub
- [ ] Code poussé avec `git push`
- [ ] Code visible sur GitHub.com
- [ ] Prêt pour déploiement Vercel !

**C'est tout ! Votre code est propre sur GitHub 🎉**
