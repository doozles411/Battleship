(()=>{const e=document.querySelector(".welcome-input"),t=document.querySelector(".welcome-btn"),o=document.querySelector(".player-name"),n=document.querySelector(".computer-name"),c=document.querySelector(".welcome"),r=document.querySelector(".gameplay-text"),l=document.querySelector(".top-text");t.addEventListener("click",(t=>{t.preventDefault(),o.textContent=e.value,o.classList.remove("invisible"),n.classList.remove("invisible"),c.classList.add("hide"),o.value="",r.classList.remove("hide"),l.textContent="Make your move . . ."}));const u=document.querySelectorAll(".right-board > button"),a=document.querySelector(".bottom-text"),s=document.createElement("span");u.forEach((e=>{e.addEventListener("click",(()=>{l.textContent="The enemy fires a shot into your waters . . .",a.textContent="and it's a hit!",a.appendChild(s),s.textContent=" They've sunk your battleship."}))}))})();