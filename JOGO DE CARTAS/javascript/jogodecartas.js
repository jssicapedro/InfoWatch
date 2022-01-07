var cartasviradas = 0;
var cartaanterior=-1;
var pontuacao=0;
var timeout=0;
function RodarCarta(posicao){
    if(timeout==0){
    let carta = document.getElementsByClassName("card")[posicao];
    if(carta.style.transform!="rotateY(180deg)"){
        timeout++;
        carta.style.transform="rotateY(180deg)";
        cartasviradas++;
        if(cartasviradas>1){
            cartasviradas = 0;
            if(VerificarCarta(posicao)==false){
                setTimeout(function(){
                    SegundaCarta(posicao);
                },1000);
            }else{
                timeout=0;
                setTimeout(function(){
                    VerificarVitoria();
                },300);
            }
        }else{
            cartaanterior=posicao;
            timeout=0;
        }
    }
    }
}

function SegundaCarta(posicao){
    document.getElementsByClassName("card")[posicao].style.transform="rotateY(0deg)";
    document.getElementsByClassName("card")[cartaanterior].style.transform="rotateY(0deg)";
    setTimeout(function(){
        timeout=0;
    },300);
}

function VerificarCarta(posicao){
    let imagem1 = document.getElementsByClassName("front")[posicao].src;
    let imagem2 = document.getElementsByClassName("front")[cartaanterior].src;
    if(imagem1==imagem2){
        pontuacao++;
        return true;
 
    }else{
        return false;
    }
}

function VerificarVitoria(){
    let totalcartas = document.getElementsByClassName("front").length
    if(pontuacao==(totalcartas/2)){
        alert("Ganhaste o jogo das Cartas");
    }
}

function AdicionarCartas(){
    let i;
    let quantidade = document.getElementById("quantidade");
    let quant = quantidade.value.trim();
    for(i=0;i<quant;i++){
    let div = document.createElement("div");
    div.setAttribute("class","card");
    div.setAttribute("onclick","RodarCarta("+i+")");
    document.getElementById("container").appendChild(div);
    let img1 = document.createElement("img");
    img1.setAttribute("class","front");
    img1.setAttribute("src","img/"+AdicionarImagem(quant)+".png");
    let img2 = document.createElement("img");
    img2.setAttribute("class","back");
    img2.setAttribute("src","img/back.png");
    document.getElementsByClassName("card")[i].appendChild(img1);
    document.getElementsByClassName("card")[i].appendChild(img2);
    }
}

var cartassaidas = [0,0,0,0,0,0,0,0];
function AdicionarImagem(quant){
    let result;

    let cartas = ["carta1","carta2","carta3","carta4","carta5","carta6","carta7","carta8"];

    do{
        result = SistemaAleatorio(quant);
    }while(cartassaidas[result]==2){
        cartassaidas[result]++;
        alert(cartassaidas);
        return cartas[result];
    }
}

function SistemaAleatorio(quant){
    let max = quant / 2;
    return Math.floor(Math.random() * max);
}