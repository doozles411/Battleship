(()=>{var t={266:t=>{t.exports=class{constructor(){this.availableShots=[],this.init()}init(){for(let t=0;t<100;t++)this.availableShots.push({isShot:null,isShip:!1})}determinePlay(t={isShot:null,isShip:!1,isSunk:!1,allSunk:!1}){const e=t.isShot;console.log(`index: ${e}`),this.availableShots[e].isShot=e;let i=this.availableShots.indexOf(this.availableShots[Math.floor(Math.random()*this.availableShots.length)]);if(t.allSunk)return 100;if(!t.isShip||t.isSunk){if(null===this.availableShots[i].isShot)return i;this.determinePlay({isShot:e,isShip:!1,isSunk:!1,allSunk:!1})}if(t.isShip)if(this.availableShots[e].isShip=!0,e>=10&&e<=89){const t=[e-1,e+1,e+10,e-10],i=t[Math.floor(Math.random()*t.length)];if(null===this.availableShots[i].isShot)return i;this.determinePlay({isShot:e,isShip:!0,isSunk:!1,allSunk:!1})}else if(e<10&&e>0){const t=[e-1,e+1,e+10],i=t[Math.floor(Math.random()*t.length)];if(null===this.availableShots[i].isShot)return i;this.determinePlay({isShot:e,isShip:!0,isSunk:!1,allSunk:!1})}else if(e>89&&e<99){const t=[e-1,e+1,e-10],i=t[Math.floor(Math.random()*t.length)];if(null===this.availableShots[i].isShot)return i;this.determinePlay({isShot:e,isShip:!0,isSunk:!1,allSunk:!1})}else if(0===e){const t=[1,10],i=t[Math.floor(Math.random()*t.length)];if(null===this.availableShots[i].isShot)return i;this.determinePlay({isShot:e,isShip:!0,isSunk:!1,allSunk:!1})}return 101}}},370:(t,e,i)=>{const s=i(571);t.exports=class{constructor(t){this.name=t,this.gameboard=new s}takeHit(t){const e=this.gameboard.receiveAttack(t);return e.isShip&&e.isSunk&&this.gameboard.allSunk()?(e.allSunk=!0,e):e}}},571:(t,e,i)=>{const s=i(422);t.exports=class{constructor(){this.board=[],this.sunk=0,this.carrier=new s("carrier",5),this.battleship=new s("battleship",4),this.cruiser=new s("cruiser",3),this.submarine=new s("submarine",3),this.destroyer=new s("destroyer",2),this.init()}init(){for(let t=0;t<100;t++)this.board.push({shipId:null,isShot:!1});this.placeShips(this.carrier),this.placeShips(this.battleship),this.placeShips(this.cruiser),this.placeShips(this.submarine),this.placeShips(this.destroyer)}placeShips(t){if(t===this.carrier){const t=[11,12,13,21,22,23,31,32,33],e=t[Math.floor(Math.random()*t.length)],i=[e,e+1,e+2,e+3,e+4];return i.forEach((t=>this.board[t].shipId="carrier")),i}if(t===this.battleship){const t=[8,18,28,38,48,58,68],e=t[Math.floor(Math.random()*t.length)],i=[e,e+10,e+20,e+30];return i.forEach((t=>this.board[t].shipId="battleship")),i}if(t===this.cruiser){const t=[41,42,43,44,45,51,52,53,54,55,61,62,63,64,65],e=t[Math.floor(Math.random()*t.length)],i=[e,e+1,e+2];return i.forEach((t=>this.board[t].shipId="cruiser")),i}if(t===this.submarine){const t=[0,10,20,30,40,50,60,70],e=t[Math.floor(Math.random()*t.length)],i=[e,e+10,e+20];return i.forEach((t=>this.board[t].shipId="submarine")),i}if(t===this.destroyer){const t=[71,72,73,74,75,76,81,82,83,84,85,86,91,92,93,94,95,96],e=t[Math.floor(Math.random()*t.length)],i=[e,e+1];return i.forEach((t=>this.board[t].shipId="destroyer")),i}}receiveAttack(t){this.board[t].isShot=!0;let e={isShot:null,isShip:!1,isSunk:!1,allSunk:!1};return e.isShot=t,null===this.board[t].shipId?e:"carrier"===this.board[t].shipId?(this.carrier.isHit(t),e.isShip=!0,this.carrier.isSunk()?(this.sunk+=5,e.isSunk=!0,e):e):"battleship"===this.board[t].shipId?(this.battleship.isHit(t),e.isShip=!0,this.battleship.isSunk()?(this.sunk+=4,e.isSunk=!0,e):e):"cruiser"===this.board[t].shipId?(this.cruiser.isHit(t),e.isShip=!0,this.cruiser.isSunk()?(this.sunk+=3,e.isSunk=!0,e):e):"submarine"===this.board[t].shipId?(this.submarine.isHit(t),e.isShip=!0,this.submarine.isSunk()?(this.sunk+=3,e.isSunk=!0,e):e):"destroyer"===this.board[t].shipId?(this.destroyer.isHit(t),e.isShip=!0,this.destroyer.isSunk()?(this.sunk+=2,e.isSunk=!0,e):e):void 0}allSunk(){return 17===this.sunk}}},422:t=>{t.exports=class{constructor(t,e){this.name=t,this.length=e,this.hits=[]}isHit(t){this.hits.push(t)}isSunk(){return this.hits.length===this.length}}},964:(t,e,i)=>{const s=i(370),n=i(266),o=(()=>{let t,e,i,o,r=!0,a=[],h=[],l=[{carrier:5},{battle:4},{cruiser:3},{sub:3},{destroy:2}],u=!1;const d=document.querySelectorAll(".right-board > button"),c=document.querySelectorAll(".left-board > button"),m=document.querySelector(".top-text"),b=document.querySelector(".bottom-text"),p=document.createElement("span"),S=document.querySelector(".replay-btn"),w="You fire a shot into enemy waters . . .",f="The enemy fires a shot into your waters . . .",y="The enemy is taking aim . . .",k="and it's a miss.",v="and it's a hit!",x=" You've sunk their";function T(t){const e=t.target;if(e.classList.contains("computer-ship")){const t=g([...e.parentElement.children].indexOf(e));E(t)?(A(1),L()?(m.textContent=w,window.setTimeout((()=>{e.setAttribute("id","sunk")}),"100"),window.setTimeout((()=>{b.textContent=v,b.appendChild(p),p.style.visibility="hidden",p.textContent=`${x} ${t}.`}),"1000"),window.setTimeout((()=>{M(t),p.style.visibility="visible",C()}),"1500"),window.setTimeout((()=>{m.textContent="Congratulations, name.",m.classList.add("top-end")}),"2500"),window.setTimeout((()=>{b.textContent="You're the winner!",b.classList.add("bottom-end"),S.classList.remove("hide"),S.style.visibility="hidden"}),"3000"),window.setTimeout((()=>{S.style.visibility="visible",S.addEventListener("click",q)}),"3500")):(m.textContent=w,window.setTimeout((()=>{e.setAttribute("id","sunk")}),"100"),window.setTimeout((()=>{b.textContent=v,b.appendChild(p),p.style.visibility="hidden",p.textContent=`${x} ${t}.`}),"1000"),window.setTimeout((()=>{M(t),p.style.visibility="visible",C()}),"1500"))):(m.textContent=w,window.setTimeout((()=>{e.setAttribute("id","player-ship")}),"100"),window.setTimeout((()=>{b.textContent=v,C()}),"1000"))}else m.textContent=w,window.setTimeout((()=>{e.setAttribute("id","hit")}),"100"),window.setTimeout((()=>{b.textContent=k,C()}),"1000")}function C(){if(d.forEach((t=>{t.removeEventListener("click",T)})),r){r=!1;const e=Math.floor(100*Math.random()),s=t.takeHit(e);o=i.determinePlay(s),console.log(`next move 1: ${o}`),window.setTimeout((()=>{m.textContent=y,b.textContent=""}),"2000"),window.setTimeout((()=>{m.textContent=f}),"4000"),s.isShip?(window.setTimeout((()=>{c[e].setAttribute("id","player-hit")}),"5000"),window.setTimeout((()=>{b.textContent=v,d.forEach((t=>{t.hasAttribute("id")||t.addEventListener("click",T)}))}),"5500")):(window.setTimeout((()=>{c[e].setAttribute("id","hit")}),"5000"),window.setTimeout((()=>{b.textContent=k,d.forEach((t=>{t.hasAttribute("id")||t.addEventListener("click",T)}))}),"5500"))}let e;if(e=i.determinePlay(o),o=i.determinePlay(e),console.log(`next move: ${o}`),window.setTimeout((()=>{m.textContent=y,b.textContent=""}),"2000"),window.setTimeout((()=>{m.textContent=f}),"4000"),e.isShip)if(e.isSunk){const i=t.gameboard.board[firstMove].shipId;e.allSunk?(window.setTimeout((()=>{c[o].setAttribute("id","player-hit")}),"5000"),window.setTimeout((()=>{b.textContent=v,b.appendChild(p),p.style.visibility="hidden",p.textContent=`${x} ${i}.`}),"5500"),window.setTimeout((()=>{I(i),p.style.visibility="visible"}),"6000"),window.setTimeout((()=>{m.textContent="The enemy has won.",m.classList.add("top-end")}),"7000"),window.setTimeout((()=>{b.textContent="Better luck next time.",b.classList.add("bottom-end"),S.classList.remove("hide"),S.style.visibility="hidden"}),"7500"),window.setTimeout((()=>{S.style.visibility="visible",S.addEventListener("click",q)}),"8000")):(window.setTimeout((()=>{c[o].setAttribute("id","player-hit")}),"5000"),window.setTimeout((()=>{b.textContent=v,b.appendChild(p),p.style.visibility="hidden",p.textContent=`${x} ${i}.`}),"5500"),window.setTimeout((()=>{I(i),p.style.visibility="visible",d.forEach((t=>{t.hasAttribute("id")||t.addEventListener("click",T)}))}),"6000"))}else window.setTimeout((()=>{c[o].setAttribute("id","player-hit")}),"5000"),window.setTimeout((()=>{b.textContent=v,d.forEach((t=>{t.hasAttribute("id")||t.addEventListener("click",T)}))}),"5500");else window.setTimeout((()=>{c[o].setAttribute("id","hit")}),"5000"),window.setTimeout((()=>{b.textContent=k,d.forEach((t=>{t.hasAttribute("id")||t.addEventListener("click",T)}))}),"5500")}function g(t){h.forEach((e=>{if(e.shipIndex===t){const t=e.shipName;if("carrier"===t)return l[0].carrier=l[0].carrier-1,t;if("battleship"===t)return l[1].battle=l[1].battle-1,t;if("cruiser"===t)return l[2].cruiser=l[2].cruiser-1,t;if("submarine"===t)return l[3].sub=l[3].sub-1,t;if("destroyer"===t)return l[4].destroy=l[4].destroy-1,t}}))}function E(t){return"carrier"===t&&0===l[0].carrier||"battleship"===t&&0===l[1].battle||"cruiser"===t&&0===l[2].cruiser||"submarine"===t&&0===l[3].sub||"destroyer"===t&&0===l[4].destroyer}function A(t){let e=0;e+=t,e<5||5===e&&(u=!0)}function M(t){h.forEach((e=>{if(e.shipName===t){const t=e.shipIndex;d[t].setAttribute("id","sunk")}}))}function I(t){a.forEach((e=>{if(e.shipName===t){const t=e.shipIndex;c[t].setAttribute("id","sunk")}}))}function L(){return u}function q(){window.location.reload(!0)}return{beginGame:function(o,r){i=new n,t=new s(o),e=new s(r),t.gameboard.board.forEach((e=>{null!==e.shipId&&a.push(t.gameboard.board.indexOf(e))})),e.gameboard.board.forEach((t=>{if(null!==t.shipId){const i={shipName:t.shipId,shipIndex:e.gameboard.board.indexOf(t)};h.push(i)}})),a.forEach((t=>{c[t].setAttribute("id","player-ship")})),h.forEach((t=>{d[t.shipIndex].classList.add("computer-ship")})),d.forEach((t=>{t.hasAttribute("id")||t.addEventListener("click",T)}))},userTurn:T,computerTurn:C,recordHit:g,checkIfSunk:E,recordSink:A,markSunkShip:M,markPlayerSunk:I,checkAllSunk:L,resetGame:q}})();t.exports=o}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,i),o.exports}(()=>{const t=i(964),e=document.querySelector(".welcome-input"),s=document.querySelector(".welcome-name"),n=document.querySelector(".player-name"),o=document.querySelector(".computer-name"),r=document.querySelector(".welcome"),a=document.querySelector(".gameplay-text");s.addEventListener("submit",(i=>{i.preventDefault();const s=e.value;n.textContent=s,n.classList.remove("invisible"),o.classList.remove("invisible"),r.classList.add("hide"),n.value="",window.setTimeout((()=>{a.classList.remove("hide"),t.beginGame(s,"computer")}),"1000")}))})()})();