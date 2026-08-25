
function confetti(){
  const colors=["#ffd76b","#ffffff","#e8a83e","#7bbf8b","#f2a65a"];
  for(let i=0;i<55;i++){
    const e=document.createElement("span");
    e.style.position="fixed";e.style.left=(Math.random()*100)+"vw";e.style.top="-12px";
    e.style.width=(5+Math.random()*6)+"px";e.style.height=(8+Math.random()*8)+"px";
    e.style.background=colors[Math.floor(Math.random()*colors.length)];
    e.style.zIndex="99";e.style.borderRadius="2px";
    e.style.transform="rotate("+Math.random()*360+"deg)";
    e.style.transition="transform 2.8s linear, top 2.8s linear, opacity 2.8s";
    document.body.appendChild(e);
    requestAnimationFrame(()=>{e.style.top="105vh";e.style.transform+=" rotate(520deg)";e.style.opacity="0"});
    setTimeout(()=>e.remove(),3000);
  }
}
function reveal(){
  const box=document.getElementById("reveal");
  box.style.display="block";
  confetti();
}
window.addEventListener("load",()=>setTimeout(confetti,500));
