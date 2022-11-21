let plusButton = document.querySelector("#plus");
let subtractButton = document.querySelector("#subtract")
let multiplyButton = document.querySelector("#multiply");
let divideButton = document.querySelector("#divide")
let statistics = document.querySelector("#statistics")
let resetStatistics = document.querySelector("#resetStatistics")
let right = 0;
let notRight = 0;


let minNumber = 1;
let maxNumber = 10;
let select = document.querySelector("select");
select.onchange = function () {
    let selectValue = select.value;
    switch (selectValue) {
        case 'easy': {
            minNumber = 1;
            maxNumber = 10;
            break
        }
        case 'medium': {
            minNumber = 11;
            maxNumber = 100;
            break
        }
        case 'hard': {
            minNumber = 101;
            maxNumber = 1000;
            break
        }
    }
}
plusButton.onclick = function () {
    let numberA = getRandomNumber();
    let numberB = getRandomNumber();
    let correctAnswer = numberA + numberB; //Правильный ответ
    let userAnswer = prompt(numberA + '+' + numberB + '='); //Ответ пользователя
    check(correctAnswer, userAnswer);
}

subtractButton.onclick = function () {
    let numberA = getRandomNumber();
    let numberB = getRandomNumber();
    let correctAnswer = numberA - numberB;
    let userAnswer = prompt(numberA + '-' + numberB + '=')
    check(correctAnswer, userAnswer);
}

multiplyButton.onclick = function () {
    let numberA = getRandomNumber();
    let numberB = getRandomNumber();
    let correctAnswer = numberA * numberB;
    let userAnswer = prompt(numberA + 'x' + numberB + '=')
    check(correctAnswer, userAnswer);
}

divideButton.onclick = function () {
    let numberA = getRandomNumber();
    let numberB = getRandomNumber();
    let correctAnswer = Math.round(numberA / numberB);
    let userAnswer = prompt(numberA + '/' + numberB + '= (округлите ответ)')
    check(correctAnswer, userAnswer);
}

statistics.onclick = function () {
    alert('Правильных ответов:' + right + '\nНеправильных ответов:' + notRight)
}

resetStatistics.onclick = function () {
    right = 0;
    notRight = 0;
    alert('Правильных ответов:' + right +'\nНеправильных ответов:' + notRight)
}

function getRandomNumber() {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

function check(correctAnswer, userAnswer) {
    if (userAnswer == correctAnswer) { //Условие, если ответ пользователя равен правильному ответу
        right++
        alert('Правильный ответ')
    } else { //Иначе, если ответ неравен
        notRight++
        alert('Ответ невереный. Правильный ответ : ' + correctAnswer)
    }
}