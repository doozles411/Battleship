(()=>{const e=document.querySelector(".welcome-input"),t=document.querySelector(".welcome-btn"),c=document.querySelector(".player-name"),l=document.querySelector(".computer-name"),o=document.querySelector(".welcome"),r=document.querySelector(".gameplay-text");t.addEventListener("click",(t=>{t.preventDefault(),c.textContent=e.value,c.classList.remove("invisible"),l.classList.remove("invisible"),o.classList.add("hide"),c.value="",r.classList.remove("hide")}))})();