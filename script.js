const messages = [
    "Sei sicura?",
    "Davvero sicura??",
    "Cassandra?",
    "Amore, per favore...",
    "Pensaci bene!",
    "Se dici no, sarò molto triste...",
    "Sarò molto molto triste...",
    "Sarò molto molto molto triste...",
    "Ok va bene, smetterò di chiedertelo...",
    "Scherzo, per favore dì sì! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "si_pagina.html";
}
