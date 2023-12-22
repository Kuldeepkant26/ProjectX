// For Navbar
document.querySelector('#menubtn').addEventListener('click',()=>{  
    document.querySelector('#navmenu').classList.toggle('navmenuy');
    document.querySelector('#navmenu').classList.toggle('navmenun');
    document.querySelector('#covnav').style.visibility='visible';
 });
 document.querySelector('#cclose').addEventListener('click',()=>{
     document.querySelector('#covnav').style.visibility='hidden';
 });

 // for floating cursor: 
//  function cmf(){
//     window.addEventListener("mousemove",(dets)=>{
     
//      document.querySelector(".cur").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
//  });
//  }
//  cmf();