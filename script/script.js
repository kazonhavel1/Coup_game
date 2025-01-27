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
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('cardPopup').style.display = 'none';
    document.getElementById('actionPopup').style.display = 'none';

    // Adicione este evento de clique para fechar o pop-up quando clicar fora dele
    document.addEventListener('click', function(event) {
        const actionPopup = document.getElementById('actionPopup');
        if (actionPopup.style.display === 'block' && !actionPopup.contains(event.target) && !event.target.classList.contains('card')) {
            closeActionPopup();
        }
    });

    // Adicione evento de clique para elevar as cartas
    const smallCards = document.querySelectorAll('.small-card');
    smallCards.forEach(card => {
        card.addEventListener('click', function () {
            smallCards.forEach(c => c.classList.remove('clicked')); // Remove a classe 'clicked' de todas as cartas
            card.classList.add('clicked'); // Adiciona a classe 'clicked' na carta clicada
        });
    });
});

function openCardPopup() {
    document.getElementById('cardPopup').style.display = 'block';
    document.getElementById('openButton').style.display = 'none';
}

function closeCardPopup() {
    document.getElementById('cardPopup').style.display = 'none';
    document.getElementById('openButton').style.display = 'block';
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('transparent');
    });
}

function openActionPopup(action, cardId) {
    closeAllPopups(); // Fecha todos os pop-ups abertos
    const card = document.getElementById(cardId);
    const actionPopup = document.getElementById('actionPopup');
    card.appendChild(actionPopup);
    actionPopup.style.display = 'block';

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.id !== cardId) {
            card.classList.add('transparent');
        } else {
            card.classList.remove('transparent');
        }
    });

    document.getElementById('actionText').innerText = action;
}

function closeAllPopups() {
    const allPopups = document.querySelectorAll('.popup');
    allPopups.forEach(popup => {
        if (popup.id !== 'cardPopup') {
            popup.style.display = 'none';
        }
    });
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('transparent');
    });
}

function closeActionPopup() {
    const actionPopup = document.getElementById('actionPopup');
    if (actionPopup) {
        actionPopup.style.display = 'none';
    }
    // Remove a transparência dos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('transparent');
    });
}

function useAction() {
    alert('Ação Usada!');
    closeActionPopup();
}

