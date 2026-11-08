export const REVISION='1.0.0';
export const FLOORS=[
 {id:'hangar',x:0,z:14,w:17,d:20},
 {id:'spine',x:0,z:-7,w:7,d:22},
 {id:'west-walk',x:-9,z:5,w:14,d:4},
 {id:'workshop',x:-21,z:-.5,w:14,d:15},
 {id:'vault',x:-9.5,z:-6,w:7,d:6},
 {id:'garden-walk',x:7,z:5,w:9,d:4},
 {id:'garden',x:18,z:0,w:21,d:17},
 {id:'medical',x:0,z:-17,w:15,d:12},
 {id:'airlock',x:0,z:-24,w:6,d:4},
 {id:'bridge',x:-10.2,z:0,w:3,d:6,bridge:true}
];
export const OBJECTS=[
 {id:'beacon',name:'Balise du sas',action:'Rétablir la liaison',pos:[0,0,10.5],kind:'console'},
 {id:'cell',name:'Cellule d’énergie',action:'Saisir la cellule',pos:[-24,0,4],kind:'cell'},
 {id:'power',name:'Répartiteur électrique',action:'Répartir l’énergie',pos:[-24,0,-4],kind:'console'},
 {id:'winch',name:'Commande du treuil',action:'Déplacer la passerelle',pos:[-17,0,-3],kind:'lever'},
 {id:'clamp',name:'Ancrage magnétique',action:'Verrouiller la passerelle',pos:[-14.2,0,1],kind:'clamp'},
 {id:'pack',name:'Propulseurs de manœuvre',action:'Équiper les propulseurs',pos:[-9.5,0,-6],kind:'pack'},
 {id:'lens',name:'Prisme suspendu',action:'Saisir le prisme',pos:[24,3.5,4],kind:'lens'},
 {id:'socket',name:'Projecteur de la serre',action:'Installer le prisme',pos:[10.5,0,1],kind:'console'},
 {id:'mirrorA',name:'Miroir A',action:'Tourner de 45°',pos:[16,0,1],kind:'mirror'},
 {id:'mirrorB',name:'Miroir B',action:'Tourner de 45°',pos:[16,0,-4],kind:'mirror'},
 {id:'anchorA',name:'Relais ALPHA',action:'Réactiver le relais',pos:[-6,2,-30],kind:'anchor'},
 {id:'anchorB',name:'Relais BÊTA',action:'Réactiver le relais',pos:[6,4.3,-36],kind:'anchor'},
 {id:'radio',name:'Antenne de communication',action:'Orienter l’antenne',pos:[0,3,-45],kind:'radio'},
 {id:'pod',name:'Chambre de Nora',action:'Sécuriser le transfert',pos:[-4,0,-19],kind:'pod'},
 {id:'shuttle',name:'Navette de maintenance',action:'Préparer le départ',pos:[0,0,20],kind:'shuttle'},
 {id:'logA',name:'Archive : le dernier départ',action:'Lire l’enregistrement',pos:[-25,0,-6],kind:'log'},
 {id:'logB',name:'Archive : le jardin de Nora',action:'Lire l’enregistrement',pos:[25,0,-5],kind:'log'}
];
export const NODES={
 home:[0,0,14],hub:[0,0,5],west:[-17,0,5],work:[-20,0,0],bridgeWest:[-14.8,0,1],bridgeSouth:[-10.2,0,4],bridgeNorth:[-10.2,0,-4.5],gardenEntry:[9,0,5],garden:[19,0,4],spine:[0,0,-5],med:[0,0,-17],lock:[0,0,-24],alpha:[-6,2,-30],beta:[6,4.3,-36],antenna:[0,3,-43]
};
export const LINKS=[['home','hub'],['hub','west'],['west','work'],['work','bridgeWest'],['west','bridgeSouth'],['bridgeSouth','bridgeNorth','bridge'],['hub','gardenEntry'],['gardenEntry','garden'],['hub','spine'],['spine','med'],['med','lock','garden'],['lock','alpha','space'],['alpha','beta','space'],['beta','antenna','space']];
export const ARCHIVES={logA:{title:'Le dernier départ',speaker:'Nora · Journal technique',text:'Les navettes ont quitté Élytre. Je termine le verrouillage de la banque biologique, puis je rejoins le sas nord. IRIS, si mon signal disparaît, garde le module médical sous tension.'},logB:{title:'Le jardin de Nora',speaker:'Nora · Note personnelle',text:'Quand les lampes se rallument, les feuilles se tournent vers elles. Même ici, si loin du sol, les plantes savent encore trouver leur soleil. Si quelqu’un revient : laissez-leur un peu de lumière.'}};
export const distance=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2]);
export function floorAt(x,z,flags){return FLOORS.find(f=>(!f.bridge||flags.bridgeClamped||flags.bridgeAligned&&flags.power==='winch')&&Math.abs(x-f.x)<=f.w/2&&Math.abs(z-f.z)<=f.d/2);}
export function inVacuum(p){return p[2]<-26||p[0]<-29||p[0]>29||p[1]>6.2;}
