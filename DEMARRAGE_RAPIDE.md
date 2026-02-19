# 🎯 PLANIFY - Démarrage Rapide

## ⚡ Installation en 5 minutes

### 1️⃣ Configurer MockAPI (2 min)
1. Allez sur **https://mockapi.io/** et créez un compte gratuit
2. Créez un nouveau projet nommé **"planify"**
3. Créez 2 ressources :

**Resource 1 : users**
- Champs : id, username, name, email, password

**Resource 2 : events**
- Champs : id, userId, day, title, time, room, color

4. Copiez votre URL (ex: `https://675abc123.mockapi.io/api/v1`)

### 2️⃣ Installer le projet (1 min)
```bash
# Extraire le fichier
unzip planify-mockapi.zip
cd planify

# Installer les dépendances
npm install
```

### 3️⃣ Configurer l'API (30 sec)
Ouvrez `src/config/api.js` et remplacez par VOTRE URL MockAPI :
```javascript
export const API_URL = 'https://VOTRE-URL.mockapi.io/api/v1';
```

### 4️⃣ Lancer l'application (30 sec)
```bash
npm start
```

Ouvrez **http://localhost:3000** 🎉

---

## 🚀 Utilisation

1. **S'inscrire** : Créez un compte (username, nom, email, mot de passe)
2. **Se connecter** : Utilisez vos identifiants
3. **Ajouter un événement** : Cliquez sur "+ Ajouter un événement"
4. **Modifier** : Cliquez sur ✏️ sur une carte
5. **Supprimer** : Cliquez sur 🗑️ sur une carte
6. **Filtrer** : Tapez dans la barre de recherche (ex: "Maths")
7. **Rafraîchir** : Cliquez sur "⟳ Rafraîchir"

---

## 📚 Documentation complète

Voir `GUIDE_INSTALLATION.md` pour le guide détaillé avec captures d'écran et dépannage.

---

## 🎨 Fonctionnalités

✅ Inscription / Connexion avec MockAPI  
✅ Calendrier hebdomadaire (7 jours)  
✅ Ajout / Modification / Suppression d'événements  
✅ Filtrage par matière  
✅ 7 couleurs pour catégoriser (Maths, Histoire, Informatique...)  
✅ Design responsive (mobile, tablette, desktop)  
✅ Modal popup pour gérer les événements  
✅ Session utilisateur avec localStorage  
✅ Aucun backend nécessaire (MockAPI Cloud)  

---

## 🐛 Problème ?

**Erreur "Network request failed"** → Vérifiez votre URL MockAPI dans `src/config/api.js`

**Les événements ne s'affichent pas** → Ouvrez F12 (console) pour voir les erreurs

**L'app ne démarre pas** → 
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

---

## 📞 Technologies utilisées

- **React** 18+ (Node.js v22)
- **React Router** pour la navigation
- **MockAPI.io** comme base de données (gratuit)
- **localStorage** pour la session utilisateur
- **CSS personnalisé** (pas de Bootstrap)

**Aucun backend nécessaire !** 🎉
