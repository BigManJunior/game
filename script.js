const tasks = [
    {
        title: 'Задача 1: Какая сумма всех чисел в массиве',
        code: `let numbers = [34, 56, 347, 2408, 506];`
    },
    {
        title: 'Задача 2: Выведи все четные числа из массива',
        code: `/* Используй (% 2 === 0) */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];`
    },
    {
        title: 'Задача 3: Выведи все элементы массива в обратном порядке',
        code: `let items = ['первый', 'второй', 'третий', 'четвертый'];`
    },
    {
        title: 'Задача 4: Добавь "!" к каждому слову в массиве',
        code: `let exclamations = ['ура', 'да', 'классно', 'отлично'];    

console.log('Слова с восклицательными знаками:' + exclamations);`
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

function runCode() {
    var code = editor.getValue();
    var outputElement = document.getElementById('output');
    outputElement.textContent = ''; // Clear previous output

    try {
        var originalConsoleLog = console.log;
        var logOutput = '';
        console.log = function (message) {
            logOutput += message + '\n';
        };
        new Function(code)();
        console.log = originalConsoleLog;
        outputElement.textContent = logOutput || 'Code executed successfully. No output.';

    } catch (e) {
        outputElement.textContent = 'Error: ' + e.message;
    }
}
