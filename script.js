let level = 1;

function drawCircles() {
    let startValue = parseInt(document.getElementById('startValue').value);
    let endCondition = parseInt(document.getElementById('endCondition').value);
    let stepValue = parseInt(document.getElementById('stepValue').value);
    let circleContainer = document.getElementById('circleContainer');
    let message = document.getElementById('message');
    circleContainer.innerHTML = ''; // Очистить контейнер перед рисованием новых кружочков
    message.innerHTML = ''; // Очистить сообщение

    let i = startValue;
    function addCircle() {
        if (i < endCondition) {
            let circle = document.createElement('div');
            circle.className = 'circle';
            circle.textContent = i; // Установка текстового содержимого кружочка
            circleContainer.appendChild(circle);
            i += stepValue;
            setTimeout(addCircle, 500); // Задержка в 500 миллисекунд (0.5 секунды) между каждым кружочком
        } else {
            checkLevelCompletion();
        }
    }
    addCircle();
}

function checkLevelCompletion() {
    let circles = document.querySelectorAll('.circle');
    let expectedValues = [-4, 1, 6];
    let correctPlacement = true;

    circles.forEach((circle, index) => {
        if (parseInt(circle.textContent) !== expectedValues[index]) {
            correctPlacement = false;
        }
    });

    let message = document.getElementById('message');
    let nextLevelButton = document.getElementById('nextLevelButton');
    if (correctPlacement && circles.length === expectedValues.length) {
        level++;
        message.innerHTML = `Поздравляем! Вы перешли на уровень ${level}.`;
        nextLevelButton.style.display = 'block'; // Показать кнопку перехода на следующий уровень
    } else {
        message.innerHTML = 'Пожалуйста, попробуйте снова.';
    }
}

function goToNextLevel() {
    document.getElementById('level1').style.display = 'none'; // Скрыть уровень 1
    document.getElementById('nextLevelButton').style.display = 'none'; // Скрыть кнопку перехода
    document.getElementById('level2').style.display = 'block'; // Показать уровень 2
}

function drawCircles2() {
    let startValue = parseInt(document.getElementById('startValue2').value);
    let endCondition = parseInt(document.getElementById('endCondition2').value);
    let stepValue = parseInt(document.getElementById('stepValue2').value);
    let circleContainer = document.getElementById('circleContainer2');
    let message = document.getElementById('message2');
    circleContainer.innerHTML = ''; // Очистить контейнер перед рисованием новых кружочков
    message.innerHTML = ''; // Очистить сообщение

    let i = startValue;
    function addCircle2() {
        if (i > endCondition) {
            let circle = document.createElement('div');
            circle.className = 'circle';
            circle.textContent = i; // Установка текстового содержимого кружочка
            circleContainer.appendChild(circle);
            i -= stepValue;
            setTimeout(addCircle2, 500); // Задержка в 500 миллисекунд (0.5 секунды) между каждым кружочком
        } else {
            checkLevelCompletionLevel2();
        }
    }
    addCircle2();
}

function checkLevelCompletionLevel2() {
    let circles = document.querySelectorAll('#circleContainer2 .circle');
    let expectedValues = [9, 6, 3, 0];
    let correctPlacement = true;

    circles.forEach((circle, index) => {
        if (parseInt(circle.textContent) !== expectedValues[index]) {
            correctPlacement = false;
        }
    });

    let message = document.getElementById('message2');
    if (correctPlacement && circles.length === expectedValues.length) {
        level++;
        message.innerHTML = `Поздравляем! Вы перешли на уровень ${level}.`;
    } else {
        message.innerHTML = 'Пожалуйста, попробуйте снова.';
    }
}
