import {FAULTS,CLIENTS,TESTS,UPGRADES,GOALS} from './data.mjs';
export const VERSION=1;
export function fresh(){return {version:VERSION,day:1,minutes:480,cash:420,reputation:50,completed:0,sold:0,upgrades:[],active:null,project:null,offers:[0,1,2],history:[],ledger:[],goals:[],sound:false,started:false,seed:1};}
export const price=(s,id)=>Math.round(FAULTS[id].cost*(s.upgrades.includes('tools')?.9:1));
export const fee=(s,id)=>FAULTS[id].labor+(s.upgrades.includes('sign')?15:0);
export const repairTime=s=>s.upgrades.includes('lift')?40:60;
export const clock=s=>`${String(Math.floor(s.minutes/60)).padStart(2,'0')}:${String(s.minutes%60).padStart(2,'0')}`;
export function client(s,index){const base=CLIENTS[index%CLIENTS.length];return {...base,fault:s.day<=2?base.fault:CLIENTS[(index+s.day-2)%CLIENTS.length].fault};}
function requireThat(value,message){if(!value)throw Error(message);}
function spendTime(s,n){requireThat(s.minutes+n<=1080,'La journée se termine à 18 h. Fermez l’atelier pour reprendre demain.');s.minutes+=n;}
function money(s,n,label){requireThat(s.cash+n>=0,'Trésorerie insuffisante. Une intervention client ou une nouvelle journée peut vous aider.');s.cash+=n;s.ledger.unshift({day:s.day,label,amount:n});s.ledger=s.ledger.slice(0,40);}
function achievements(s){const unlocked=[];for(const g of GOALS)if(!s.goals.includes(g.id)&&g.check(s)){s.goals.push(g.id);unlocked.push(g.title);}return unlocked;}
export function act(state,type,payload={}){
 const s=structuredClone(state);let message='';
 switch(type){
 case 'start':s.started=true;message='Bienvenue à l’atelier. Choisissez votre premier client.';break;
 case 'accept':{
  requireThat(!s.active,'Terminez le véhicule en cours.');requireThat(s.offers.includes(payload.index),'Ce rendez-vous n’est plus disponible.');
  const c=client(s,payload.index);s.active={...c,id:`${s.day}-${payload.index}-${s.completed}`,tests:[],diagnosis:null,part:null,bolts:[],repaired:false,checked:false,source:'client',stage:'diagnose'};s.offers=s.offers.filter(i=>i!==payload.index);message=`${c.name} vous confie sa ${c.car}.`;break;
 }
 case 'test':{
  const a=s.active;requireThat(a&&a.stage==='diagnose','Ouvrez un diagnostic.');requireThat(TESTS[payload.id],'Test inconnu.');requireThat(!a.tests.includes(payload.id),'Ce test a déjà été effectué.');spendTime(s,TESTS[payload.id].time);a.tests.push(payload.id);message=FAULTS[a.fault].tests[payload.id];break;
 }
 case 'diagnose':{
  const a=s.active;requireThat(a&&a.stage==='diagnose','Aucun diagnostic à établir.');requireThat(a.tests.length>0,'Effectuez au moins un test avant de conclure.');requireThat(FAULTS[payload.id],'Diagnostic inconnu.');
  a.diagnosis=payload.id;a.stage='quote';message='Diagnostic noté. Vérifiez le devis avant de commander.';break;
 }
 case 'rethink':{const a=s.active;requireThat(a&&a.stage==='quote','Le devis a déjà été validé.');a.stage='diagnose';a.diagnosis=null;message='Retour aux observations.';break;}
 case 'order':{
  const a=s.active;requireThat(a&&a.stage==='quote','Aucun devis à valider.');spendTime(s,15);const cost=price(s,a.diagnosis);money(s,-cost,FAULTS[a.diagnosis].part);a.invoice=25+cost+fee(s,a.diagnosis);a.part=a.diagnosis;a.stage='repair';message='Pièce disponible. Démontez les quatre fixations.';break;
 }
 case 'bolt':{
  const a=s.active;requireThat(a&&a.stage==='repair','Aucune réparation en cours.');requireThat(Number.isInteger(payload.index)&&payload.index>=0&&payload.index<4,'Fixation inconnue.');requireThat(!a.bolts.includes(payload.index),'Fixation déjà retirée.');a.bolts.push(payload.index);break;
 }
 case 'repair':{
  const a=s.active;requireThat(a&&a.stage==='repair'&&a.bolts.length===4,'Retirez les quatre fixations.');spendTime(s,repairTime(s));a.repaired=a.part===a.fault;a.stage='check';message='Pièce installée. Il reste le contrôle qualité.';break;
 }
 case 'check':{
  const a=s.active;requireThat(a&&a.stage==='check','Aucun contrôle à effectuer.');spendTime(s,15);
  if(a.repaired){a.checked=true;a.stage='deliver';message='Contrôle réussi : le symptôme a disparu.';}
  else {a.stage='diagnose';a.diagnosis=null;a.part=null;a.bolts=[];message='Le symptôme persiste. Reprenez les tests : la pièce changée n’était pas en cause.';}
  break;
 }
 case 'deliver':{
  const a=s.active;requireThat(a&&a.stage==='deliver'&&a.checked,'Le contrôle doit être réussi avant livraison.');
  if(a.source==='project'){s.project={...s.project,restored:true};s.active=null;message='Restauration terminée. Votre voiture est prête à la vente.';}
  else {const total=a.invoice;money(s,total,`Facture · ${a.name}`);s.completed++;s.reputation=Math.min(100,s.reputation+4);s.history.unshift({name:a.name,car:a.car,fault:a.fault,total,day:s.day});s.history=s.history.slice(0,30);s.active=null;message=`Livraison réussie ! ${a.name} règle ${total} €.`;}
  break;
 }
 case 'upgrade':{const u=UPGRADES.find(x=>x.id===payload.id);requireThat(u,'Amélioration inconnue.');requireThat(!s.upgrades.includes(u.id),'Amélioration déjà installée.');money(s,-u.cost,u.name);s.upgrades.push(u.id);message=`${u.name} installé !`;break;}
 case 'buy':requireThat(!s.project,'Une restauration vous attend déjà.');requireThat(s.day>=2,'Les annonces ouvrent au jour 2.');money(s,-220,'Achat · Belleville 84');s.project={car:'Belleville 84',color:'#e0b263',fault:'connection',restored:false};message='La Belleville arrive dans votre cour.';break;
 case 'restore':requireThat(s.project&&!s.project.restored,'Aucun véhicule à restaurer.');requireThat(!s.active,'Libérez d’abord le poste de travail.');s.active={...s.project,id:`project-${s.day}`,name:'Votre projet',job:'Achat-revente',quote:'Une ancienne qui mérite une seconde vie.',tests:[],diagnosis:null,part:null,bolts:[],repaired:false,checked:false,source:'project',stage:'diagnose'};message='La Belleville est entrée à l’atelier.';break;
 case 'sell':requireThat(s.project?.restored,'Restaurez la voiture avant de la vendre.');{const value=440+(s.upgrades.includes('bench')?100:0);money(s,value,'Vente · Belleville 84');s.project=null;s.sold++;message=`Une seconde vie pour la Belleville. Vente : ${value} €.`;}break;
 case 'nextDay':{
  const charges=35;money(s,-Math.min(charges,s.cash),'Charges de l’atelier');if(s.cash<70){money(s,70-s.cash,'Aide de relance du quartier');}
  s.day++;s.minutes=480;s.offers=Array.from({length:3},(_,i)=>(s.day*2-2+i)%CLIENTS.length);message=`Jour ${s.day}. Les pièces et les travaux en cours sont conservés.`;break;
 }
 case 'sound':s.sound=!s.sound;break;
 default:throw Error('Action inconnue.');
 }
 const unlocked=achievements(s);return {state:s,message,unlocked};
}
export function validateSave(value){
 try{
  const s=value;
  if(!s||s.version!==VERSION||!Number.isInteger(s.day)||s.day<1||s.day>100000||!Number.isInteger(s.minutes)||s.minutes<480||s.minutes>1080||!Number.isInteger(s.cash)||s.cash<0||s.cash>100000000)return false;
  if(!Number.isInteger(s.completed)||s.completed<0||!Number.isInteger(s.sold)||s.sold<0||!Number.isFinite(s.reputation)||s.reputation<0||s.reputation>100)return false;
  if(!Array.isArray(s.upgrades)||new Set(s.upgrades).size!==s.upgrades.length||s.upgrades.some(x=>!UPGRADES.some(u=>u.id===x)))return false;
  if(!Array.isArray(s.offers)||s.offers.length>3||s.offers.some(x=>!Number.isInteger(x)||x<0||x>=CLIENTS.length))return false;
  if(!Array.isArray(s.goals)||s.goals.some(x=>!GOALS.some(g=>g.id===x))||!Array.isArray(s.history)||s.history.length>30||!Array.isArray(s.ledger)||s.ledger.length>40||typeof s.started!=='boolean'||typeof s.sound!=='boolean')return false;
  if(s.history.some(x=>!FAULTS[x.fault]||typeof x.name!=='string'||typeof x.car!=='string'||!Number.isFinite(x.total)))return false;
  if(s.ledger.some(x=>typeof x.label!=='string'||!Number.isFinite(x.amount)))return false;
  if(s.project&&(!FAULTS[s.project.fault]||typeof s.project.restored!=='boolean'||typeof s.project.car!=='string'||!/^#[0-9a-f]{6}$/i.test(s.project.color)))return false;
  if(s.active){const a=s.active;if(!FAULTS[a.fault]||!['diagnose','quote','repair','check','deliver'].includes(a.stage)||!['client','project'].includes(a.source)||typeof a.name!=='string'||typeof a.car!=='string'||typeof a.job!=='string'||typeof a.quote!=='string'||!/^#[0-9a-f]{6}$/i.test(a.color)||!Array.isArray(a.tests)||a.tests.some(x=>!TESTS[x])||!Array.isArray(a.bolts)||a.bolts.some(x=>!Number.isInteger(x)||x<0||x>3)||new Set(a.bolts).size!==a.bolts.length)return false;
   if(a.diagnosis!==null&&!FAULTS[a.diagnosis]||a.part!==null&&!FAULTS[a.part])return false;
   if(a.stage!=='diagnose'&&!FAULTS[a.diagnosis])return false;
   if(['repair','check','deliver'].includes(a.stage)&&(!FAULTS[a.part]||!Number.isInteger(a.invoice)||a.invoice<0))return false;
   if(a.stage==='deliver'&&(!a.checked||!a.repaired||a.part!==a.fault))return false;
   if(a.source==='project'&&!s.project)return false;
  }
  return true;
 }catch{return false;}
}
