const cartas = ["/Files/Cartas/assassino.jpg","/Files/Cartas/capitao2.jpg","/Files/Cartas/capitao.jpg",
    "/Files/Cartas/condessa.jpg","/Files/Cartas/condessa2.jpg","/Files/Cartas/duque.jpg","/Files/Cartas/embaixador.jpg","/Files/Cartas/embaixador2.jpg"];


let quantidade_jogadores = document.getElementById("numero");

function obterCarta(){

    return cartas[Math.floor(Math.random() * cartas.length)];
}
function atribuiCartas() {
    event.preventDefault();

    // Randomiza a primeira carta
    const card1 = document.getElementById("cardA");
    const img1 = document.createElement('img');
    img1.src = obterCarta();
    img1.alt = "Imagem";
    img1.className = "carta1";
    img1.id = "carta1";
    img1.addEventListener('click', () => openActionPopupImg('cardA')); // Adiciona o evento de clique diretamente à imagem
    card1.innerHTML = ''; // Limpa o conteúdo anterior
    card1.appendChild(img1);

    // Randomiza a segunda carta
    const card2 = document.getElementById("cardB");
    const img2 = document.createElement('img');
    img2.src = obterCarta();
    img2.alt = "Imagem";
    img2.className = "carta2";
    img2.id = "carta2";
    img2.addEventListener('click', () => openActionPopupImg('cardB')); // Adiciona o evento de clique diretamente à imagem
    card2.innerHTML = ''; // Limpa o conteúdo anterior
    card2.appendChild(img2);

    // Randomiza a terceira carta
    const card3 = document.getElementById("cardC");
    const img3 = document.createElement('img');
    img3.src = obterCarta();
    img3.alt = "Imagem";
    img3.className = "carta2";
    img3.id = "carta3";
    img3.addEventListener('click', () => openActionPopupImg('cardC')); // Adiciona o evento de clique diretamente à imagem
    card3.innerHTML = ''; // Limpa o conteúdo anterior
    card3.appendChild(img3);
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

    const cardHand = document.getElementById('cardHand');
    cardHand.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') { // Verifica se o clique foi em uma imagem
            const cardId = event.target.parentElement.id; // Obtém o id da div pai (cardA, cardB, etc.)
            openActionPopupImg(cardId); // Chama a função com o id correto
        }
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

    // Limpa o conteúdo antigo do actionPopup
    actionPopup.innerHTML = '';

    // Adiciona o novo conteúdo
    const actionText = document.createElement('p');
    actionText.id = "actionText";
    actionText.textContent = action;
    actionPopup.appendChild(actionText);

    const useButton = document.createElement('button');
    useButton.className = "popup-button button-Usar";
    useButton.textContent = "Usar";
    useButton.onclick = useAction;
    actionPopup.appendChild(useButton);

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.id !== cardId) {
            card.classList.add('transparent');
        } else {
            card.classList.remove('transparent');
        }
    });
}

function openActionPopupImg(cardId) {
    closeAllPopups(); // Fecha todos os pop-ups abertos
    closeCardPopup()
    const card = document.getElementById(cardId);
    const actionPopup = document.getElementById('actionPopup');
    card.appendChild(actionPopup);
    actionPopup.style.display = 'block';

    // Oculta todas as outras tags dentro do actionPopup
    const children = actionPopup.children;
    for (let i = 0; i < children.length; i++) {
        if (children[i].tagName !== 'IMG') { // Mantém apenas a tag <img> visível
            children[i].style.display = 'none';
        }
    }

    // Adiciona a imagem ao actionPopup (se ainda não estiver lá)
    let img = actionPopup.querySelector('img');
    if (!img) {
        img = document.createElement('img');
        img.src = "/Files/resumodeturnos.jpg";
        img.alt = "Imagem";
        img.id = "turnos";
        actionPopup.appendChild(img);
    }
    img.style.display = 'block'; // Garante que a imagem esteja visível

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.id !== cardId) {
            card.classList.add('transparent');
        } else {
            card.classList.remove('transparent');
        }
    });
}


function closeAllPopups() {
    const allPopups = document.querySelectorAll('.popup');
    allPopups.forEach(popup => {
        if (popup.id !== 'cardPopup') {
            popup.style.display = 'none';
            img = document.getElementById("turnos");
            if (img != null) {
                img.innerHTML = ''
            }
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

