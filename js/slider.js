window.onload = function () {
    slide1();
}

/* let intrevalo=3000; */

function slide1() {
    document.getElementById("banner").src = "../../img/arcade/arcadeBanner1.png";
    setTimeout("slide2()", 3000);
}

function slide2() {
    document.getElementById("banner").src = "../../img/arcade/iniciomodo.jpg";
    setTimeout("slide3()", 3000);
}

function slide3() {
    document.getElementById("banner").src = "../../img/arcade/tipos.jpg";
    setTimeout("slide4()", 3000);
}

function slide4() {
    document.getElementById("banner").src = "../../img/arcade/mapas.jpg";
    setTimeout("slide1()", 3000);
}