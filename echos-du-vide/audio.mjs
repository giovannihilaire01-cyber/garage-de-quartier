export class Soundscape{
 constructor(){this.enabled=false;this.ctx=null;this.drone=null;}
 set(value){this.enabled=value;if(!value){this.drone?.stop();this.drone=null;return;}try{this.ctx??=new(window.AudioContext||window.webkitAudioContext)();this.ctx.resume();if(!this.drone){const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type='sine';o.frequency.value=52;g.gain.value=.012;o.connect(g);g.connect(this.ctx.destination);o.start();this.drone=o;}}catch{}}
 note(success=false){if(!this.enabled||!this.ctx)return;const c=this.ctx,o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.setValueAtTime(success?540:280,c.currentTime);o.frequency.exponentialRampToValueAtTime(success?880:400,c.currentTime+.15);g.gain.setValueAtTime(.045,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+.45);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+.46);}
 pause(){this.ctx?.suspend();}
 resume(){if(this.enabled)this.ctx?.resume();}
}
