#!/bin/bash

# Script pour nettoyer et republier PLANIFY sur GitHub
# Utilisez ce script dans le dossier planify/

echo "🗑️  Nettoyage de l'ancien Git..."
rm -rf .git

echo "🆕 Initialisation d'un nouveau Git..."
git init

echo "📦 Ajout de tous les fichiers..."
git add .

echo "💾 Commit initial..."
git commit -m "Initial commit - PLANIFY complete with MockAPI"

echo ""
echo "📝 INSTRUCTIONS :"
echo "1. Créez un NOUVEAU repository sur https://github.com/new"
echo "2. Nommez-le 'planify' (ou un autre nom)"
echo "3. NE COCHEZ PAS 'Initialize with README'"
echo "4. Copiez l'URL du repo (ex: https://github.com/username/planify.git)"
echo ""
echo "Puis exécutez ces commandes :"
echo ""
echo "git remote add origin https://github.com/VOTRE-USERNAME/planify.git"
echo "git branch -M main"
echo "git push -u origin main --force"
echo ""
echo "✅ Votre code sera poussé sur GitHub !"
