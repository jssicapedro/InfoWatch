    var cartasviradas = 0; //Para saber quantas cartas foram clicadas
    var cartaanterior; // vai guardar a posicao da carta clicada 
    var pontuacao=0; //Guarda os pontos por cada par acertado
    var timeout=0; //Para a pessoa nao poder sair a clicar em tudo, caso teja a 0 vai poder clicar quanto estiver a 1 nao vai funcionar ao clicar vai ter que esperar
    function RodarCarta(posicao){ //É ativada quando se carrega na carta e recebe a posicao dela
        if(timeout==0){ // Verifica se pode clicar ou nao 
            let carta = document.getElementsByClassName("card")[posicao]; //Vai buscar a carta clicada
            if(carta.style.transform!="rotateY(180deg)"){ //Verifica se ela esta virada para cima ou nao 
                timeout++; //Caso ela nao tenha cido virada vai colocar o timeout a 1 para impedir da pessoa poder clicar em mais cartas
                carta.style.transform="rotateY(180deg)"; // Vai adicionar o style para ela virar
                cartasviradas++; // Vai guardar que foi rodada uma carta
                if(cartasviradas>1){  // Caso sejam cido viradas 2 cartas
                    cartasviradas = 0; //Vai colocar a variavel a 0
                    if(VerificarCarta(posicao)==false){  //Vai chamar a função VerificarCarta e caso as duas cartas viradas sejam diferentes
                        setTimeout(function(){ // vai esperar 1s e depois executa a função SegundaCarta
                            SegundaCarta(posicao);
                        },1000);
                    }else{ // Caso as duas cartas sejam iguais 
                        timeout=0; //Vai meter o timeout a 0
                        setTimeout(function(){ //Vai esperar 0,3s e vai executar a função VerificarVitoria
                            VerificarVitoria();
                        },300);
                    }
                }else{//Caso so tenha uma carta virada para cima
                    cartaanterior=posicao; //Vai guardar a posicao da carta clicada
                    timeout=0; //Vai colocar o timeout a 0
                }
            }
        }
    }
    function SegundaCarta(posicao){//Recebe a posicao da carta clicada
        document.getElementsByClassName("card")[posicao].style.transform="rotateY(0deg)"; //vai mudar o style do elemento com a class card que acabamos de clicar para rotateY(0deg)
        document.getElementsByClassName("card")[cartaanterior].style.transform="rotateY(0deg)"; //vai mudar o style do elemento com a class card que tinhamos cliclado anteriormente para rotateY(0deg)
        setTimeout(function(){ //Vai esperar 0,3 segundos e depois colocar a variavel timeout a 0
            timeout=0;
        },300);
    }
    
    function VerificarCarta(posicao){ //Recebe a posicao da carta clicada
        let imagem1 = document.getElementsByClassName("front")[posicao].src; //Vai buscar o src da imagem acabada de ser clicada
        let imagem2 = document.getElementsByClassName("front")[cartaanterior].src; //Vai buscar o src da imagem anterior que tinha cido clicada
        if(imagem1==imagem2){ //Caso sejam iguais os src's das imagens
            pontuacao++; //Vai adicionar um ponto a varivel pontuacao
            return true; //Returna true
     
        }else{
            return false;// Caso sejam diferentes os src's das imagens vai Returnar false
        }
    }
    
    function VerificarVitoria(){
        let totalcartas = document.getElementsByClassName("front").length; //Vai buscar quantas cartas existem
        if(pontuacao==(totalcartas/2)){ //Verifica se a pontuação é metade do numero total de cartas ------- Dividir por dois porque estamos a trabalhar em pares ou seja 2 cartas equivalem a 1 ponto
            alert("Ganhaste o jogo das Cartas"); //Vai mostrar um alerta se a pontuação for metade das cartas totais
        }
    }
    
    function AdicionarCartas(){
        let i;
        let quantidade = document.getElementById("quantidade"); //Vai ler o numero escrito no input
        let quant = quantidade.value.trim();
        for(i=0;i<quant;i++){ //Vai repetir a vezes igual ao numero do input 
            let div = document.createElement("div"); //Vai criar a tag div e guardar na varivel
            div.setAttribute("class","card"); // Vai buscar a div criada e vai adicionar a class com o nome card (guarda na variavel)
            div.setAttribute("onclick","RodarCarta("+i+")"); // Vai buscar a div e vais adicionar quando clicada vai executar a funcão RodarCarta com a sua posicao no tabuleiro (guarda na variavel)
            document.getElementById("container").appendChild(div); // Vai adicionar a div que estava na variavel e adicionar no HTML dentro do atributo com o Id container
            let img1 = document.createElement("img"); //Vai criar a tag img e guardar na varivel
            img1.setAttribute("class","front"); //Vai buscar a img criada e vai adicionar a class com o nome front (guarda na variavel)
            img1.setAttribute("src","img/"+AdicionarImagem(quant)+".png"); //Vai buscar a img criada e vai adicionar o src com o caminho da imagem e chamar a função AdicionarImagem e enviar a quantidade de cartas que vai ter no total(guarda na variavel)
            let img2 = document.createElement("img");//Vai criar a tag img e guardar na varivel(guarda na variavel)
            img2.setAttribute("class","back");//Vai buscar a img criada e vai adicionar a class com o nome front (guarda na variavel)
            img2.setAttribute("src","img/back.jpg"); // Vai buscar a img criada e adicionar o src com o caminho "img/back.png"(guarda na variavel)
            document.getElementsByClassName("card")[i].appendChild(img1); //Vai buscar o elemento com a class card e colocar dentro do HTML a primeira imagem que criamos
            document.getElementsByClassName("card")[i].appendChild(img2); //Vai buscar o elemento com a class card e colocar dentro do HTML a segunda imagem que criamos
        }
    }
    var cartassaidas = [0,0,0,0,0,0,0,0]; //Vai guardar quais cartas já sairam
    function AdicionarImagem(quant){ //Recebe a quantidade maxima de cartas no tabuleiro
        let result;
        let cartas = ["carta1","carta2","carta3","carta4","carta5","carta6","carta7","carta8"]; //nome das cartas possiveis para o tabuleiro
    
        do{ 
            result = SistemaAleatorio(quant); //Vai a função SistemaAleatorio e enviar a quantide de cartas que via ter no total
        }while(cartassaidas[result]==2){ //Vai verificar no array cartassaidas a posicão da carta que vai para o tabuleiro e caso estiver 2 nessa posicao é porque já saiu duas vezes e por isso vai pedir outro numero
            cartassaidas[result]++; //Vai adicionar um valor a posicao no array
            return cartas[result]; //Vai returnar o nome da carta para a função AdicionarCartas onde foi chamada
        }
    }
    
    function SistemaAleatorio(quant){ //Recebe a quantidade maxima de cartas no tabuleiro
        let max = quant / 2; //vai dividir o numero maximo de cartas por 2 pois cada imagem tem que se repetir duas vezes
        return Math.floor(Math.random() * max); 
    }



