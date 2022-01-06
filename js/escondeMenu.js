function menuHunburger(){
    let x = document.getElementById("menuPrincipal");

    if(x.style.display == "none"){
        console.log("a");
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}