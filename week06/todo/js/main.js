import {Task} from './tasks.js';

let tasks = [];

// check local Storage
if (localStorage.getItem('tasks')){
    tasks = JSON.parse(localStorage.getItem('tasks'));
}

// set counter
let counter = document.querySelector('#counter');
counter.innerHTML = tasks.length;
if (tasks.length > 1) {
    counter.innerHTML += " Tasks Left";
}
else if (tasks.length = 1) {
    counter.innerHTML += " Task Left";
}
else  {
    counter.innerHTML += "0 Tasks Left";
}

// set task color
const color = document.querySelector('#taskColor');


// output existing tasks
function setTaskList(){
    if (tasks.length > 0) {
        let taskList = document.querySelector('ul');
        taskList.innerHTML = '';

        tasks.forEach((task) => {
                taskList.innerHTML += 
                `<li class="task-div">
                    <label class="check-box" ${task.TaskCompleted ? 'id="completed"' : ""}>
                        <input type="checkbox" value="${task.TaskId}" ${task.TaskCompleted ? "checked" : ""}>
                        ${task.TaskDescription}
                        <span class="checkmark"></span> 
                    </label>
                    <button class="btnDelete" onclick=""> X </button>
                </li>`
            }
        );

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(
            checkbox => {
                checkbox.addEventListener('change' , (event)=> {
                    const id = event.target.value;
                    const task = tasks.find(task => task.TaskId == id);
                    task.TaskCompleted = !task.TaskCompleted;
                    console.log(task.TaskCompleted);

                    localStorage.setItem("tasks" , JSON.stringify(tasks));
                });
            }
        );
    }
}
setTaskList();

// save button 
const button = document.querySelector('#btnSave');
button.addEventListener('click', () =>{
    event.preventDefault();

    const contentElement = document.querySelector('#taskContent');
    const newTask = new Task(contentElement.value);
    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    setTaskList();
    contentElement.value = '';
});

// dark mode 
const lightDark = document.querySelector('.light-dark-mode');

lightDark.addEventListener('click', () =>{
    event.preventDefault();

    document.body.style.backgroundColor = 'black';

    document.querySelector('h1').style.color = "white";
    document.querySelector('p').style.color = "white";
    document.querySelector('form').style.border = "1px solid white";

    document.querySelector('.light-dark-mode').className = "dark-mode";
    
    const label = document.querySelectorAll('label.check-box');
    var i;
    for (i = 0; i < label.length; i++) {
        label[i].style.color = "white";
    }

    const li = document.querySelectorAll('.task-div');
    var i;
    for (i = 0; i < label.length; i++) {
        li[i].style.border = "1px solid white";
    }
});

// light mode button
const Light = document.querySelector('.dark-mode');
Light.addEventListener('click', () =>{
    event.preventDefault();

    document.body.style.backgroundColor = 'white';

    document.querySelector('h1').style.color = "black";
    document.querySelector('p').style.color = "black";
    document.querySelector('form').style.border = "1px solid black";

    document.querySelector('.dark-mode').className = "light-dark-mode";
    
    const label = document.querySelectorAll('label.check-box');
    var i;
    for (i = 0; i < label.length; i++) {
        label[i].style.color = "black";
    }

    const li = document.querySelectorAll('.task-div');
    var i;
    for (i = 0; i < label.length; i++) {
        li[i].style.border = "1px solid black";
    }
});
