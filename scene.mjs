// Original procedural illustration. No remote assets or fonts.
export class GarageScene{
 constructor(canvas,state){this.canvas=canvas;this.ctx=canvas.getContext('2d');this.state=state;this.frame=0;this.reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;this.resize=()=>{const d=Math.min(devicePixelRatio||1,2);canvas.width=1200*d;canvas.height=650*d;this.ctx.setTransform(d,0,0,d,0,0);this.draw(0);};this.resize();this.tick=t=>{this.draw(t);if(!this.reduce)this.frame=requestAnimationFrame(this.tick);};if(!this.reduce)this.frame=requestAnimationFrame(this.tick);}
 destroy(){cancelAnimationFrame(this.frame);}
 draw(t){const c=this.ctx,s=this.state;const active=s.active;const sky=c.createLinearGradient(0,0,0,650);sky.addColorStop(0,'#b9d2cd');sky.addColorStop(1,'#e2dfc5');c.fillStyle=sky;c.fillRect(0,0,1200,650);
 const rect=(x,y,w,h,color)=>{c.fillStyle=color;c.fillRect(x,y,w,h);};
 const poly=(points,color)=>{c.fillStyle=color;c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fill();};
 const line=(x,y,x2,y2,color,width=2)=>{c.strokeStyle=color;c.lineWidth=width;c.beginPath();c.moveTo(x,y);c.lineTo(x2,y2);c.stroke();};
 const text=(str,x,y,size,color,font='monospace')=>{c.fillStyle=color;c.font=`bold ${size}px ${font}`;c.fillText(str,x,y);};
 const circle=(x,y,r,col)=>{c.fillStyle=col;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();};
 // Quiet neighborhood, trees and neighboring buildings.
 rect(0,120,190,320,'#c3bca4');rect(30,80,125,40,'#b6b09b');for(let i=0;i<3;i++){rect(22+i*56,154,30,56,'#899e99');rect(22+i*56,236,30,56,'#899e99');}
 rect(1020,100,180,300,'#dbccb0');for(let i=0;i<3;i++)rect(1044+i*57,150,31,60,'#8aa9a4');
 rect(0,415,1200,235,'#c8c5b2');poly([[0,512],[1200,465],[1200,650],[0,650]],'#b8b6a7');line(0,600,1200,550,'#e4dfcb',4);
 for(const [x,y] of [[85,255],[1120,270]]){rect(x-6,y,12,210,'#7c8070');circle(x,y-35,72,'#819b78');circle(x-34,y-45,46,'#9caf87');circle(x+30,y-66,50,'#a4b68b');}
 // Shadow and building shell.
 poly([[191,463],[1010,418],[1100,542],[354,606]],'#9da18e');
 poly([[172,143],[839,105],[1018,197],[354,242]],'#657a70');
 poly([[839,105],[1018,197],[1018,463],[839,368]],'#acb49f');
 poly([[172,143],[354,242],[354,545],[172,445]],'#d2c8ac');
 poly([[354,242],[1018,197],[1018,463],[354,545]],'#e6dbc0');
 // Floor in a workshop cutaway.
 poly([[354,407],[879,358],[1018,463],[354,545],[224,468]],'#a5afa2');
 for(let j=0;j<5;j++)line(264+j*130,487-j*13,419+j*130,534-j*16,'#8c9e95',1);
 for(let j=0;j<4;j++)line(295,435+j*27,950,386+j*25,'#bdc4b2',1);
 poly([[354,242],[1018,197],[1018,245],[354,290]],'#d8ceb4');
 // Windows, long warm afternoon light.
 for(let i=0;i<3;i++){const x=426+i*160,y=267-i*11;rect(x-6,y-6,127,74,'#8d9d93');rect(x,y,115,62,'#b9d2ca');line(x+57,y,x+57,y+62,'#e8e4cc',5);line(x,y+31,x+115,y+31,'#e8e4cc',4);}
 poly([[465,329],[555,323],[751,458],[598,481]],'#bec3a5');
 // Roof fascia and hand-painted sign.
 poly([[162,132],[847,91],[851,124],[167,165]],'#354d49');
 poly([[847,91],[1029,184],[1029,213],[851,124]],'#293f3b');
 c.save();c.translate(255,121);c.rotate(-.06);rect(0,-26,390,58,'#263c38');text('LE PETIT ATELIER',22,13,29,'#ece3c7');rect(20,23,330,3,'#d5e78d');c.restore();
 // Side wall poster, electric service box.
 poly([[196,230],[281,275],[281,365],[196,319]],'#efe5cc');text('AUTO',208,283,15,'#49655a');rect(308,335,22,54,'#718d82');line(319,335,319,289,'#526a60',3);
 // Pegboard with tools.
 rect(812,290,143,70,'#a58d69');for(let i=0;i<9;i++)for(let j=0;j<4;j++)circle(821+i*15,299+j*15,1,'#746e56');
 for(let i=0;i<5;i++){line(832+i*23,307,828+i*23,346,'#d6dacc',5);circle(832+i*23,308,5,'#596d63');}
 // Workbench and cabinet.
 poly([[774,375],[958,359],[983,374],[800,392]],'#dec49b');rect(800,392,174,59,'#536f66');for(let i=0;i<3;i++){rect(811+i*52,400,44,42,'#678479');rect(823+i*52,406,20,3,'#c7ccb6');}rect(813,451,8,17,'#405e54');rect(961,445,8,17,'#405e54');
 rect(879,340,30,28,'#d8bd6b');rect(885,330,17,14,'#e0d5ac');rect(925,345,16,22,'#a66b51');
 // Tire stack and red tool cart.
 for(let i=0;i<3;i++){c.fillStyle='#344541';c.beginPath();c.ellipse(394,452-i*18,30,12,0,0,Math.PI*2);c.fill();rect(364,440-i*18,60,12,'#344541');c.strokeStyle='#61716a';c.beginPath();c.ellipse(394,440-i*18,28,9,0,0,Math.PI*2);c.stroke();}
 rect(442,379,70,71,'#b96d52');rect(437,374,80,9,'#d08b66');for(let i=0;i<3;i++){rect(450,389+i*17,54,12,'#a55b45');rect(470,393+i*17,18,3,'#e0c1a1');}circle(454,455,7,'#354842');circle(500,455,7,'#354842');
 // Lift, unlocked state.
 const lifted=s.upgrades.includes('lift');if(lifted){rect(550,297,18,206,'#466c74');rect(757,280,18,199,'#466c74');rect(545,294,28,9,'#8ab0ad');rect(752,277,28,9,'#8ab0ad');line(559,481,650,495,'#526d72',9);line(766,467,692,491,'#526d72',9);}
 else {poly([[519,471],[738,446],[833,489],[609,520]],'#94a89c');line(534,476,745,451,'#d2d3ae',3);line(609,512,816,488,'#d2d3ae',3);}
 if(active)this.car(c,638,417,active.color,active.stage==='repair'||active.stage==='check',t,lifted);else if(s.project)this.car(c,642,426,s.project.color,false,t,false);else{
 c.save();c.strokeStyle='#c8cfb5';c.lineWidth=3;c.setLineDash([12,10]);c.beginPath();c.ellipse(648,470,115,37,-.08,0,Math.PI*2);c.stroke();c.restore();text('VOTRE PROCHAIN PROJET',548,468,12,'#4a6b61');}
 // Plants, bench upgrade, street detail.
 rect(986,446,33,34,'#b87f5b');circle(1001,435,23,'#78956b');circle(985,430,16,'#91a97d');circle(1013,420,17,'#98ae7d');
 if(s.upgrades.includes('bench')){rect(232,442,79,12,'#bb9769');rect(239,454,8,41,'#526b60');rect(296,454,8,41,'#526b60');rect(258,424,25,18,'#839c90');}
 if(s.upgrades.includes('sign')){rect(198,340,64,63,'#d9e992');text('★',214,370,25,'#3c6352');text('FIABLE',207,389,11,'#3c6352');}
 // Foreground curb and a bicycle.
 line(17,552,180,542,'#e6dfc9',5);circle(1042,508,22,'#536d64');circle(1112,503,22,'#536d64');line(1042,508,1074,475,'#bd795c',4);line(1074,475,1091,507,'#bd795c',4);line(1042,508,1091,507,'#bd795c',4);line(1091,507,1101,469,'#bd795c',4);line(1101,469,1112,503,'#bd795c',4);line(1095,468,1112,467,'#536d64',4);
 // Floating dust, subtle motion.
 if(!this.reduce)for(let i=0;i<8;i++){const x=400+(i*91)%560+Math.sin(t/5000+i)*6,y=240+(i*39+t/180)%230;circle(x,y,1.5,'#e9e6cb');}
 // Footer on the illustration.
 text('48° N  /  RUE DES TILLEULS',29,621,13,'#536b62');text(lifted?'ATELIER ÉQUIPÉ':'DEPUIS CE MATIN',960,621,12,'#536b62');
 }
 car(c,x,y,color,hood,t,lift){c.save();c.translate(x,y-(lift?17:0));c.scale(1.12,1.12);
 const poly=(p,col)=>{c.fillStyle=col;c.beginPath();p.forEach(([a,b],i)=>i?c.lineTo(a,b):c.moveTo(a,b));c.closePath();c.fill();};
 c.fillStyle='#536c5c55';c.beginPath();c.ellipse(9,66+(lift?14:0),111,24,-.05,0,Math.PI*2);c.fill();
 for(const [a,b] of [[-70,40],[64,26]]){c.fillStyle='#293d39';c.beginPath();c.ellipse(a,b,16,26,-.15,0,Math.PI*2);c.fill();c.fillStyle='#a5ada1';c.beginPath();c.ellipse(a-3,b,8,15,-.15,0,Math.PI*2);c.fill();}
 poly([[-112,-4],[-65,-53],[27,-66],[106,-20],[110,30],[-65,58],[-112,32]],color);
 poly([[-65,-53],[-42,-95],[26,-104],[69,-64],[106,-20],[17,-10]],color);
 poly([[-42,-91],[23,-99],[55,-67],[-62,-54]],'#547d7a');poly([[-67,-47],[12,-57],[12,-17],[-94,-2]],'#345d5c');poly([[20,-58],[58,-61],[90,-25],[20,-18]],'#456b68');
 poly([[-110,2],[-65,22],[109,-3],[110,30],[-65,58],[-112,32]],'#253e3920');
 poly([[-110,5],[-67,25],[-67,55],[-112,30]],'#e7d7b5');poly([[-105,9],[-76,22],[-76,32],[-105,20]],'#fbefcb');poly([[-108,25],[-74,39],[-74,45],[-108,32]],'#465e56');
 c.fillStyle='#293e37';c.fillRect(-59,35,28,6);c.fillStyle='#dbd9bd';c.fillRect(-12,19,18,4);
 if(hood){poly([[-105,-5],[-64,-46],[9,-56],[-10,-13]],'#344b40');poly([[-97,-13],[-65,-40],[-12,-47],[-28,-19]],'#798575');poly([[-65,-51],[-52,-102],[20,-113],[9,-58]],color);c.fillStyle='#d6c382';c.fillRect(-68,-28,18,15);}
 c.restore();}
}
