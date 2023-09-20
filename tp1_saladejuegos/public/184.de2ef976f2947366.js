"use strict";(self.webpackChunktp1_saladejuegos=self.webpackChunktp1_saladejuegos||[]).push([[184],{9184:(q,m,d)=>{d.r(m),d.d(m,{HomeModule:()=>P});var c=d(6814),p=d(3914),C=d(5861),e=d(5879),b=d(6999),x=d(2333);let f=(()=>{var t;class o{constructor(a,r,i,s){this.router=a,this.firebaseSvc=r,this.utilsSvc=i,this.navigate=s}ngOnInit(){this.router.queryParams.subscribe(a=>{this.nameTitle=a.name})}logout(){var a=this;return(0,C.Z)(function*(){yield a.firebaseSvc.logout(),a.utilsSvc.routerLink("login")})()}getGameCards(){this.navigate.navigate(["game-cards"])}}return(t=o).\u0275fac=function(a){return new(a||t)(e.Y36(p.gz),e.Y36(b.O),e.Y36(x.F),e.Y36(p.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],inputs:{title:"title"},decls:27,vars:1,consts:[[1,"container-form"],["src","../../../assets/consola.png","alt","",1,"icon"],[1,"title"],[1,"form"],[1,"name","user-name"],[1,"container-games"],[1,"div1"],[1,"my-button"],["src","../../../assets/Buttons/horca.png","alt","",1,"image-icon"],[1,"div2"],["src","../../../assets/Buttons/deck-of-card.png","alt","",1,"image-icon"],[1,"div3"],["src","../../../assets/Buttons/pikachu.png","alt","",1,"image-icon"],[1,"div4"],["routerLink","game",1,"my-button"],["src","../../../assets/Buttons/carta-de-tarot.png","alt","",1,"image-icon"],[1,"my-button",3,"click"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"h1",2),e._uU(3,"Bienvenido"),e.qZA(),e.TgZ(4,"div",3)(5,"h2",4),e._uU(6),e.qZA()(),e.TgZ(7,"div",5)(8,"div",6)(9,"a",7),e._UZ(10,"img",8),e._uU(11,"Ahorcado"),e.qZA()(),e.TgZ(12,"div",9)(13,"a",7),e._UZ(14,"img",10),e._uU(15,"Mayor o menor"),e.qZA()(),e.TgZ(16,"div",11)(17,"a",7),e._UZ(18,"img",12),e._uU(19,"Preguntados"),e.qZA()(),e.TgZ(20,"div",13)(21,"a",14),e._UZ(22,"img",15),e._uU(23,"Extra game"),e.qZA()()(),e.TgZ(24,"a",16),e.NdJ("click",function(){return r.logout()}),e._uU(25,"Salir"),e.qZA()(),e._UZ(26,"router-outlet")),2&a&&(e.xp6(6),e.Oqu(r.nameTitle))},dependencies:[p.lC,p.rH],styles:[".image-icon[_ngcontent-%COMP%]{height:50px;padding-right:10px}.user-name[_ngcontent-%COMP%]{font-size:2.5em;font-weight:900;text-shadow:4px -3px 5px rgba(0,0,0,.6)}.container-games[_ngcontent-%COMP%]{margin-top:40px;display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,1fr);grid-column-gap:0px;grid-row-gap:25px}.div1[_ngcontent-%COMP%]{grid-area:1/1/2/4}.div2[_ngcontent-%COMP%]{grid-area:1/3/2/6}.div3[_ngcontent-%COMP%]{grid-area:2/1/4/4}.div4[_ngcontent-%COMP%]{grid-area:2/3/4/6}"]}),o})();const y=[{id:1,name:"Esqueleto",damage:10,detail:"Atacar\xe1 al enemigo hasta la muerte xD",img:"./assets/Cards/craneo.png",type:"Ataque"},{id:2,name:"Adivina",damage:20,detail:"Adivina el futuro por eso sabe que vas a perder",img:"./assets/Cards/adivino.png",type:"Ataque"},{id:3,name:"Agua Sagrada",damage:35,detail:"Estas perdiendo? Restaura unos puntitos de vida",img:"./assets/Cards/pocion.png",type:"Cura"},{id:4,name:"Esoterico",damage:25,detail:"No s\xe9 que es, pero te causa da\xf1o",img:"./assets/Cards/esoterico.png",type:"Ataque"},{id:5,name:"Espejo",damage:0,detail:"Espejo rebotin, rebotar\xe1 el da\xf1o recibido",img:"./assets/Cards/espejo.png",type:"Devoluci\xf3n"},{id:6,name:"Vudu",damage:30,detail:"-Causa mucho da\xf1o -Que bien! -Pero te descuenta 12 puntos -Que mal",img:"./assets/Cards/muneco-de-vudu.png",type:"Ataque"},{id:7,name:"Sol",damage:15,detail:"Sino usas protector solar, el sol puede ser un rival digno",img:"./assets/Cards/sol.png",type:"Ataque"},{id:8,name:"Mago",damage:20,detail:"Cl\xe1sico mago, no es Gandalf el blanco :(",img:"./assets/Cards/mago.png",type:"Ataque"},{id:9,name:"Veneno",damage:5,detail:"Si hay m\xe1gia hay veneno",img:"./assets/Cards/mortero.png",type:"Ataque"},{id:10,name:"Runas",damage:15,detail:"Runas elficas, hacen da\xf1o",img:"./assets/Cards/runas.png",type:"Ataque"},{id:11,name:"Hechizo",damage:20,detail:"No sos mago, tranqui, leete un hechizo",img:"./assets/Cards/libro-de-hechizos.png",type:"Ataque"},{id:12,name:"Fantasma",damage:10,detail:"Fantasma de la fuerza? No pero se acerca",img:"./assets/Cards/espiritu.png",type:"Ataque"},{id:13,name:"Caballero",damage:25,detail:"El honor ante todo, brinda su espada al servicio de su se\xf1or",img:"./assets/Cards/caballero.png",type:"Ataque"},{id:14,name:"Escudo",damage:10,detail:"Levanta tu escudo guerrero, deb\xe9s resistir",img:"./assets/Cards/escudo.png",type:"Defensa"},{id:15,name:"Vampiro",damage:15,detail:"Alimentate de tu enemigo, recupera unos puntos de vida",img:"./assets/Cards/dientes.png",type:"Roba vida"},{id:16,name:"Templario",damage:25,detail:"La iglesia esta de tu lado, que verg\xfcenza, pero a vos no te importa tenes tu caballero templario",img:"./assets/Cards/templario.png",type:"Ataque"},{id:17,name:"Escudo Acero",damage:20,detail:"Felicidades aprendiste a realizar aleaciones, aumenta tu resistencia",img:"./assets/Cards/escudo acero.png",type:"Defensa"},{id:18,name:"Escudo Templario",damage:25,detail:"Felicidades tenes el apoyo de la iglesia, aunque signifique mas muertes",img:"./assets/Cards/escudo fraternal.png",type:"Defensa"},{id:19,name:"Murci\xe9lagos",damage:15,detail:"No, no es Zubat, ese esta en \xe9l preguntados, pero este tambi\xe9n absorve vida del enemigo",img:"./assets/Cards/murcielagos.png",type:"Roba vida"}];class u{constructor(o,n,a){this.hp=o,this.cards=n,this.status=a}}let v=(()=>{var t;class o{ngOnInit(){}onClick(a){}}return(t=o).\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-card"]],inputs:{index:"index",type:"type",img:"img",name:"name",detail:"detail",damage:"damage",animation:"animation"},decls:13,vars:5,consts:[[1,"card"],[1,"ribbon"],[3,"src"],[1,"card-name"],[1,"detail"],[1,"btn-circle"],[1,"damage"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span"),e._uU(3),e.qZA()(),e._UZ(4,"img",2)(5,"hr"),e.TgZ(6,"p",3),e._uU(7),e.qZA(),e.TgZ(8,"p",4),e._uU(9),e.qZA(),e.TgZ(10,"span",5)(11,"p",6),e._uU(12),e.qZA()()()),2&a&&(e.xp6(3),e.Oqu(r.type),e.xp6(1),e.s9C("src",r.img,e.LSH),e.xp6(3),e.Oqu(r.name),e.xp6(2),e.Oqu(r.detail),e.xp6(3),e.Oqu(r.damage))},styles:['.card[_ngcontent-%COMP%]{width:140px;height:220px;border:2px solid #333;border-radius:10px;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer!important;background-color:#36081f;color:#ccc;transition:all .5s ease;box-shadow:10px 10px 5px #000000bf;border:4px solid #fff;position:relative}img[_ngcontent-%COMP%]{height:70px;position:absolute;top:10px;filter:drop-shadow(0 2px 5px rgba(0,0,0,.7))}.card-name[_ngcontent-%COMP%]{margin-top:0;font-size:12px}.detail[_ngcontent-%COMP%]{text-align:center;font-size:8px}.btn-circle[_ngcontent-%COMP%]{width:30px;height:30px;padding:0;border-radius:50%;border:2px solid rgba(123,123,90,.797);text-align:center;font-size:12px;line-height:1.42857;position:absolute;bottom:-6px;right:-5px;background-color:#b32b30}.damage[_ngcontent-%COMP%]{padding-top:5px}.ribbon[_ngcontent-%COMP%]{position:absolute;right:-5px;top:-5px;z-index:1;overflow:hidden;width:75px;height:75px;text-align:right}.ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:10px;font-weight:700;color:#fff;text-transform:uppercase;text-align:center;line-height:12px;transform:rotate(45deg);-webkit-transform:rotate(45deg);width:100px;display:block;background:#79A70A;background:linear-gradient(#36813E 0%,#4CB557 100%);box-shadow:0 3px 10px -5px #000;position:absolute;top:19px;right:-21px}.ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:100%;z-index:-1;border-left:3px solid #4CB557;border-right:3px solid transparent;border-bottom:3px solid transparent;border-top:3px solid #4CB557}.ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";position:absolute;right:0;top:100%;z-index:-1;border-left:3px solid transparent;border-right:3px solid #4CB557;border-bottom:3px solid transparent;border-top:3px solid #4CB557}hr[_ngcontent-%COMP%]{position:relative;margin-top:60px;height:2px;width:60%;background-color:#000;border:none}.element[_ngcontent-%COMP%]{background:conic-gradient(from 180deg at 50% 50%,rgb(0,0,0) 0deg,rgba(255,255,255,.7) 17deg,rgb(0,0,0) 88deg,rgba(255,255,255,.7) 152deg,rgb(0,0,0) 225deg,rgba(255,255,255,.7) 289deg,rgb(0,0,0) 360deg),conic-gradient(from 180deg at 50% 50%,rgb(0,0,0) 0deg,rgb(255,255,255) 30deg,rgb(0,0,0) 96deg,rgb(255,255,255) 169deg,rgb(0,0,0) 229deg,rgb(255,255,255) 285deg,rgb(0,0,0) 360deg),radial-gradient(88% 127% at 13% 13%,rgb(248,110,251) 8%,rgb(115,66,255) 35%,rgb(66,232,255) 63%,rgb(66,255,107) 100%);background-blend-mode:screen,difference,normal}']}),o})();function _(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"app-card",17),e.NdJ("click",function(){const i=e.CHM(n).index,s=e.oxw();return e.KtG(s.onClick(i))}),e._uU(1," > "),e.qZA()}if(2&t){const n=o.$implicit,a=o.index,r=e.oxw();e.Tol(a===r.selectedCardIndex?"move-center move-center-player":""),e.Q6J("type",n.type)("img",n.img)("name",n.name)("detail",n.detail)("damage",n.damage)}}function O(t,o){if(1&t&&e._UZ(0,"app-card",18),2&t){const n=o.$implicit;e.Q6J("type",n.type)("img",n.img)("name",n.name)("detail",n.detail)("damage",n.damage)}}const h=function(t){return{"width.%":t}},M=[{path:"",component:f},{path:"game",component:(()=>{var t;class o{constructor(){this.listCards=y,this.result="Esperando selecci\xf3n...",this.playerHP=100,this.cpuHP=100,this.playerOne=new u(100,this.dealCards(5),""),this.playerCpu=new u(100,this.dealCards(5),"")}ngOnInit(){}dealCards(a){const r=[];let i=1;for(let s=0;s<a;s++){const g=Math.floor(Math.random()*this.listCards.length),l={...this.listCards.splice(g,1)[0],id:i++};r.push(l)}return r}onClick(a){const r=Math.floor(Math.random()*this.playerCpu.cards.length),i=this.playerOne.cards[a],s=this.playerCpu.cards[r];let g=i.damage,l=s.damage;this.playerCpu.hp-=i.damage,this.playerOne.hp-=s.damage,this.selectedCardIndex=this.playerOne.cards[a].id,this.result=g>l?"\xa1Has ganado la ronda!":l>g?"La m\xe1quina ha ganado la ronda.":"La ronda termin\xf3 en empate.",setTimeout(()=>{this.playerOne.cards.splice(a,1),this.playerCpu.cards.splice(r,1),this.updateCardIds(),(0===this.playerOne.cards.length||0===this.playerCpu.cards.length||this.playerOne.hp<=0||this.playerCpu.hp<=0)&&this.endGame()},1500)}endGame(){this.result=this.playerOne.hp>this.playerCpu.hp?"\xa1Has ganado el juego!":this.playerOne.hp==this.playerCpu.hp?"La ronda termin\xf3 en empate.":"La m\xe1quina ha ganado el juego."}updateCardIds(){for(let a=0;a<this.playerOne.cards.length;a++)this.playerOne.cards[a].id=a+1;for(let a=0;a<this.playerCpu.cards.length;a++)this.playerCpu.cards[a].id=a+1}}return(t=o).\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-game-cards"]],inputs:{title:"title"},decls:24,vars:11,consts:[[1,"container-game"],[1,"container-title"],["id","result-text",1,"retult-text"],[1,"container-players"],["id","player",1,"container-player"],[1,"player-name"],[1,"progress"],["id","hp-bar",1,"progress-bar",3,"ngStyle"],["id","hp-number",1,"progress-bar-text"],["id","player-cards",1,"card-container"],[3,"type","img","name","detail","damage","class","click",4,"ngFor","ngForOf"],["id","computer",1,"container-cpu"],[1,"cpu-name"],["id","hp-bar-cpu",1,"progress-bar","cpu-bar",3,"ngStyle"],["id","hp-number-cpu",1,"progress-bar-text"],["id","computer-cards",1,"card-container"],[3,"type","img","name","detail","damage",4,"ngFor","ngForOf"],[3,"type","img","name","detail","damage","click"],[3,"type","img","name","detail","damage"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p",2),e._uU(3),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"h2",5),e._uU(7,"Jugador"),e.qZA(),e.TgZ(8,"div",6)(9,"div",7)(10,"span",8),e._uU(11),e.qZA()()(),e.TgZ(12,"div",9),e.YNc(13,_,2,7,"app-card",10),e.qZA()()(),e.TgZ(14,"div",11)(15,"h2",12),e._uU(16,"CPU"),e.qZA(),e.TgZ(17,"div",6)(18,"div",13)(19,"span",14),e._uU(20),e.qZA()()(),e.TgZ(21,"div",15)(22,"div",9),e.YNc(23,O,1,5,"app-card",16),e.qZA()()()()),2&a&&(e.xp6(3),e.Oqu(r.result),e.xp6(6),e.Q6J("ngStyle",e.VKq(7,h,r.playerOne.hp)),e.xp6(2),e.hij("",r.playerOne.hp,"HP"),e.xp6(2),e.Q6J("ngForOf",r.playerOne.cards),e.xp6(5),e.Q6J("ngStyle",e.VKq(9,h,r.playerCpu.hp)),e.xp6(2),e.hij("",r.playerCpu.hp,"HP"),e.xp6(3),e.Q6J("ngForOf",r.playerCpu.cards))},dependencies:[c.sg,c.PC,v],styles:['@charset "UTF-8";.container-title[_ngcontent-%COMP%]{background:rgba(255,255,255,.656);border-radius:16px;box-shadow:0 4px 30px #0000001a;backdrop-filter:blur(3.5px);-webkit-backdrop-filter:blur(3.5px);border:1px solid rgba(0,0,0,.01)}.title-game[_ngcontent-%COMP%]{color:#7c1ca4;text-shadow:4px 0px 4px rgba(185,168,168,.733)}.card-container[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap;gap:10px;position:relative}.player-name[_ngcontent-%COMP%]{color:#428bca}.cpu-name[_ngcontent-%COMP%]{color:#42ca59}#result-text[_ngcontent-%COMP%]{font-size:18px;margin:10px;color:#36081f;font-weight:700;text-shadow:4px 0px 4px rgba(0,0,0,.849)}#play-button[_ngcontent-%COMP%]{padding:10px 20px;font-size:16px;cursor:po inter}.progress[_ngcontent-%COMP%]{height:35px;border:1px solid #428bca;border-radius:5px;background-color:#e6f3fa;text-align:center;margin:20px auto;width:50%;box-shadow:10px 10px 5px #000000bf}.progress-bar[_ngcontent-%COMP%]{height:100%;background:#42ca59;display:flex;align-items:center;border-radius:5px;transition:width 1.5s ease-in-out}.cpu-bar[_ngcontent-%COMP%]{background-color:#b32b30}.progress-bar-text[_ngcontent-%COMP%]{margin-left:10px;font-weight:700;color:#cce7f5}.move-center[_ngcontent-%COMP%]{transform:translate(180px) rotate(35deg);top:40%;left:43%;transform-origin:center center;z-index:99}.move-center[_ngcontent-%COMP%]{position:fixed;transition:transform 3s ease-out,filter 3s ease-out}.move-center-player[_ngcontent-%COMP%]{transform:translate(180px) rotate(35deg);top:40%;left:43%;transform-origin:center center;z-index:99}']}),o})()}];let Z=(()=>{var t;class o{}return(t=o).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(M),p.Bz]}),o})(),P=(()=>{var t;class o{}return(t=o).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,Z]}),o})()}}]);