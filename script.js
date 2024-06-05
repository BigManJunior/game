function runCode() {
    var code = editor.getValue();
    var outputElement = document.getElementById('output');
    content.innerHTML = '';
    outputElement.textContent = '';

    try {
        var originalConsoleLog = console.log;
        var logOutput = '';
        console.log = function (message) {
            logOutput += message + '\n';
        };
        new Function(code)();
        console.log = originalConsoleLog;
        outputElement.textContent = logOutput || 'Console clear.';

    } catch (e) {
        outputElement.textContent = 'Error: ' + e.message;
    }
}

let catMouse = 6;
let mouseDog = 11;
let catDog = 15;
let catDogMouse = 0;

let content = document.getElementById('content');


const tasks = [
    {
        title: 'Задача 1: Как вывести 3 кота и 3 собаки',
        code: `let arr = ['cat'];
for (let i = 0; i < arr.length; i++) {
    const cat = document.createElement('div');
    cat.classList.add('cat');
    content.appendChild(cat);
}`
    },
    {
        title: 'Задача 2: Найти максимальное значение в массиве',
        code: `let content = document.getElementById('content');
content.innerHTML = '';

const numbers = [3, 7, 22, 5, 10, 656, 8];
let max = numbers[0];

content.innerHTML = 'Максимальное значение: ' + max;`
    },
    {
        title: 'Задача 3: Подсчет суммы чисел от 1 до 20',
        code: `let sum = 0;
let i = 1;

while (i <= 20) {
    <!-- Твой код -->
    i++;
}

console.log("Сумма чисел от 1 до 20: " + sum);`
    },
    {
        title: 'Задача 4: Поиск наибольшего общего делителя',
        code: `let a = 56; 
let b = 98; 

while (b !== 0) {
    let temp = b;
    b = a % b;
    <!-- Твой код -->
}

console.log("Наибольший общий делитель: " + a);`
    },
    {
        title: 'Задача 5: Итерация по ключам объекта',
        code: `let car = {
    brand: "",
    model: "",
    year: "",
};

for (let key in car) {
    console.log(car);
}`
    },
    {
        title: 'Задача 6: Напиши это условие сокращенно как тернарный оператор',
        code: `<!-- Синтаксис: (Условие) ? если условие истинно : если условие ложно. -->
let age = 18;
let canVote = "";

if(age >= 18) {
    canVote = "Yes";
} else {
    canVote = "No";
}
console.log(canVote);`
    },
];

let currentTask = 0;

var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
    lineNumbers: true,
    mode: "javascript",
    theme: "default"
});

function showTask(taskIndex) {
    const task = tasks[taskIndex - 1];
    document.getElementById('taskTitle').innerText = task.title;
    editor.setValue(task.code);
    currentTask = taskIndex - 1;

    document.querySelectorAll('.tasks li').forEach((li, index) => {
        if (index === currentTask) {
            li.classList.add('currentTask');
        } else {
            li.classList.remove('currentTask');
        }
    });
}

showTask(1);

