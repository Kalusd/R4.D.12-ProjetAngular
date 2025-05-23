# R4.D.12-ProjetAngular

## Démarage du projet

Pour démarrer le projet, il faut d'abord installer les dépendances avec la commande `npm install`.  
Puis installer json-server avec la commande `npm install -g json-server`.  
Il faut ensuite démarrer json-server qui permet de récupérer les données du fichier dataStore/dbdata.json avec une API avec la commande `json-server --watch dataStore/dbdata.json`.  
Enfin, il faut démarrer le serveur de développement avec la commande `ng serve`.  

## Sujet

### 📌 Contexte

Une boutique spécialisée dans la vente et la location de jeux vidéo souhaite mettre en place une application web interne pour gérer son catalogue de jeux et ses réservations.  
L’application doit permettre aux employés de :

- Consulter la liste des jeux vidéo disponibles dans le catalogue.
- Voir les réservations effectuées par les clients pour un jeu.
- Ajouter manuellement une réservation lorsqu’un client réserve un jeu en boutique.

Dans une future évolution, l’entreprise prévoit un portail client, mais l’application actuelle est uniquement destinée à l’usage interne des employés.  

### 🛠️ Technologies imposées

- Backend API : Laravel
- Frontend Web : Angular
- Base de données simulée : JSON Server (ou Strapi)

### 📋 Travail demandé

Vous devez développer la partie Angular de l’application permettant :  

- ✔ L’affichage de la liste des jeux vidéo disponibles (titre, plateforme, genre, etc.).
- ✔ La consultation des réservations enregistrées.
- ✔ L’ajout manuel d’une nouvelle réservation pour un client.
- ✔ (Optionnel - Bonus) : La modification ou l’annulation d’une réservation.

### 🗂️ Structure des données (Fichier JSON)

#### 🕹️ Jeu Vidéo

- Titre (ex. : The Legend of Zelda: Breath of the Wild, Elden Ring)
- Plateforme (PlayStation, Xbox, PC, Switch, etc.)
- Genre (Action, RPG, FPS, etc.)
- Développeur (ex. : Nintendo, FromSoftware)
- Date de sortie
- Stock disponible (nombre d’exemplaires disponibles en boutique)

#### 📝 Réservation

- Nom du client
- Email du client
- Numéro de téléphone
- Titre du jeu réservé
- Plateforme
- Date de réservation
- Statut de la réservation (Confirmée, En attente, Annulée)

### 🎨 Contraintes et recommandations

- ✅ L’interface doit être ergonomique et facile à utiliser (Bootstrap ou autre framework CSS facultatif).
- ✅ Une recherche et un filtrage des jeux et des réservations doivent être possibles.
- ✅ La navigation entre les sections doit être fluide.

### 📅 Livraison du projet

Le projet doit être soumis sous la forme d’une archive zip (sans node_modules et après ng cache clean).  
Date limite de rendu : Vendredi 4 avril 2025 en fin de séance.  
