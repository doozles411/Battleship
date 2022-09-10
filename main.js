(()=>{var t={266:t=>{t.exports=class{constructor(){this.availableShots=[],this.init()}init(){for(let t=0;t<100;t++)this.availableShots.push({isShot:null,isShip:!1})}determinePlay(t={isShot:null,isShip:!1,isSunk:!1,allSunk:!1}){const e=t.isShot;this.availableShots[e].isShot=e;let i=this.availableShots.indexOf(this.availableShots[Math.floor(Math.random()*this.availableShots.length)]);if(t.allSunk)return 100;if(!t.isShip||t.isSunk){if(null===this.availableShots[i].isShot)return i;this.determinePlay({isShot:e,isShip:!1,isSunk:!1,allSunk:!1})}if(t.isShip)if(this.availableShots[e].isShip=!0,e>=10&&e<=89){const t=[e-1,e+1,e+10,e-10],i=t[Math.floor(Math.random()*t.length)];if(null===this.availableShots[i].isShot)return i;this.determinePlay({isShot:e,isShip:!0,isSunk:!1,allSunk:!1})}else if(e<10&&e>0){const t=[e-1,e+1,e+10],i=t[Math.floor(Math.random()*t.length)];if(null===this.availableShots[i].isShot)return i;this.determinePlay({isShot:e,isShip:!0,isSunk:!1,allSunk:!1})}else if(e>89&&e<99){const t=[e-1,e+1,e-10],i=t[Math.floor(Math.random()*t.length)];if(null===this.availableShots[i].isShot)return i;this.determinePlay({isShot:e,isShip:!0,isSunk:!1,allSunk:!1})}else if(0===e){const t=[1,10],i=t[Math.floor(Math.random()*t.length)];if(null===this.availableShots[i].isShot)return i;this.determinePlay({isShot:e,isShip:!0,isSunk:!1,allSunk:!1})}return 101}}},370:(t,e,i)=>{const s=i(571);t.exports=class{constructor(t){this.name=t,this.gameboard=new s}takeHit(t){const e=this.gameboard.receiveAttack(t);return e.isShip&&e.isSunk&&this.gameboard.allSunk()?(e.allSunk=!0,e):e}}},571:(t,e,i)=>{const s=i(422);t.exports=class{constructor(){this.board=[],this.sunk=0,this.carrier=new s("carrier",5),this.battleship=new s("battleship",4),this.cruiser=new s("cruiser",3),this.submarine=new s("submarine",3),this.destroyer=new s("destroyer",2),this.init()}init(){for(let t=0;t<100;t++)this.board.push({shipId:null,isShot:!1});this.placeShips(this.carrier),this.placeShips(this.battleship),this.placeShips(this.cruiser),this.placeShips(this.submarine),this.placeShips(this.destroyer)}placeShips(t){if(t===this.carrier){const t=[11,12,13,21,22,23,31,32,33],e=t[Math.floor(Math.random()*t.length)],i=[e,e+1,e+2,e+3,e+4];return i.forEach((t=>this.board[t].shipId="carrier")),i}if(t===this.battleship){const t=[8,18,28,38,48,58,68],e=t[Math.floor(Math.random()*t.length)],i=[e,e+10,e+20,e+30];return i.forEach((t=>this.board[t].shipId="battleship")),i}if(t===this.cruiser){const t=[41,42,43,44,45,51,52,53,54,55,61,62,63,64,65],e=t[Math.floor(Math.random()*t.length)],i=[e,e+1,e+2];return i.forEach((t=>this.board[t].shipId="cruiser")),i}if(t===this.submarine){const t=[0,10,20,30,40,50,60,70],e=t[Math.floor(Math.random()*t.length)],i=[e,e+10,e+20];return i.forEach((t=>this.board[t].shipId="submarine")),i}if(t===this.destroyer){const t=[71,72,73,74,75,76,81,82,83,84,85,86,91,92,93,94,95,96],e=t[Math.floor(Math.random()*t.length)],i=[e,e+1];return i.forEach((t=>this.board[t].shipId="destroyer")),i}}receiveAttack(t){this.board[t].isShot=!0;let e={isShot:null,isShip:!1,isSunk:!1,allSunk:!1};return e.isShot=t,null===this.board[t].shipId?e:"carrier"===this.board[t].shipId?(this.carrier.isHit(t),e.isShip=!0,this.carrier.isSunk()?(this.sunk+=5,e.isSunk=!0,e):e):"battleship"===this.board[t].shipId?(this.battleship.isHit(t),e.isShip=!0,this.battleship.isSunk()?(this.sunk+=4,e.isSunk=!0,e):e):"cruiser"===this.board[t].shipId?(this.cruiser.isHit(t),e.isShip=!0,this.cruiser.isSunk()?(this.sunk+=3,e.isSunk=!0,e):e):"submarine"===this.board[t].shipId?(this.submarine.isHit(t),e.isShip=!0,this.submarine.isSunk()?(this.sunk+=3,e.isSunk=!0,e):e):"destroyer"===this.board[t].shipId?(this.destroyer.isHit(t),e.isShip=!0,this.destroyer.isSunk()?(this.sunk+=2,e.isSunk=!0,e):e):void 0}allSunk(){return 17===this.sunk}}},422:t=>{t.exports=class{constructor(t,e){this.name=t,this.length=e,this.hits=[]}isHit(t){this.hits.push(t)}isSunk(){return this.hits.length===this.length}}},964:(t,e,i)=>{const s=i(370),r=i(266),n=(()=>{let t,e,i,n,o=!0,a=[],h=[],u=[{carrier:5},{battle:4},{cruiser:3},{sub:3},{destroy:2}],l=!1;const c=document.querySelectorAll(".right-board > button"),d=document.querySelectorAll(".left-board > button"),m=document.querySelector(".top-text"),S=document.querySelector(".bottom-text"),p=document.createElement("span"),b=document.querySelector(".replay-btn"),f="You fire a shot into enemy waters . . .",k="and it's a miss.",w="and it's a hit!";function y(t){const e=t.target;if(e.classList.contains("computer-ship")){const t=x([...e.parentElement.children].indexOf(e));g(t)?(E(1),T()?(window.setTimeout((()=>{m.textContent="Congratulations, name.",m.classList.add("top-end")}),"1000"),window.setTimeout((()=>{S.textContent="You're the winner!",S.classList.add("bottom-end")}),"1500"),window.setTimeout((()=>{b.classList.remove("hide"),b.addEventListener("click",I)}),"2000")):(m.textContent=f,window.setTimeout((()=>{e.setAttribute("id","sunk")}),"100"),window.setTimeout((()=>{S.textContent=w,S.appendChild(p),p.style.visibility="hidden",p.textContent=` You've sunk their ${t}.`}),"1000"),window.setTimeout((()=>{M(t),p.style.visibility="visible",v()}),"1500"))):(m.textContent=f,window.setTimeout((()=>{e.setAttribute("id","player-ship")}),"100"),window.setTimeout((()=>{S.textContent=w,v()}),"1000"))}else m.textContent=f,window.setTimeout((()=>{e.setAttribute("id","hit")}),"100"),window.setTimeout((()=>{S.textContent=k,v()}),"1000")}function v(){if(c.forEach((t=>{t.removeEventListener("click",y)})),o){o=!1;const e=Math.floor(100*Math.random()),s=t.takeHit(e);n=i.determinePlay(s),console.log(n),window.setTimeout((()=>{m.textContent="The enemy is taking aim . . .",S.textContent=""}),"2000"),window.setTimeout((()=>{m.textContent="The enemy fires a shot into your waters . . ."}),"4000"),s.isShip?(window.setTimeout((()=>{d[e].setAttribute("id","player-hit")}),"5000"),window.setTimeout((()=>{S.textContent=w,c.forEach((t=>{t.hasAttribute("id")||t.addEventListener("click",y)}))}),"5500")):(window.setTimeout((()=>{d[e].setAttribute("id","hit")}),"5000"),window.setTimeout((()=>{S.textContent=k,c.forEach((t=>{t.hasAttribute("id")||t.addEventListener("click",y)}))}),"5500"))}}function x(t){h.forEach((e=>{if(e.shipIndex===t){const t=e.shipName;if("carrier"===t)return u[0].carrier=u[0].carrier-1,t;if("battleship"===t)return u[1].battle=u[1].battle-1,t;if("cruiser"===t)return u[2].cruiser=u[2].cruiser-1,t;if("submarine"===t)return u[3].sub=u[3].sub-1,t;if("destroyer"===t)return u[4].destroy=u[4].destroy-1,t}}))}function g(t){return"carrier"===t&&0===u[0].carrier||"battleship"===t&&0===u[1].battle||"cruiser"===t&&0===u[2].cruiser||"submarine"===t&&0===u[3].sub||"destroyer"===t&&0===u[4].destroyer}function E(t){let e=0;e+=t,e<5||5===e&&(l=!0)}function M(t){h.forEach((e=>{if(e.shipName===t){const t=e.shipIndex;c[t].setAttribute("id","sunk")}}))}function T(){return l}function I(){window.location.reload(!0)}return{beginGame:function(n,o){i=new r,t=new s(n),e=new s(o),t.gameboard.board.forEach((e=>{null!==e.shipId&&a.push(t.gameboard.board.indexOf(e))})),e.gameboard.board.forEach((t=>{if(null!==t.shipId){const i={shipName:t.shipId,shipIndex:e.gameboard.board.indexOf(t)};h.push(i)}})),a.forEach((t=>{d[t].setAttribute("id","player-ship")})),h.forEach((t=>{c[t.shipIndex].classList.add("computer-ship")})),c.forEach((t=>{t.hasAttribute("id")||t.addEventListener("click",y)}))},userTurn:y,computerTurn:v,recordHit:x,checkIfSunk:g,recordSink:E,markSunkShip:M,checkAllSunk:T,resetGame:I}})();t.exports=n}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,i),n.exports}(()=>{const t=i(964),e=document.querySelector(".welcome-input"),s=document.querySelector(".welcome-name"),r=document.querySelector(".player-name"),n=document.querySelector(".computer-name"),o=document.querySelector(".welcome"),a=document.querySelector(".gameplay-text");s.addEventListener("submit",(i=>{i.preventDefault();const s=e.value;r.textContent=s,r.classList.remove("invisible"),n.classList.remove("invisible"),o.classList.add("hide"),r.value="",window.setTimeout((()=>{a.classList.remove("hide"),t.beginGame(s,"computer")}),"1000")}))})()})();