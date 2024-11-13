const choices = document.querySelectorAll('.choice');
const resultDisplay = document.getElementById('result');
const restartButton = document.getElementById('restart');
const backButton = document.getElementById('back');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.dataset.choice;
        playerChoiceDisplay.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        playerChoiceDisplay.classList.add('active');
        const computerChoice = getComputerChoice();
        computerChoiceDisplay.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        computerChoiceDisplay.classList.add('active');
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result, computerChoice);
    });
});

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][randomNum];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return '¡Es un empate!';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return '¡Ganaste!';
    } else {
        return 'Perdiste. Intenta de nuevo.';
    }
}

function displayResult(result, computerChoice) {
    resultDisplay.textContent = `La computadora eligió: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}. ${result}`;
    restartButton.style.display = 'block';
    document.querySelector('.animation').style.opacity = 1; // Hacer visible la animación
    setTimeout(() => {
        playerChoiceDisplay.classList.remove('active');
        computerChoiceDisplay.classList.remove('active');
    }, 1000); // Remover la animación después de 1 segundo
}

restartButton.addEventListener('click', () => {
    resetGame();
});


function resetGame() {
    resultDisplay.textContent = '';
    playerChoiceDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';
    restartButton.style.display = 'none';
    document.querySelector('.animation').style.opacity = 0; // Ocultar la animación
}

document.getElementById('back').addEventListener('click', function() {
    window.location.href = '../index.html'; // Cambia 'pagina-de-regreso.html' por la URL que desees
});
