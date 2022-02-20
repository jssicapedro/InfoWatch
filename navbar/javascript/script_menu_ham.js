function menuIcon(desligar) {
    x=document.getElementsByClassName("menuicon")[0];
    let d = document.getElementById("menu");
    if(desligar!=0){

        if (d.style.display === "block") {
            d.style.display = "none";
            document.getElementsByTagName("body")[0].style.overflow=null;
            x.classList.remove("mexerIcon");
          } else {
            d.style.display = "block";
            document.getElementsByTagName("body")[0].style.overflow="hidden";
            x.classList.add("mexerIcon");
          }

    }else{
        d.style.display = "none";
        document.getElementsByTagName("body")[0].style.overflow=null;
        x.classList.remove("mexerIcon");
    }



}