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
