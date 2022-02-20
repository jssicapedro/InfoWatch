var menu=0;
function menuIcon() {
  x = document.getElementsByClassName("menudrop");
  if(menu==0){
    menu=1;
    document.getElementsByClassName("menuicon")[0].classList.add("mexerIcon");
    document.getElementsByTagName("nav")[0].style.position="fixed";
    document.getElementsByTagName("nav")[0].style.margin="0px";
    document.getElementsByTagName("nav")[0].style.marginLeft="10%";
    document.getElementsByTagName("nav")[0].style.borderRadius="0px";
    document.getElementsByClassName("menu")[0].style.margin="0px";
    document.getElementsByClassName("menu")[0].style.marginLeft="0px";
    document.getElementsByClassName("menu")[0].style.width="100vw";
    document.getElementsByClassName("menu")[0].style.height="100vh";
    document.getElementsByClassName("menu")[0].style.backgroundColor="rgba(0, 0, 0, 0.808)";
    document.getElementById("logoMenu").style.backgroundColor="rgba(0, 0, 0, 0)";
    document.getElementById("logoMenu").style.marginTop="30px";
    document.getElementById("logoMenu").style.marginLeft="10px";
    document.getElementById("logoMenu").style.marginBottom="19vh";
    document.getElementsByTagName("body")[0].style.overflow="hidden"; 
    document.getElementById("menulogotipo").style.height="100px";
    document.getElementById("menulogotipo").style.marginTop="-20px";



    for(let i=0; i<x.length; i++){
    x[i].style.display="inline-block";
    }


  
  }else{
    menu=0;
    document.getElementsByClassName("menuicon")[0].classList.remove("mexerIcon");
    document.getElementsByTagName("nav")[0].style.position="absolute";
    document.getElementsByTagName("nav")[0].style.margin="5%";
    document.getElementsByTagName("nav")[0].style.marginTop="30px";
    document.getElementsByTagName("nav")[0].style.borderRadius="10px";
    document.getElementsByClassName("menu")[0].style.margin="0px";
    document.getElementsByClassName("menu")[0].style.marginLeft="auto";
    document.getElementsByClassName("menu")[0].style.width="auto";
    document.getElementsByClassName("menu")[0].style.height="auto";
    document.getElementsByClassName("menu")[0].style.backgroundColor="rgb( 255, 255, 255)";
    document.getElementById("logoMenu").style.backgroundColor="rgba(0, 0, 0, 1)";
    document.getElementById("logoMenu").style.marginTop="0px";
    document.getElementById("logoMenu").style.marginLeft="0px";
    document.getElementById("logoMenu").style.marginBottom="0px";
    document.getElementsByTagName("body")[0].style.overflow="auto";
    document.getElementById("menulogotipo").style.height=null;
    document.getElementById("menulogotipo").style.marginTop=null; 


    for(let i=0; i<x.length; i++){
      x[i].style.display=null;
      }
  }

}
