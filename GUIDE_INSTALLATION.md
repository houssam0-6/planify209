# 🎯 PLANIFY - Guide d'Installation Complet

## 📋 Prérequis
- Node.js v22.x installé
- Un compte MockAPI gratuit (https://mockapi.io/)

---

## 🚀 ÉTAPE 1 : Configuration de MockAPI

### 1.1 Créer un compte MockAPI
1. Allez sur **https://mockapi.io/**
2. Cliquez sur **"Get Started"** ou **"Sign Up"**
3. Créez un compte gratuit (avec GitHub, Google, ou email)

### 1.2 Créer un nouveau projet
1. Une fois connecté, cliquez sur **"+ New Project"**
2. Donnez un nom à votre projet : **"planify"**
3. Cliquez sur **"Create"**
4. Notez votre **Project URL** (ex: `https://675abc123.mockapi.io/api/v1`)

### 1.3 Créer la ressource "users"
1. Dans votre projet, cliquez sur **"+ New Resource"**
2. Nom de la ressource : **users**
3. Ajoutez les champs suivants :

| Champ | Type | Exemple |
|-------|------|---------|
| id | Number (auto) | 1 |
| username | String | "ahmed123" |
| name | String | "Ahmed El Mansouri" |
| email | String | "ahmed@example.com" |
| password | String | "password123" |

4. Cliquez sur **"Create"**

### 1.4 Créer la ressource "events"
1. Cliquez à nouveau sur **"+ New Resource"**
2. Nom de la ressource : **events**
3. Ajoutez les champs suivants :

| Champ | Type | Exemple |
|-------|------|---------|
| id | Number (auto) | 1 |
| userId | String | "1" |
| day | String | "Lundi" |
| title | String | "Maths - Cours" |
| time | String | "10:00 - 12:00" |
| room | String | "A101" |
| color | String | "green" |

4. Cliquez sur **"Create"**

### 1.5 Récupérer votre URL API
Votre URL API ressemblera à :
```
https://675abc123def456.mockapi.io/api/v1
```

---

## 🛠️ ÉTAPE 2 : Installation du projet React

### 2.1 Créer le projet
```bash
# Créer le projet React
npx create-react-app planify
cd planify

# Installer React Router
npm install react-router-dom
```

### 2.2 Structure des fichiers
Créez la structure suivante :
```
planify/
├── src/
│   ├── config/
│   │   └── api.js          # Configuration MockAPI
│   ├── pages/
│   │   ├── Login.js
│   │   ├── Login.css
│   │   ├── Register.js
│   │   ├── Register.css
│   │   ├── Home.js
│   │   └── Home.css
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

### 2.3 Configurer l'URL de votre API
Ouvrez `src/config/api.js` et remplacez par **VOTRE URL** :

```javascript
// REMPLACEZ cette URL par votre URL MockAPI
export const API_URL = 'https://675abc123def456.mockapi.io/api/v1';

export const ENDPOINTS = {
  users: `${API_URL}/users`,
  events: `${API_URL}/events`
};
```

---

## ▶️ ÉTAPE 3 : Lancer l'application

```bash
npm start
```

L'application s'ouvrira sur **http://localhost:3000**

---

## 📱 ÉTAPE 4 : Tester l'application

### Test 1 : Inscription
1. L'application vous redirige automatiquement vers `/login`
2. Cliquez sur **"S'inscrire"**
3. Remplissez le formulaire :
   - Username: `test123`
   - Nom: `Test User`
   - Email: `test@example.com`
   - Mot de passe: `password123`
   - Confirmer: `password123`
4. Cliquez sur **"S'inscrire"**
5. ✅ Vous êtes redirigé vers la page de connexion

### Test 2 : Connexion
1. Entrez vos identifiants :
   - Username: `test123`
   - Mot de passe: `password123`
2. Cliquez sur **"Se connecter"**
3. ✅ Vous accédez au calendrier vide

### Test 3 : Ajouter un événement
1. Cliquez sur **"+ Ajouter un événement"**
2. Remplissez le formulaire :
   - Titre: `Maths - Cours`
   - Jour: `Lundi`
   - Horaire: `10:00 - 12:00`
   - Salle: `A101`
   - Couleur: `🟢 Vert (Maths)`
3. Cliquez sur **"Ajouter"**
4. ✅ La carte apparaît dans la colonne Lundi

### Test 4 : Modifier un événement
1. Cliquez sur l'icône **✏️** sur une carte
2. Modifiez l'horaire : `11:00 - 13:00`
3. Cliquez sur **"Modifier"**
4. ✅ La carte se met à jour

### Test 5 : Supprimer un événement
1. Cliquez sur l'icône **🗑️** sur une carte
2. Confirmez la suppression
3. ✅ La carte disparaît

### Test 6 : Filtrer les événements
1. Dans la barre de recherche, tapez `Maths`
2. ✅ Seuls les événements contenant "Maths" s'affichent
3. Effacez le texte
4. ✅ Tous les événements réapparaissent

### Test 7 : Rafraîchir
1. Cliquez sur **"⟳ Rafraîchir"**
2. ✅ Les événements se rechargent depuis MockAPI

### Test 8 : Déconnexion
1. Cliquez sur **"Déconnexion"**
2. ✅ Vous revenez à la page de connexion

---

## 🔍 ÉTAPE 5 : Vérifier les données dans MockAPI

### Voir les utilisateurs créés
1. Allez sur MockAPI : https://mockapi.io/projects
2. Ouvrez votre projet **planify**
3. Cliquez sur **"users"**
4. ✅ Vous voyez l'utilisateur `test123`

### Voir les événements créés
1. Dans le même projet, cliquez sur **"events"**
2. ✅ Vous voyez tous les événements créés avec leurs détails

---

## 🎨 Couleurs disponibles

| Valeur | Affichage | Usage suggéré |
|--------|-----------|---------------|
| green | 🟢 Vert | Mathématiques |
| orange | 🟠 Orange | Histoire/Sciences humaines |
| blue | 🔵 Bleu | Informatique/Technologie |
| purple | 🟣 Violet | Langues (Anglais, Français) |
| pink | 🌸 Rose | Sciences (Physique, Chimie) |
| light-purple | 💜 Violet clair | Sport/Activités physiques |
| yellow | 🟡 Jaune | Autres cours |

---

## 🐛 Dépannage

### Erreur : "Network request failed"
**Solution** : Vérifiez que votre URL MockAPI est correcte dans `src/config/api.js`

### Erreur : "Cannot read property 'id' of undefined"
**Solution** : Assurez-vous d'avoir créé les ressources "users" et "events" sur MockAPI

### Les événements ne s'affichent pas
**Solution** : Ouvrez la console du navigateur (F12) pour voir les erreurs

### L'application ne démarre pas
**Solution** :
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
npm start
```

---

## 📊 Architecture de l'application

```
┌─────────────────────────────────────────┐
│           MOCKAPI.IO (Cloud)            │
│  ┌───────────┐      ┌──────────────┐   │
│  │   users   │      │    events    │   │
│  │  (table)  │      │   (table)    │   │
│  └───────────┘      └──────────────┘   │
└─────────────────────────────────────────┘
              ↑               ↑
              │               │
         Fetch API       Fetch API
              │               │
┌─────────────────────────────────────────┐
│        React Frontend (localhost)       │
│  ┌──────────┐  ┌──────────┐  ┌───────┐ │
│  │  Login   │→ │ Register │→ │ Home  │ │
│  └──────────┘  └──────────┘  └───────┘ │
│                                         │
│       localStorage (Session)            │
└─────────────────────────────────────────┘
```

---

## ✅ Fonctionnalités implémentées

✅ Inscription avec validation
✅ Connexion avec vérification
✅ Session utilisateur (localStorage)
✅ Calendrier hebdomadaire vide au départ
✅ Ajout d'événements (modal popup)
✅ Modification d'événements
✅ Suppression d'événements
✅ Filtrage par matière (recherche)
✅ Rafraîchissement depuis MockAPI
✅ Déconnexion
✅ Design responsive (mobile, tablette, desktop)
✅ 7 couleurs différentes pour catégoriser
✅ Interface inspirée de l'image fournie

---

## 🚀 Prochaines étapes (optionnel)

1. **Ajouter une page de profil** : Modifier nom, email, photo
2. **Notification par email** : Avec EmailJS
3. **Export en PDF** : Exporter le calendrier
4. **Mode sombre** : Toggle dark/light mode
5. **Partage de calendrier** : Plusieurs utilisateurs peuvent voir le même planning
6. **Rappels** : Notifications push avant un cours
7. **Vue mensuelle** : En plus de la vue hebdomadaire
8. **Drag & Drop** : Déplacer les événements entre les jours

---

## 📞 Support

Si vous avez des questions ou des problèmes :
1. Vérifiez que MockAPI fonctionne (testez l'URL dans le navigateur)
2. Ouvrez la console du navigateur (F12) pour voir les erreurs
3. Vérifiez que tous les fichiers sont bien copiés
4. Relancez `npm install` et `npm start`

---

## 🎉 Bon développement avec PLANIFY !
