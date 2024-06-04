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
    }
];

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

    });
}

showTask(1);

