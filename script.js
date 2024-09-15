// ДЛЯ ВСЕХ

function toggleMenu(){
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else{
        menu.style.display = 'none';
    }
};



// ДЛЯ ГЛАВНОГО МЕНЮ

function greetings(){
    var now = new Date();
    var hour = now.getHours();
    var greeting;

    if (hour < 6){
        greeting = 'Доброй ночи!';
    } else if (hour < 12){
        greeting = 'Доброе утро!';
    } else if (hour < 18){
        greeting = 'Добрый день!';
    } else{
        greeting = 'Добрый вечер!';
    }

    document.getElementById('greetingText').innerHTML = greeting;
};

window.onload = greetings;

// ИГРА

var randNum;
var attempts = 0;
var restartButton = document.getElementById('restartButton');

function game() {
    randNum = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('messageText').innerHTML = '';
    restartButton.style.display = 'none';
}

function checkNum() {
    var userNum = parseInt(document.getElementById('userNumInput').value);
    var messageText = document.getElementById('messageText');
    var attemptsText;

    if (isNaN(userNum)) {
        messageText.innerHTML = 'Введи число!';
        return;
    }

    attempts += 1;
    if (attempts === 1) {
        attemptsText = 'попытка';
    } else if (attempts > 1 && attempts < 5) {
        attemptsText = 'попытки';
    } else {
        attemptsText = 'попыток';
    }
    
    if (randNum < userNum) {
        messageText.innerHTML = 'Загаданное число меньше!';
    } else if (randNum > userNum) {
        messageText.innerHTML = 'Загаданное число больше!';
    } else {
        messageText.innerHTML = `Поздравляю! Ты отгадал(а) число ${randNum} за ${attempts} ${attemptsText}!`;
        restartButton.style.display = 'block';
    }
}

document.getElementById('userNumInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkNum();
    }
});

game();