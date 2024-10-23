document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Load tasks from Local Storage
    loadTasks();

    // Add task event
    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    // Add task on Enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';
            }
        }
    });

    // Add task to the list and save to Local Storage
    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
            saveTasks();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        saveTasks();
    }

    // Save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(function(li) {
            tasks.push(li.textContent.replace('Delete', '').trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks from Local Storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(function(taskText) {
            addTask(taskText);
        });
    }
});