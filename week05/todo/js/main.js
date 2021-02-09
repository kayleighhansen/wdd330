import {Task} from './tasks.js';

const tasks = [];

function print(){
    const div = document.querySelector('#tasks-list');
    div.innerHTML = tasks.map(
        task=> 
        `<tr>
            <td class="check-box"><input type="checkbox" name="tasks" value="tasks" class="check-mark"></td>
            <td class="task-box">${task.TaskDescription}</td>
        </tr>`
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

