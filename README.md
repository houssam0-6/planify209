# Planify - Application de Planification

Une application React pour la gestion et la planification d'événements, inspirée du design moderne avec un calendrier hebdomadaire.

## 🚀 Fonctionnalités

- **Authentification** : Pages de connexion et d'inscription
- **Calendrier hebdomadaire** : Visualisation des événements sur 7 jours
- **Gestion des événements** : Ajout, modification et suppression d'événements
- **Design responsive** : Compatible mobile, tablette et desktop
- **Interface moderne** : Design inspiré de l'image fournie

## 📋 Prérequis

- Node.js v22.x
- npm ou yarn

## 🛠️ Installation

1. Créez le projet React :
```bash
npx create-react-app planify
cd planify
```

2. Installez React Router :
```bash
npm install react-router-dom
```

3. Copiez tous les fichiers fournis dans leurs emplacements respectifs :
   - `src/App.js`
   - `src/App.css`
   - `src/pages/Login.js` et `src/pages/Login.css`
   - `src/pages/Register.js` et `src/pages/Register.css`
   - `src/pages/Home.js` et `src/pages/Home.css`

## 🎯 Démarrage

```bash
npm start
```

L'application sera disponible sur `http://localhost:3000`

## 📱 Pages disponibles

### 1. Page de Connexion (`/login`)
- Formulaire de connexion avec email et mot de passe
- Lien vers la page d'inscription
- Logo Planify avec le slogan

### 2. Page d'Inscription (`/register`)
- Formulaire d'inscription complet
- Validation du mot de passe
- Lien vers la page de connexion

### 3. Page d'Accueil (`/home`)
- Calendrier hebdomadaire (Lundi - Dimanche)
- Affichage des événements avec couleurs
- Filtrage par matière
- Options d'édition et de suppression
- Bouton d'ajout d'événements

## 🎨 Palette de couleurs

- **Vert** : Maths
- **Orange** : Histoire
- **Bleu** : Informatique
- **Violet** : Anglais
- **Rose** : Physique
- **Violet clair** : Sport
- **Jaune** : Chimie

## 🔧 Personnalisation

### Modifier les événements
Dans `src/pages/Home.js`, modifiez le state `events` :

```javascript
const [events, setEvents] = useState([
  { 
    id: 1, 
    day: 'Lundi', 
    title: 'Votre cours', 
    time: '10:00 - 12:00', 
    room: 'A101', 
    color: 'green' 
  },
  // Ajoutez vos événements...
]);
```

### Couleurs disponibles
- `green`, `orange`, `blue`, `purple`, `pink`, `light-purple`, `yellow`

## 📦 Structure du projet

```
planify/
├── src/
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Login.js
│   │   ├── Login.css
│   │   ├── Register.js
│   │   └── Register.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── public/
└── package.json
```

## 🚀 Prochaines étapes

Pour améliorer l'application, vous pouvez :

1. **Backend** : Intégrer une API pour la persistance des données
2. **Authentification** : Ajouter JWT ou OAuth
3. **Base de données** : MongoDB, Firebase ou PostgreSQL
4. **Fonctionnalités** :
   - Drag & drop des événements
   - Vue mensuelle/annuelle
   - Notifications
   - Partage de calendrier
   - Export PDF/ICS
   - Mode sombre

## 📄 Licence

MIT

## 👨‍💻 Auteur

Créé avec ❤️ pour la gestion simplifiée de votre planning
