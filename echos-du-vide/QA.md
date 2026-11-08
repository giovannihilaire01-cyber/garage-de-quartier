# Validation du premier épisode

Version 1.0.0. Essais réalisés le 8 novembre 2026 dans Chromium via le navigateur OpenBot. Aucun téléphone physique, Safari ou Firefox n’a été utilisé.

## Parcours complet réellement joué

Le personnage a rejoint les objets avec le moteur de déplacement du jeu, en utilisant l’assistance d’itinéraire. Les interactions, rotations et choix ont été réalisés par les contrôles de l’interface. Aucun changement de position ni déblocage de quête par une API de test n’a été utilisé pour ce parcours.

1. Liaison du sas.
2. Cellule récupérée et installée.
3. Treuil alimenté, passerelle déplacée puis verrouillée.
4. Circuit réaffecté à la porte, traversée du pont et équipement des propulseurs.
5. Vol jusqu’au prisme en hauteur et retour au projecteur.
6. Rotation des deux miroirs et remise en service de la serre.
7. Sortie spatiale, deux relais de hauteurs différentes, réserve d’oxygène consommée puis rechargée.
8. Antenne orientée jusqu’à 100 %, puis transmission et révélation d’IRIS.
9. Retour au module médical, transfert de Nora et retour au hangar.
10. Confirmation du départ, animation de la navette et écran de conclusion.

Le parcours assisté a pris environ 382 secondes de simulation, hors menus et pauses. Cela ne mesure pas la durée d’une découverte humaine ni une durée garantie du jeu. Le contenu est présenté comme un premier épisode court.

## Vérifications du moteur et du stockage

43 tests couvrent : état initial, accès prématurés, proximité, passerelle réversible, coffre, outil de vol, prisme, miroirs, relais, antenne, transmission, fin, archives, bords de plancher, vol vertical, pose des bottes, oxygène et rappel, guidage conditionnel, sauvegardes incohérentes, sérialisation, concurrence d’écriture, panne de quota, récupération du secours et écritures successives.

Les scénarios unitaires placent volontairement leurs états de test près des objets pour tester les règles. Ils sont distincts du parcours complet réalisé par les déplacements de l’interface.

## Essais de défaillance dans la page

- Écriture de la clé de partie forcée en échec : l’action reste visible en mémoire mais le bouton d’état affiche durablement « Sauvegarde impossible · exporter ». Le message de réussite de l’interaction ne masque pas cette alerte. Après rechargement, la dernière sauvegarde valide est reprise.
- Deux onglets ouverts sur la même partie : une nouvelle action dans le premier met le second en pause avec un avertissement de conflit. L’ancien onglet propose la reprise de la dernière version ou son export ; il ne réenregistre pas silencieusement son état périmé.
- Plusieurs rechargements pendant la progression ont conservé les systèmes résolus, la position et les outils.

## Commandes et présentation

- Mouvement clavier contrôlé par maintien synthétique de touche dans la page.
- Joystick contrôlé par événements de pointeur synthétiques, avec déplacement mesuré et arrêt au relâchement. Le navigateur d’automatisation ne fournit pas un essai matériel de gestes tactiles ; son outil de glisser-déposer natif ne correspond pas à un joystick.
- Partie parcourue à 1301 × 647 puis en paysage demandé à 844 × 390. Écrans de menus et reprise vérifiés en portrait demandé à 390 × 844.
- Captures du rendu 3D, de l’interface, du vol et de la fin inspectées visuellement.
- La qualité graphique est réglable. Les mesures observées dans ce navigateur sont influencées par l’automatisation et ne sont pas une garantie de 30 ou 60 images par seconde sur un téléphone.

## Défauts corrigés pendant les essais

- La caméra de vol pouvait passer sous un plancher : contrainte de hauteur ajoutée lorsque la caméra survole un plancher intérieur.
- Les miroirs résolus pouvaient être modifiés et rendre l’état incohérent : verrouillage de la solution après activation de la serre.
- Le circuit du coffre pouvait être refermé après acquisition de l’outil : circuit stabilisé une fois cette énigme terminée.
- Un objet transféré pouvait rester sélectionnable : exclusion des cibles déjà récupérées ou transférées.
- La navette pouvait rester en altitude après une nouvelle partie : réinitialisation de sa position.
- Une feuille de style servie depuis le cache s’est révélée vide dans le CSSOM du navigateur : le style critique est désormais intégré directement au HTML généré. Le démarrage ne dépend plus d’un chargement CSS séparé.
- Ajout d’une confirmation avant le départ final et d’un rappel des communications importantes dans le journal.

## Limites explicites

Le monde est une construction 3D stylisée avec interactions cinématiques. Le déplacement est borné par les planchers et les accès de progression ; tous les accessoires décoratifs n’ont pas de collision physique. Il n’y a pas de moteur général d’objets lancés, de combat, de doublage vocal ou de station procédurale.

La conception longue dans CONCEPTION.md décrit des extensions futures. Cet épisode n’est pas une réalisation de toute cette campagne.

L’oxygène et la récupération sont couverts par le moteur et le parcours extérieur. Le fonctionnement en mode avion sur téléphone, l’installation sur écran d’accueil, l’import/export par un sélecteur de fichiers mobile, la perte réelle de contexte GPU et le comportement thermique sur appareil ancien ne sont pas validés physiquement.

Les sauvegardes restent sur l’appareil. L’export sert au transfert ; aucun backend ou suivi utilisateur n’est utilisé.
