export const FAULTS = {
 battery: {name:'Batterie fatiguée', part:'Batterie 12 V', cost:65, labor:75, symptom:'Le matin, le démarreur tourne lentement. Hier, elle a fini par partir.', tests:{visual:'Les cosses sont propres. Aucun câble ne semble abîmé.',electric:'Batterie au repos : 10,8 V. Charge moteur tournant : 14,2 V.',road:'Le démarrage est difficile, mais le moteur tourne bien une fois lancé.'}, clue:'La charge fonctionne. La batterie ne conserve plus assez d’énergie.', color:'#eb9d54'},
 connection: {name:'Cosse oxydée',part:'Kit de connexion',cost:14,labor:60,symptom:'Parfois, rien quand je tourne la clé. Puis ça repart sans raison.',tests:{visual:'Une épaisse couche verdâtre recouvre la cosse positive.',electric:'Batterie : 12,6 V. Chute de tension importante à la connexion.',road:'L’alimentation se coupe par intermittence au démarrage.'},clue:'La batterie est chargée ; sa connexion laisse mal passer le courant.',color:'#8db7ac'},
 tire: {name:'Pneu endommagé',part:'Pneu de tourisme',cost:45,labor:65,symptom:'La voiture tire sur le côté et j’entends un bruit sourd en roulant.',tests:{visual:'Le pneu avant droit présente une hernie et une usure irrégulière.',electric:'Batterie et circuit de charge : valeurs normales.',road:'Vibration régulière, proportionnelle à la vitesse des roues.'},clue:'Le défaut visible du pneu explique le comportement en roulant.',color:'#98b2d2'},
 brakes: {name:'Plaquettes usées',part:'Jeu de plaquettes',cost:48,labor:100,symptom:'Ça grince quand je freine. Le bruit empire depuis une semaine.',tests:{visual:'Garniture des plaquettes presque absente. Disques encore utilisables.',electric:'Aucune anomalie électrique détectée.',road:'Bruit métallique uniquement au freinage.'},clue:'Le bruit au freinage et l’usure visible désignent les plaquettes.',color:'#c57b71'},
 oil: {name:'Huile dégradée',part:'Huile et filtre',cost:32,labor:65,symptom:'Le moteur est plus bruyant. Je ne sais plus quand j’ai fait la vidange.',tests:{visual:'Huile très sombre, niveau bas. Pas de fuite visible.',electric:'Les valeurs électriques sont normales.',road:'Fonctionnement rugueux à chaud. Historique : vidange très ancienne.'},clue:'Le niveau et l’historique indiquent un entretien d’huile nécessaire.',color:'#dfbb66'},
 belt: {name:'Courroie usée',part:'Courroie accessoires',cost:35,labor:95,symptom:'Un sifflement au démarrage, surtout quand il fait humide.',tests:{visual:'La courroie présente des craquelures et une surface brillante.',electric:'Charge irrégulière lorsque les accessoires sont sollicités.',road:'Sifflement reproduit lors de la mise en charge des accessoires.'},clue:'La courroie patine : son état confirme l’origine du sifflement.',color:'#b4a1c6'}
};
export const TESTS = {visual:{name:'Inspection visuelle',time:15,icon:'eye'},electric:{name:'Mesures électriques',time:20,icon:'bolt'},road:{name:'Essai & écoute',time:25,icon:'wheel'}};
export const CLIENTS = [
 {name:'Samira',job:'Infirmière de nuit',quote:'J’ai besoin d’elle pour ma garde de ce soir.',car:'Mistral 120',color:'#dd7657',fault:'battery'},
 {name:'René',job:'Voisin de toujours',quote:'Cette voiture et moi, on a encore de la route à faire.',car:'Belleville 84',color:'#7caab0',fault:'connection'},
 {name:'Lina',job:'Livreuse indépendante',quote:'Chaque heure sans rouler, c’est une tournée en moins.',car:'Petit Cargo',color:'#d3b358',fault:'tire'},
 {name:'Camille',job:'Association du quartier',quote:'On prépare la collecte du week-end. Merci pour le coup de main.',car:'Mistral 120',color:'#91ac81',fault:'brakes'},
 {name:'Malik',job:'Passionné d’anciennes',quote:'Écoute ce moteur… Il mérite qu’on s’occupe de lui.',car:'Belleville 84',color:'#ad8dba',fault:'oil'},
 {name:'Jo',job:'Fleuriste',quote:'Elle siffle plus fort que ma radio. Tu peux regarder ?',car:'Petit Cargo',color:'#7394c1',fault:'belt'}
];
export const UPGRADES = [
 {id:'lift',name:'Pont élévateur',cost:350,desc:'−20 min par réparation. La première grande étape.',icon:'lift'},
 {id:'tools',name:'Outillage de précision',cost:500,desc:'−10 % sur le prix des pièces. Des gestes plus efficaces.',icon:'tool'},
 {id:'sign',name:'Nouvelle enseigne',cost:600,desc:'+15 € de main-d’œuvre par intervention. Le quartier vous connaît.',icon:'star'},
 {id:'bench',name:'Établi de restauration',cost:800,desc:'+100 € à la valeur de vos voitures restaurées.',icon:'car'}
];
export const GOALS = [
 {id:'first',title:'Les mains dans le cambouis',desc:'Livrer votre première réparation.',check:s=>s.completed>=1},
 {id:'regular',title:'Une adresse de confiance',desc:'Réparer 5 voitures.',check:s=>s.completed>=5},
 {id:'lift',title:'Prendre de la hauteur',desc:'Installer le pont élévateur.',check:s=>s.upgrades.includes('lift')},
 {id:'resale',title:'Une seconde vie',desc:'Restaurer et revendre une voiture.',check:s=>s.sold>=1},
 {id:'master',title:'Le garage du quartier',desc:'12 réparations, une revente et les 4 améliorations.',check:s=>s.completed>=12&&s.sold>=1&&s.upgrades.length===4}
];
