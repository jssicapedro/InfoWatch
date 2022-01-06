var contar=1;
loading();
function loading(){
    document.getElementById("quadrado"+contar).style.animation ="loading 1s";

    switch(contar){
        case 1:
            document.getElementById("quadrado2").style.animation ="none";
            contar++;
            break;
        case 2:
            document.getElementById("quadrado3").style.animation ="none";
            contar++;
            break;
        case 3:
            document.getElementById("quadrado4").style.animation ="none";
            contar++;
            break;
        case 4:
            document.getElementById("quadrado1").style.animation ="none";
            contar=1;
            break;
        }
        if(document.getElementById("loading").style.display != "none"){
    setTimeout(loading, 300);
}
}
function carregada(){
    document.getElementById("loading").style.display = "none";
    document.getElementById("principal").style.display="block";

}

function filtro(posicao){
    carregada();
    let i;
    let sel = document.getElementsByClassName("selecao");
    let sel1 = document.getElementsByClassName("selecao1");
    let select = document.getElementsByClassName("botao");
    let mapa = document.getElementsByClassName("mapa");
    for (i = 0; i < sel.length; i++) {
        sel[i].style.display = "none";
        sel1[i].style.display = "none";
    }  
    for(i = 0; i < select.length; i++){
        select[i].classList.remove("select");
    }
    for(i = 0; i < mapa.length; i++){
        mapa[i].style.display = "none";
    }
    sel[posicao].style.display = "block";
    sel1[posicao].style.display = "block";
    select[posicao].classList.add("select");

    
    let filtro="mapa";
    switch(posicao){

        case 1:
            filtro="controle";
            break;
        case 2:
            filtro="ataque";
            break;
        case 3:
            filtro="escolta";
            break;
        case 4:
            filtro="capture";
            break;
        case 5:
            filtro="hibrido";
            break;
        case 6:
            filtro="eliminacao";
            break;
        case 7:
            filtro="morte";
            break;
        case 8:
            filtro="equipa";
            break;             
        default:
            filtro="mapa";
            break;
    }
    
    mapa = document.getElementsByClassName(filtro);
    for(i = 0; i < mapa.length; i++){
        mapa[i].style.display = "block";
    } 
}

var posicao = 0;

function fecharSlideFotos(){
    document.getElementsByClassName("slidefoto")[0].style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow="auto";   
}

function mudarFoto(seta){
    let quantidade = document.getElementsByClassName("imagem").length;
    
    posicao = posicao + seta;
    if(posicao <= -1){
        posicao = quantidade-1;
    }else if(posicao >= quantidade){
        posicao = 0;
    }

    filtrarFoto();

}
function filtrarFoto(){
    let mapa = document.getElementsByClassName("mapa")[posicao];
    if(mapa.style.display=="none"){
        mudarFoto(1);
    }
    else{
        escolherFoto(posicao);

    }
}

function escolherFoto(imagem){
    posicao = imagem;
    let srcimg= document.getElementsByClassName("imagem")[posicao].src;
    let descricaoimg = document.getElementsByClassName("descricao")[posicao].innerHTML;
    document.getElementsByClassName("slidefoto")[0].style.display = "block";
    document.getElementsByClassName("slidefoto-imagem")[0].src= srcimg;
    document.getElementsByClassName("slidefoto-descricao")[0].innerHTML=descricaoimg;
    document.getElementsByTagName("body")[0].style.overflow="hidden";
}

