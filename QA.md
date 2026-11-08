# Rapport de validation — version 1.0

Tests réalisés le 7 novembre 2026 (heure de New York), dans le navigateur Chromium intégré d’OpenBot. La date UTC des exécutions est le 8 novembre.

## Résultat

29 tests du moteur sur 29 réussis. Deux parcours client et une restauration ont également été manipulés dans l’interface. Aucun débordement horizontal constaté sur les tailles vérifiées. Aucun message d’erreur JavaScript observé dans les instantanés du jeu.

## Règles vérifiées

Le fichier `tests.mjs` couvre les six pannes, le cycle diagnostic/devis/commande/réparation/contrôle/livraison, le refus des actions hors séquence, les quatre fixations, les pièces incorrectes, les devis figés, les achats et réductions, le budget insuffisant, l’heure de fermeture, la conservation des travaux, la relance financière, la restauration/revente, la sérialisation à chaque phase et le rejet de sauvegardes invalides. Une simulation de campagne atteint les cinq objectifs sans ajout artificiel de fonds.

## Parcours manipulés dans le navigateur

1. Démarrage de partie et accueil de Samira sur mobile.
2. Inspection et mesures électriques.
3. Mauvais diagnostic volontaire : connexion au lieu de batterie.
4. Commande, quatre fixations, installation et contrôle : retour au diagnostic, livraison impossible.
5. Bon diagnostic, nouvelle commande et rechargement de la page au milieu du travail : les quatre fixations retirées sont conservées.
6. Réparation correcte et livraison : trésorerie 506 €, une voiture livrée et premier objectif acquis.
7. Jour suivant, achat de la Belleville, diagnostic, réparation, contrôle, restauration et revente : une revente et objectif correspondant acquis.
8. Achat du pont : coût déduit, objectif acquis, temps de réparation réduit et pont dessiné dans le garage.
9. Pneu de Lina : début au format mobile, reprise et livraison au format ordinateur. Résultat : deux réparations client livrées.

## Affichage

- Portrait : viewport demandé à 320 × 740, 390 × 844 et 414 × 896.
- Paysage : viewport demandé à 844 × 390.
- Ordinateur : viewport demandé à 1440 × 1000.
- Les outils signalent parfois une largeur de capture réduite par la barre de défilement. Les assertions utilisent `innerWidth` et `scrollWidth`.
- Les quatre écrans ont été parcourus à 320 px, sur ordinateur et en paysage sans débordement horizontal.
- Captures inspectées visuellement : accueil, atelier mobile, réparation tactile et atelier ordinateur.
- Les quatre fixations tactiles mesurent environ 48 × 48 px.
- Mode mouvement réduit activé et navigation vérifiée à petite largeur.
- Texte des listes de diagnostic porté à 16 px sur mobile pour limiter le zoom automatique des champs sur iOS.

## Sauvegarde et hors ligne

La reprise réelle après rechargement conserve l’intervention. Les données peuvent être exportées et importées ; le schéma et les phases sont validés avant import. L’import/export via le sélecteur de fichiers n’a pas été manipulé de bout en bout.

Le service worker est actif et ses neuf ressources essentielles sont en cache. Un test du gestionnaire avec une requête réseau forcée en échec rend le document en cache avec un statut 200. Il s’agit d’une panne réseau simulée, pas d’un test en mode avion sur téléphone physique.

## Publication GitHub

Le dépôt public et les fichiers ont été créés via le connecteur GitHub. Le workflow teste le moteur, puis tente le déploiement Pages.

Le premier déploiement a échoué à l’activation initiale de Pages avec `Resource not accessible by integration`. Après activation de Pages par le propriétaire, le connecteur GitHub a relancé le job en échec. Le déploiement et le job de vérification sont maintenant réussis.

URL publique contrôlée : https://giovannihilaire01-cyber.github.io/garage-de-quartier/

Validation sur l’URL publique au format mobile : accueil de Samira, inspection, mesures, diagnostic batterie, commande, quatre fixations, installation, contrôle et livraison. Résultat : une voiture livrée et 520 € de trésorerie. Les 29 tests passent également depuis le site public ; le service worker est actif et aucun débordement horizontal n’a été détecté.

## Limites

Pas de test sur appareil Android ou iPhone physique, ni sur Safari ou Firefox. Pas de mesure de performances sur téléphone ancien. Installation PWA et audio sur iOS non vérifiés. La progression et les réparations constituent une première version courte et simplifiée, pas encore la campagne de 15 à 20 heures du concept. Aucun employé, atelier de peinture ou mode de conduite libre dans cette version.
