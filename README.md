Pour lancer le projet :

## Prérequis

- Node.js

## Serveur back-end

Après avoir cloné le projet et être allé dans son terminal :

- `cd backend` pour aller dans le dossier
- `npm install` pour installer les dépendances
- `node index.js` ou `nodemon` pour lancer le serveur

Le serveur devrait être effectif sur l'adresse `http://localhost:3000/`.

A chaque nouvelle requête effectuée, le serveur récupère les nouvelles données des fichiers CSV dans `database` et les fournit sous un format acceptable pour Chart.js.

## Serveur front-end

Sur un second terminal :

- `cd frontend` pour aller dans le dossier
- `npm install` pour installer les dépendances
- `npm run serve` pour lancer le serveur

Le terminal devrait afficher sur quelle adresse le serveur est effectif.

Les composants effectuent leurs requêtes au serveur back-end toutes les secondes.