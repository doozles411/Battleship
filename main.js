(()=>{const e=document.querySelector(".welcome-input"),t=document.querySelector(".welcome-name"),o=document.querySelector(".player-name"),c=document.querySelector(".computer-name"),r=document.querySelector(".welcome"),n=document.querySelector(".gameplay-text"),u=document.querySelector(".top-text");t.addEventListener("submit",(t=>{t.preventDefault(),o.textContent=e.value,o.classList.remove("invisible"),c.classList.remove("invisible"),r.classList.add("hide"),o.value="",window.setTimeout((()=>{n.classList.remove("hide"),u.textContent="Make your move . . ."}),"1000")}));const l=document.querySelectorAll(".right-board > button");document.querySelector(".bottom-text"),document.createElement("span"),document.querySelector(".replay-btn"),l.forEach((e=>{e.addEventListener("click",(()=>{}))}))})();