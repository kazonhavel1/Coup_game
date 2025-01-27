const cartas = ["/Files/Cartas/assasino.jpg","/Files/Cartas/capitao2.jpg","/Files/Cartas/capitao.jpg",
    "/Files/Cartas/condessa.jpg","/Files/Cartas/condessa2.jpg","/Files/Cartas/duque.jpg","/Files/Cartas/embaixador.jpg","/Files/Cartas/embaixador2.jpg"];

const form = document.querySelector(".forms form");


let quantidade_jogadores = document.getElementById("numero");

function obterCarta(){
    return cartas[Math.floor(Math.random() * cartas.length)];
}

function atribuiCartas(){
    event.preventDefault();
    const form = document.querySelector(".forms form"); // Seleciona o formulário corretamente

    form.innerHTML += `<img src="${obterCarta()}" alt="Imagem" class="carta1">`;
    form.innerHTML += `<img src="${obterCarta()}" alt="Imagem" class="carta2">`;
    form.innerHTML += `<img src="${obterCarta()}" alt="Imagem" class="carta3">`;
   
}