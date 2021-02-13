import {Task} from './tasks.js';

const tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
}

if (tasks.length > 0) {
    
}

function print(){
    const div = document.querySelector('#tasks-list');
    div.innerHTML = tasks.map(
        task=> 
        `   <div class="task-div">
                <input type="checkbox">
                <label class="check-box">${task.TaskDescription}
                    <span class="checkmark"></span> 
                </label>
                <button class="btnDelete" onclick=""> X </button>
            </div>
        `
    ).join('');
}

document.querySelector('#btnSave')
    .addEventListener('click', (event) => {
        event.preventDefault(); 
        const newTask = new Task(
            document.querySelector('#newTask').value,
    );       
    tasks.push(newTask);
    print();
});

