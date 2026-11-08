# Garage de quartier

Un jeu web solo en français, conçu pour le tactile et la souris. Illustration originale du garage, simulation indépendante de l’affichage, aucune dépendance ni ressource tierce.

## Jouer

Accueillir un client → lire les symptômes → effectuer des tests → choisir un diagnostic → commander la pièce → retirer les quatre fixations → réparer → contrôler → livrer.

Une mauvaise pièce ne résout pas le problème. Le contrôle bloque toute livraison incorrecte. Les devis sont figés lors de la commande. Les travaux sont conservés au changement de journée. Les annonces ouvrent au jour 2 ; une aide de relance évite un blocage financier.

## Contenu de la version 1.0

- Six pannes, trois tests et six personnages.
- Gestion des journées, factures, réputation et livre de comptes.
- Quatre améliorations et leurs effets visibles ou économiques.
- Achat, restauration et revente d’une Belleville.
- Cinq objectifs ; fin de campagne à 12 réparations, une vente et quatre améliorations, puis jeu libre.
- Commandes tactiles, interface française responsive, son optionnel, mouvement réduit.
- Sauvegarde locale, import/export JSON et validation des données importées.
- Application web installable si le navigateur le propose, et cache hors ligne après la première visite.

La mécanique est volontairement simplifiée : une réparation utilise quatre fixations et une installation. Pas encore de conduite libre, employés, peinture, multijoueur, backend ou synchronisation entre appareils. Les personnages, modèles et situations sont fictifs.

## Lancement local

Python 3 suffit, aucun build :

```sh
python -m http.server 8765
```

Ouvrir http://localhost:8765. Les modules JavaScript nécessitent un serveur HTTP ; l’ouverture directe de index.html en fichier local ne suffit pas.

## Tests

Depuis la console du navigateur sur la page servie :

```js
const { runTests } = await import('./tests.mjs');
console.table(runTests().results);
```

Le rapport QA détaille les scénarios réellement vérifiés et leurs limites. Le moteur pur peut aussi être importé avec un runtime JavaScript moderne disposant de structuredClone.

## Architecture

- `engine.mjs` : règles, transactions, progression et validation de sauvegarde.
- `data.mjs` : pannes, clients, tests, équipements et objectifs.
- `scene.mjs` : illustration Canvas originale, animation légère et adaptation haute densité.
- `app.mjs` : interface DOM, interactions, audio et sauvegarde.
- `style.css` : disposition mobile et ordinateur, contrastes et mouvement réduit.
- `sw.js` : cache hors ligne, ressources servies en priorité depuis le réseau.

Les sauvegardes restent dans le navigateur. Exporter la partie avant d’effacer les données du site. Un fichier importé remplace la partie seulement après confirmation. Les visuels sont générés localement par le code, les sons par Web Audio.

## Publication

Site statique compatible GitHub Pages. Le workflow publie le dossier sans build et sans clé d’API. L’activation initiale de Pages dépend des permissions GitHub du dépôt.
