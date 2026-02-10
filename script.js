const messages = [
    "Tu es sûre?",
    "Vraiment sûre??",
    "Tu t'es levée du bon pied ce matin ?",
    "Sejdijeeee allez...",
    "Juste appuie sur oui!",
    "Si tu dis non je serais triste...",
    "Très triste...",
    "Très très triste...",
    "Ok c'est bon, je vais arrêter de te parler alors...",
    "Je rigole, allez dis OUI! ❤️"
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
    window.location.href = "yes_page.html";
}
