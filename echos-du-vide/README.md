# Échos du vide — Le signal d’Élytre

Premier épisode autonome d’aventure 3D, en français. Explorez une station spatiale, rétablissez ses systèmes et suivez un appel de détresse jusqu’à l’extraction de Nora.

## Contenu réalisé

- Vue à la troisième personne, marche et vol assisté en trois dimensions.
- Atelier avec répartition d’énergie, treuil, passerelle mobile et ancrage.
- Serre avec prisme suspendu, miroirs orientables et faisceau visible.
- Sortie spatiale vers des relais à différentes hauteurs, oxygène et points de rappel.
- Antenne orientable, révélation d’IRIS, chambre médicale et départ en navette.
- Deux archives facultatives et une conclusion qui tient compte de leur récupération.
- Interface tactile en portrait et paysage, caméra au glissement et joystick.
- Itinéraires assistés facultatifs : ils déplacent le personnage sans résoudre les énigmes.
- Pause des ressources dans les menus et lorsque l’onglet est masqué.
- Sauvegardes versionnées, détection des conflits entre onglets, sauvegarde de secours, import/export et alerte d’échec persistante.
- Qualité graphique réglable, texte agrandi et ambiance sonore facultative.

Les décors, objets, personnage, planète et illustrations sont générés par le code du jeu. Three.js est inclus localement ; aucune ressource distante n’est nécessaire au lancement. Le cache hors ligne est préparé après la première visite réussie.

Il s’agit d’un premier épisode, pas de toute l’aventure de 2 à 3 heures envisagée dans `CONCEPTION.md`. Les interactions sont cinématiques et déterministes : pas de simulation physique générale, de combat ou de monde procédural infini. Les éléments de décor non interactifs ne sont pas tous des obstacles physiques.

## Commandes

- ZQSD ou WASD : déplacement.
- Glisser sur la vue : caméra.
- E : interaction ; F : propulseurs.
- En vol : avancer suit le regard ; Espace et C permettent aussi de monter et descendre.
- J : journal ; Échap : pause.
- Sur tactile : joystick, glissement de caméra et boutons contextuels.

Relâcher les commandes freine. Le guidage vers l’objectif reste facultatif et s’arrête dès qu’une commande manuelle est utilisée. Les points bleus signalent les interactions ; les tablettes orange sont des archives.

## Lancement

Le projet est statique, sans installation nécessaire :

```sh
python -m http.server 8766
```

Ouvrir http://localhost:8766 dans le dossier du jeu. WebGL 2 est nécessaire. Une page d’erreur explicite est prévue lorsque la vue 3D ne peut pas démarrer.

## Architecture

- `level.mjs` : géométrie logique, objets et graphe de navigation.
- `engine.mjs` : règles, interactions, déplacement, ressources et validation.
- `render.mjs` : scène Three.js et modèles procéduraux.
- `storage.mjs` : sauvegardes, concurrence et récupération.
- `app.mjs` : interface, commandes et orchestration.
- `audio.mjs` : sons synthétisés avec Web Audio.
- `tests.mjs` : scénarios du moteur et du stockage.

Les règles ne dépendent pas des objets Three.js. Les mouvements guidés empruntent le même moteur de déplacement que les commandes manuelles. Aucun contrôle de téléportation de test n’est exposé sur la page ; les diagnostics publics sont en lecture seule.

Le style critique est intégré à `index.html` pour assurer sa disponibilité dès le premier rendu et lors d’une reprise depuis le cache. Après une modification de `style.css` ou de `index.template.html`, exécuter `python build.py`. La CI vérifie que le HTML généré est à jour.

## Tests

Dans un navigateur servant le jeu :

```js
const result = await (await import('./tests.mjs')).runTests();
console.table(result.results);
```

Ou avec un Node.js récent :

```sh
node --input-type=module -e "import('./tests.mjs').then(async m => { const r = await m.runTests(); console.table(r.results); if(r.passed !== r.total) process.exit(1); })"
```

Le rapport `QA.md` indique les vérifications réellement effectuées et leurs limites. Une émulation de format d’écran ne prouve pas les performances ni le confort sur téléphone physique.

## Dépendance

Three.js 0.187.0, licence MIT incluse dans `vendor/LICENSE`. Le paquet officiel npm a été vérifié par son empreinte SHA-512, puis les exports utilisés ont été regroupés avec esbuild 0.28.2. Le résultat autonome est `vendor/three.min.mjs`.

Publication prévue dans le sous-dossier `echos-du-vide/` du dépôt déjà hébergé par GitHub Pages. Le jeu Garage de quartier à la racine reste distinct.
