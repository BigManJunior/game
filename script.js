function drawCircles() {
    let startValue = parseInt(document.getElementById('startValue').value);
    let endCondition = parseInt(document.getElementById('endCondition').value);
    let stepValue = parseInt(document.getElementById('stepValue').value);
    let circleContainer = document.getElementById('circleContainer');
    circleContainer.innerHTML = ''; // Очистить контейнер перед рисованием новых кружочков

    let i = startValue;
    function addCircle() {
        if (i < endCondition) {
            let circle = document.createElement('div');
            circle.className = 'circle';
            circle.textContent = i; // Установка текстового содержимого кружочка
            circleContainer.appendChild(circle);
            i += stepValue;
            setTimeout(addCircle, 500); // Задержка в 500 миллисекунд (0.5 секунды) между каждым кружочком
        }
    }
    addCircle();
}
