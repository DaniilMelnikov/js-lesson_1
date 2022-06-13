let n = Math.floor(Math.random() * 1000);

let userGuess = prompt('Угадай число! От 0 до 999');

if (isNaN(userGuess) || (+userGuess < 0 || +userGuess > 999)) {
    alert('Вы ввели не корректное значение!');
} while (true) {
    if (userGuess == n) {
        alert('Вы угадали!');
        break;
    } else if (+userGuess < n) {
        alert('Ваше число Меньше');
        userGuess = prompt('Введи число От 0 до 999');
    } else if (+userGuess > n) {
        alert('Ваше число Больше');
        userGuess = prompt('Введи число От 0 до 999');
    }
    }