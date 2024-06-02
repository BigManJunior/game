const tasks = [
    {
        title: 'Задача 1: Какая сумма всех чисел в массиве',
        code: `let numbers = [6, 24, 347, 408, 506];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);`,
        answer: 1291
    },
    {
        title: 'Задача 2: Первое число из массива',
        code: `let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers[0]);`,
        answer: 1
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

    // Check if the task is completed from localStorage
    for (let i = 0; i < tasks.length; i++) {
        if (localStorage.getItem('task' + (i + 1) + 'Completed')) {
            document.querySelectorAll('.tasks li')[i].classList.add('active');
        }
    }
}

// Show the first task by default and check progress
showTask(1);

// If the first task is completed, add the 'active' class to the second task
if (localStorage.getItem('task1Completed')) {
    document.getElementById('task2').classList.add('active');
}

function runCode() {
    var code = editor.getValue();
    var outputElement = document.getElementById('output');
    outputElement.textContent = ''; // Clear previous output

    try {
        // Override console.log to capture logs
        var originalConsoleLog = console.log;
        var logOutput = '';
        console.log = function (message) {
            logOutput += message + '\n';
        };

        // Execute the user code
        new Function(code)();

        // Restore console.log and display captured logs
        console.log = originalConsoleLog;
        outputElement.textContent = logOutput || 'Code executed successfully. No output.';

        // Check answer if current task has an answer
        if (tasks[currentTask].answer !== undefined) {
            let userResult;
            if (Array.isArray(tasks[currentTask].answer)) {
                userResult = JSON.parse(logOutput.trim());
            } else {
                userResult = parseInt(logOutput.trim());
            }

            if (JSON.stringify(userResult) === JSON.stringify(tasks[currentTask].answer)) {
                outputElement.textContent = logOutput + '\nПравильно! Перейдите к следующей задаче.';
                document.querySelectorAll('.tasks li')[currentTask + 1].classList.add('active');
                // Save progress to localStorage
                localStorage.setItem('task' + (currentTask + 1) + 'Completed', true);
            } else {
                outputElement.textContent = logOutput + '\nНеправильно. Попробуйте еще раз.';
            }
        }

    } catch (e) {
        outputElement.textContent = logOutput + '\nError: ' + e.message;
    }
}

// Show the first task by default and check progress
function checkProgress() {
    for (let i = 0; i < tasks.length; i++) {
        if (localStorage.getItem('task' + (i + 1) + 'Completed')) {
            console.log('Task ' + (i + 1) + ' is completed.');
        } else {
            console.log('Task ' + (i + 1) + ' is not completed.');
        }
    }
}

// Show the first task by default and check progress
showTask(1);
checkProgress();
