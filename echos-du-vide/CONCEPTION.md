# Échos du vide — document de conception

Statut : proposition de conception, avant prototype. Les durées, budgets techniques et réglages indiqués sont des objectifs à valider par des essais. Plateformes retenues : navigateur sur ordinateur et smartphone. Jeu solo en 3D.

## 1. Promesse

Explorer une station spatiale abandonnée et la réveiller, système après système, pour découvrir qui a envoyé un appel de détresse et ramener une personne vivante.

La station est le personnage central. Chaque réparation transforme ce que le joueur voit, entend et peut atteindre : éclairage, circulation, gravité, végétation, communications. Le plaisir vient autant du trajet et de la découverte que de la résolution.

Trois piliers : déplacement agréable en apesanteur ; énigmes physiques compréhensibles et variées ; mystère raconté par les lieux et leurs transformations.

La caméra est à la troisième personne. L’ambiance vise l’émerveillement, la solitude et une tension douce. Les dangers sont environnementaux. Le jeu principal ne repose pas sur le combat.

## 2. Situation et histoire complète

Le joueur incarne Alex, spécialiste de récupération qui répond au signal d’Élytre, une station de recherche biologique en orbite autour de la géante gazeuse Nacre. Les données publiques la donnent évacuée depuis près de deux ans.

Le véhicule d’approche est endommagé pendant l’amarrage. Alex peut rejoindre un sas et trouver refuge, mais doit remettre en service la navette de maintenance pour repartir.

Une voix humaine fragmentée guide les premiers pas. Des lumières s’allument au passage, une porte s’ouvre avant qu’Alex ne l’actionne. Tout laisse supposer qu’une personne suit sa progression.

Premier retournement : la voix est composée d’anciens enregistrements de Nora, ingénieure de la station. IRIS, son système d’assistance, utilise ces fragments parce que son propre module vocal est endommagé. Les messages sont anciens, les interventions d’IRIS sont actuelles.

Deuxième découverte : l’évacuation a suivi une tempête solaire qui a isolé plusieurs modules. Nora est restée pour sécuriser les réserves biologiques et les opérations de départ. Un accès endommagé l’a empêchée de rejoindre la dernière navette. Elle a utilisé une chambre de sommeil médical en attendant les secours.

IRIS conserve sa chambre sur une alimentation indépendante et envoie le signal de détresse avec les moyens disponibles. Ses actions parfois déroutantes protègent les secteurs encore viables ; aucun retournement final ne transforme arbitrairement IRIS en ennemi.

L’objectif évolue alors : repartir devient sauver Nora et repartir ensemble. Les indices de sa présence réelle apparaissent avant la révélation : entretien automatique d’une chambre, consommation électrique inhabituelle, message interrompu sur un départ qui n’a jamais eu lieu.

Conclusion : Alex sécurise la chambre, rétablit la navette et effectue le transfert de Nora. Après le départ, elle reprend conscience. Selon les actions facultatives, les archives d’IRIS ont été emportées et la serre conserve une réserve autonome. La station éclairée apparaît une dernière fois derrière la vitre.

Une conclusion principale est prévue. Les objectifs secondaires enrichissent l’épilogue ; ils ne conditionnent pas le sauvetage et ne forcent pas à trouver tous les secrets.

## 3. Boucle de jeu

Apercevoir un lieu ou recevoir une question → rejoindre la zone → observer son fonctionnement → essayer une interaction → reconfigurer le système → ouvrir un passage ou modifier le lieu → obtenir une découverte → choisir la prochaine exploration.

Les récompenses doivent être perceptibles dans le monde. Ouvrir une porte seule est insuffisant : derrière, un point de vue, une information ou une façon différente de se déplacer doit justifier le trajet.

Exemple : voir une serre éteinte depuis une baie, retrouver son arrivée électrique, remettre sa gravité en route, traverser les plantes qui se redressent et apercevoir une antenne accessible depuis une passerelle auparavant bloquée.

## 4. Déplacements et caméra

À pied, les bottes magnétiques donnent une marche lisible sur les surfaces prévues. En extérieur et dans certaines salles, la combinaison permet un vol en trois dimensions. Les transitions ont une zone et un indicateur explicites ; elles ne retournent pas la caméra par surprise.

Le vol est assisté : vitesse limitée, accélération progressive, freinage automatique au relâchement et horizon stabilisé. Pas de rotation libre autour de l’axe de visée. En avançant, la direction de la caméra permet également de monter ou descendre. Le joueur n’a donc pas à gérer six axes sur un écran tactile.

Un point d’accrochage proche propose une assistance d’approche. Elle facilite l’arrivée à un sas ou une prise, sans supprimer le trajet. Un rappel d’urgence ramène au dernier refuge en cas de dérive dangereuse.

La caméra évite les murs, se rapproche dans les couloirs et s’éloigne légèrement dans l’espace ouvert. Sensibilité, inversion verticale, distance et effets de secousse sont réglables. Aucun mouvement de tête imposé.

## 5. Commandes

Sur smartphone, le paysage est le format principal. Un joystick à gauche contrôle les déplacements, le glissement à droite oriente la caméra et un gros bouton contextuel sert à agir. Le scanner et le frein renforcé sont les seuls accès secondaires permanents lorsque nécessaires.

Le mode portrait reste utilisable avec une disposition verticale adaptée, des zones de toucher séparées et une recommandation discrète du paysage. Il ne doit pas masquer les actions ni bloquer une reprise de partie.

Sur ordinateur : ZQSD et WASD, souris pour regarder, touche d’interaction, scanner et pause. Les commandes sont reconfigurables. Le verrouillage du pointeur est proposé sur ordinateur et libéré dès l’ouverture d’un menu.

Les menus suspendent la simulation solo : oxygène, objets et machines attendent le joueur. Une perte de visibilité du navigateur met automatiquement le jeu en pause.

## 6. Trois familles de gameplay

### Énergie

Le joueur répartit une capacité limitée entre des systèmes identifiables. Des conduits lumineux et des symboles montrent le lien entre source, appareil et effet. Les décisions sont réversibles et les circuits locaux limitent la complexité.

Exemple : alimenter un ascenseur ou un treuil. Utiliser le treuil pour placer une passerelle permet ensuite de libérer son alimentation et d’activer l’ascenseur. Un choix de configuration devient une suite d’actions dans l’espace.

### Manipulation magnétique

Un outil attire, maintient et déplace certains objets. Il peut servir à transporter une cellule d’alimentation, rapprocher une caisse flottante ou actionner un élément hors de portée.

Les objets importants ont une portée de rappel et des emplacements de stabilisation. Un objet perdu hors des limites revient à un emplacement sûr. Les contacts ne peuvent pas supprimer un objet de quête ou le laisser définitivement coincé dans une paroi.

### Gravité et pression

Certains modules peuvent changer d’état. Une salle pressurisée autorise le retrait du casque dans une séquence narrative ; un sas mal équilibré refuse l’ouverture avec une explication claire. Une gravité locale désactivée rend une passerelle aérienne atteignable ; son rétablissement déplace des éléments prévus et stabilise le décor.

Ces systèmes ont des règles constantes. Ils ne constituent pas un prétexte pour imposer le même panneau de boutons à chaque chapitre.

## 7. Progression des outils

Les bottes, les propulseurs et une lampe sont disponibles dès le départ. Le scanner arrive dans le premier module technique et rend visibles des connexions ou anomalies précises. L’outil magnétique ouvre ensuite une vraie famille d’interactions. Un relais portable permet enfin de maintenir temporairement un circuit à distance.

Chaque acquisition est utilisée dans une situation nouvelle avant d’être combinée à une autre. Les capacités indispensables sont sur le chemin principal. Aucun secret manquable ne bloque l’histoire.

Les améliorations facultatives facilitent l’exploration — portée de rappel, réserve supplémentaire, balise de retour — sans transformer une route principale en piège pour un joueur qui ne les possède pas.

## 8. Station et chapitres

### Le sas d’arrivée

Tutoriel intégré : avancer, regarder, attraper une prise et rejoindre le sas. Le premier refuge permet de respirer et d’observer Nacre. Le tableau de maintenance indique une alimentation absente. Une manipulation simple réveille la porte du module voisin.

### Les ateliers

Découverte de la répartition d’énergie et du scanner. Une cellule transportable, un treuil et une passerelle forment la première énigme à plusieurs étapes. Récompense : outil magnétique, raccourci vers le sas et premier échange intentionnel avec IRIS.

### La serre orbitale

Identité visuelle verte et ambre, gravité locale, végétation figée dans la pénombre. Le joueur comprend l’ordre d’activation de la circulation, de la gravité et de l’éclairage. Récompense : lieu transformé, nouvel accès en hauteur et indice sur Nora.

### La couronne extérieure

Séquence de sortie spatiale : trajet entre points d’accrochage, éléments en rotation lente et antenne à réorienter. Une ligne de vue doit être rétablie avant de pouvoir transmettre. Récompense : révélation sur la voix et localisation de la chambre médicale.

### Le module de sommeil

Exploration plus intime. Le joueur lit le fonctionnement de l’alimentation indépendante, sécurise le transfert et prépare un trajet vers le hangar. Les contraintes de pression et d’énergie reprennent des règles déjà apprises. Nora est visible ; l’enjeu devient concret.

### Le noyau et le retour au hangar

Dernière combinaison des outils : relais portable, manipulation magnétique et répartition des systèmes. Le retour traverse des lieux transformés plutôt qu’une nouvelle série de couloirs. Les raccourcis ouverts servent au transfert de la chambre vers la navette. Décollage et épilogue constituent une vraie conclusion.

## 9. Exemple complet d’énigme

Dans les ateliers, un pont manque entre deux plateformes. La console de l’ascenseur fonctionne, mais la capacité du circuit ne permet pas d’activer simultanément le treuil et l’ascenseur.

Le scanner révèle un support magnétique au-dessus du vide. En alimentant le treuil, le joueur peut rapprocher une passerelle suspendue. Il la stabilise sur le support, coupe le treuil et réaffecte l’énergie à l’ascenseur. Il accède alors à la passerelle, récupère le nouvel outil et ouvre le raccourci de retour.

L’échec est réversible. Une passerelle relâchée revient à son arrêt mécanique. La console indique l’appareil alimenté. Une aide graduée peut attirer l’attention sur le support, expliquer son rôle, puis décrire la solution seulement en dernier recours.

## 10. Dangers, ressources et échec

L’oxygène diminue dans le vide et les zones non pressurisées. Les refuges le rechargent sans coût. Les objectifs de réglage initiaux sont une réserve d’environ 150 secondes et des trajets principaux nettement plus courts, à vérifier par des débutants sur tactile.

Les avertissements sont visuels, textuels et sonores. Une indication de retour au refuge apparaît assez tôt pour décider. Les énigmes longues disposent d’un espace sûr à proximité.

Les propulseurs disposent d’une réserve de poussée qui se recharge à l’arrêt ou à une prise. Le freinage de sécurité reste disponible. L’oxygène et la poussée ont des rôles distincts, mais leur interface doit rester simple ; le prototype pourra supprimer la réserve de poussée si deux jauges ajoutent surtout de la confusion.

Les dangers comprennent conduites endommagées, zones de chaleur, panneaux mobiles et passages exposés. Leur silhouette et leurs cycles sont lisibles avant engagement. Les passages à timing précis restent limités et assistables.

En cas d’échec, retour au dernier refuge. Les découvertes et énigmes résolues restent acquises ; les objets de quête reviennent à une position sûre. Pas de perte aléatoire d’inventaire ni de longue section à refaire.

## 11. Exploration facultative

Trois ensembles facultatifs : retrouver les messages personnels de Nora, préserver une réserve biologique et reconstituer les archives d’IRIS. Chacun contient une petite histoire et une variation de gameplay, plutôt qu’une collecte répétée d’objets identiques.

Le joueur peut suivre une voix derrière une cloison, repérer une salle par un hublot ou apercevoir un point d’ancrage atypique. Le scanner aide à comprendre ; il ne révèle pas automatiquement tous les secrets à travers les murs.

Ces découvertes modifient des détails du monde ou de l’épilogue et peuvent donner un avantage de confort. Elles n’exigent pas de monnaie ni de longues corvées.

## 12. Rythme et narration

Alterner découverte calme, problème à résoudre, trajet différent et moment spectaculaire. Après une énigme exigeante, offrir un espace à contempler ou une interaction simple. Les messages courts accompagnent l’action ; les archives longues sont disponibles dans le journal.

IRIS intervient selon la situation réellement atteinte. Ses conseils ne contredisent pas l’état des appareils ou les actions déjà réalisées. Les événements attendent des jalons du joueur, sans calendrier global caché qui condamnerait une partie lente.

La navigation repose sur des silhouettes, couleurs et symboles propres aux modules, des fenêtres orientées vers Nacre et une carte schématique consultable. Un objectif rappelle l’intention — atteindre la serre — sans détailler systématiquement chaque manipulation.

## 13. Direction artistique et sonore

3D stylisée aux formes lisibles, surfaces simples et éclairage travaillé. Combinaison claire avec accents orange, panneaux d’énergie cyan, circuits hors service marqués par forme et symbole, serre verte et ambre, extérieur bleu profond.

Une planète imposante fournit le principal spectacle. Les changements d’éclairage, objets en suspension et machines qui redémarrent donnent vie à la station. Les détails importants restent visibles sur un petit écran.

Dans le vide, priorité aux sons transmis par la combinaison, à la respiration et à la radio. À l’intérieur : vibrations, ventilation, pas et musique discrète. Aucune information indispensable n’est sonore uniquement. Sous-titres, volume des voix, effets et musique se règlent séparément.

## 14. Interface et accessibilité

L’espace de jeu occupe l’écran. L’interface permanente montre un objectif bref, l’état de la combinaison et les commandes nécessaires. Journal, carte, inventaire et réglages sont repliés par défaut.

Un objet proche affiche son nom et une action explicite : alimenter, saisir, rappeler ou ouvrir. Les éléments interactifs ont un signe autre que la couleur. La sélection privilégie la cible la plus cohérente avec la visée et propose un changement manuel si plusieurs objets sont proches.

Taille de texte réglable, contrastes lisibles, commandes reconfigurables, réduction des effets, sensibilité réglable et assistance de déplacement. La lecture du journal suspend le danger. Le focus clavier est conservé dans les menus. Aucun contrôle fixe ne doit masquer une autre action.

Trois aides indépendantes : guidage d’exploration, vol assisté et ressources généreuses. Le joueur peut modifier ces aides en cours de partie.

## 15. Sauvegarde et reprise

Sauvegarde aux refuges, aux jalons d’énigmes et aux transitions, avec un indicateur réel de succès. Conserver une dernière sauvegarde valide et proposer import/export avec confirmation.

Les préférences sont séparées de la progression. Une instance périmée ne peut pas écraser silencieusement la partie d’un autre onglet. Un échec d’écriture laisse une alerte persistante et une possibilité d’export.

La reprise restaure la zone, les outils, les quêtes, les circuits, les portes et les positions utiles. Elle place le personnage dans une position sûre si une configuration physique n’est plus valide. La perte du contexte graphique doit pouvoir être récupérée sans réinitialiser la progression.

## 16. Périmètre et durée

Objectif du jeu complet : une aventure concentrée d’environ 2 à 3 heures pour l’histoire, avec une exploration facultative supplémentaire. Ce n’est pas une durée garantie : elle doit être mesurée auprès de joueurs.

Premier prototype : sas, ateliers et petite sortie extérieure ; déplacements complets, une énigme d’énergie, une manipulation magnétique et retour au refuge. Son rôle est de prouver le plaisir de jouer et la lisibilité des commandes.

Première aventure publiable : trois modules, trois énigmes distinctes, une révélation et une extraction qui conclut l’épisode. Objectif indicatif de 30 à 45 minutes, à mesurer. Elle devra être présentée comme un premier épisode, pas comme toute la station conçue ici.

La station complète, la serre, le module médical et la progression finale ne seront ajoutés qu’après validation de cette base. Pas de monde spatial infini, multijoueur, commerce ou génération procédurale dans le périmètre initial.

## 17. Réalisation web proposée

Three.js, TypeScript et Vite pour le runtime web ; physique ciblée sur le personnage et les objets manipulables, avec Rapier si nécessaire. Les règles de jeu et sauvegardes restent indépendantes de la scène 3D.

Découpage : simulation, déplacements, caméra, interactions, énigmes, narration, sauvegarde, rendu et interface. Les zones sont chargées progressivement. Les modèles sont exportés en GLB, avec géométries et textures optimisées. Les lumières statiques et les éléments modulaires limitent le coût.

Objectif initial de fluidité : 30 images par seconde stables sur le téléphone de référence choisi, 60 sur ordinateur lorsque possible. Qualité adaptative, résolution limitée, effets facultatifs et scène mise en pause en arrière-plan. Aucune performance ne sera annoncée comme validée avant mesure sur les appareils retenus.

La première visite devra expliquer le chargement et permettre de commencer avant de télécharger la station entière. Le hors-ligne sera proposé seulement pour les zones réellement mises en cache, avec un état clair.

## 18. Éléments à produire

Personnage et animations de marche, vol, prise et interaction ; combinaison, capsule, navette et chambre médicale ; modules de murs, sols, portes, fenêtres et sas ; équipements propres à chaque zone ; caisses, cellules, supports, relais et treuils interactifs ; végétation stylisée ; planète et environnement spatial ; effets de propulsion et de remise en service ; interface tactile, carte et pictogrammes ; ambiance, effets, voix ou communications sous-titrées ; textes de progression, indices et journal.

Chaque asset interactif doit avoir ses états visuels — hors service, disponible, actif, bloqué — et ses collisions adaptées. Le contenu narratif doit correspondre à ces états. Les objets décoratifs ne doivent pas être pris par erreur pour des objectifs indispensables.

## 19. Validation avant publication

Le prototype ne réussit pas parce que le personnage bouge ou qu’un script peut atteindre la fin. Un débutant doit comprendre le déplacement, lire une interaction et résoudre une première situation sans assistance orale.

Essais obligatoires : vrai smartphone choisi comme référence ; orientation et interruptions ; reprise à chaque phase ; conflits entre onglets ; panne d’écriture ; perte de connexion ; perte du contexte graphique ; outils et objets perdus ; retour à une ancienne zone ; aide et clavier ; parcours sans secret ; ordre alternatif des interactions ; partie complète après plusieurs sauvegardes.

Les énigmes doivent avoir un retour visuel, une possibilité de récupération et une solution démontrable. Chaque amélioration doit ouvrir une action ou changer une décision. Les dialogues doivent rester cohérents après une reprise ou une résolution dans un ordre différent.

## 20. Règle de décision

Chaque nouvelle zone doit apporter au moins un déplacement, une énigme ou une découverte qui renouvelle l’expérience. Chaque système remis en marche doit transformer réellement la station. Si le jeu devient une suite de portes ouvertes en répétant la même manipulation, la conception doit être revue avant d’ajouter du contenu.
