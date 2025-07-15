# CLAUDE.md

Ce fichier fournit des conseils à Claude Code (claude.ai/code) pour travailler avec le code de ce dépôt.

## Vue d'ensemble du projet

Il s'agit d'une application web de suivi d'entraînement marathon et de poids pour la préparation du 3 juillet au 26 octobre 2025. L'application est une webapp monopage en français qui aide à suivre les séances d'entraînement quotidiennes et les progrès de poids corporel.

## Architecture

Le projet consiste en une application web côté client simple sans système de build ni dépendances backend :

- **road_to_rennes.html** : Fichier HTML principal contenant l'interface utilisateur complète et la logique de l'application
- **sessions-data.js** : Structure de données des séances d'entraînement avec des plans d'entraînement détaillés
- **timeline-render.js** : Module JavaScript pour le rendu de la timeline des séances (actuellement non utilisé dans le HTML principal)

### Architecture des données

- **Structure des données de séance** : Chaque séance dans `sessions-data.js` contient :
  - `date` : Chaîne de date ISO
  - `title` : Nom/description de la séance
  - `semi`/`mar` : Indicateurs booléens pour les types de course
  - `done` : Statut de completion
  - `sections` : Tableau d'informations détaillées (objectif, résumé, détails, conseils, justification)

- **Local Storage** : Les données utilisateur (statut de completion, poids) sont persistées dans le localStorage du navigateur avec des clés comme `day-YYYY-MM-DD`

### Composants UI

- **Layout basé sur des cartes** : Chaque jour est rendu comme une carte extensible montrant les détails d'entraînement
- **Éléments interactifs** : Cases à cocher pour le suivi de completion, champs numériques pour le poids
- **Design responsive** : Utilise les classes Tailwind CSS pour un layout responsive mobile-first

## Développement

### Exécuter l'application

Ouvrir `road_to_rennes.html` directement dans un navigateur web - aucun processus de build ou serveur requis.

### Détails d'implémentation clés

- Le fichier HTML principal contient du JavaScript inline pour toute la logique de l'application
- Les données sont chargées depuis `sessions-data.js` via le tableau global `sessions` (bien qu'utilisant actuellement l'objet inline `dayPlans`)
- La fonctionnalité timeline existe dans `timeline-render.js` mais n'est pas intégrée avec l'application principale
- Tout le styling utilise Tailwind CSS via CDN

### Gestion des données

- Les données de completion de séance et de poids se sauvegardent automatiquement dans localStorage lors de l'interaction utilisateur
- Aucune persistence côté serveur - toutes les données sont côté client uniquement
- Le formatage des dates utilise des chaînes ISO (YYYY-MM-DD) pour la cohérence

### Étendre l'application

- Ajouter de nouvelles séances d'entraînement en étendant l'objet `dayPlans` dans le fichier HTML ou le tableau `sessions` dans `sessions-data.js`
- Modifier le layout des cartes en mettant à jour la fonction `createCard()`
- Le renderer de timeline dans `timeline-render.js` fournit un format d'affichage alternatif qui pourrait être intégré