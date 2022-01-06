function showSubmenu(){
    let x = document.getElementById("submenu-tratamentos");

    if(x.style.display == "flex"){
        x.style.display="none";
    }else{
        x.style.display="flex";
    }
}

function showMobileMenu() {
    let x = document.getElementById("menu-mobile");
    let menuIcon = document.getElementById("menu-icon");

 
    if(x.style.display == "flex"){
        x.style.display="none";
        menuIcon.className = 'icon-menu';
    }else{
        x.style.display="flex";
        menuIcon.className = 'icon-close';
    }
}

function showMobileSubmenuTratamentos(){
    let x = document.getElementById("submenu-mobile-tratamentos");
    let mainMobileMenu = document.getElementById("main-mobile-menu");

    mainMobileMenu.style.display = "none"
    x.style.display="block";
   
}