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
        title: 'Задача 1: Что изменить в коде что бы котов стало 5',
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

const numbers = [3, 7, 2, 5, 10, 6, 8];
let max = numbers[0];

content.innerHTML = 'Максимальное значение: ' + max;`
    }
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

