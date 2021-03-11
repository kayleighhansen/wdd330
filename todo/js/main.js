import {ToDo} from './todo.js';
let todos = [];

// check localStorage for existing ToDo items
if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
};

// output existing ToDos
setToDoList();
setTopCounter();

function setToDoList() {
    if (todos.length > 0) {
        let todoList = document.querySelector('ul');
        todoList.innerHTML = '';

        todos.forEach((todo) => {
            todoList.innerHTML += 
            `<li id="${todo.Id}">
                <label ${todo.Completed ? 'class="completed"' : 'class="not-completed"'}>
                    <input type="checkbox" value="${todo.Id}" ${todo.Completed ? "checked" : ""}>
                    ${todo.Content}
                </label>
                <input type="button" id="${todo.Id}" value="x" class="delete"></button>
             </li>
             `;
        });  

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(
            checkbox => {
                checkbox.addEventListener('change', (event) => {

                    // get id of checkbox that was clicked
                    const id = Number(event.target.value);

                    // find todo in todo array that was clicked
                    const todo = todos.find(todo => todo.Id === id);

                    // update completed
                    todo.Completed = !todo.Completed;

                    setTopCounter();

                    console.log("counter");

                    // save todo list
                    localStorage.setItem("todos", JSON.stringify(todos));
                    
                });
            }
        );
    }
}

// add new ToDos

const button = document.querySelector('#btnSave');

button.addEventListener('click', (event) => {
    // prevent form submission
    event.preventDefault();

    // select todo content
    const contentElement = document.querySelector('#content');
    const newTodo = new ToDo(contentElement.value);

    // create new object
    todos.push(newTodo);

    // put new object in local storage
    localStorage.setItem('todos', JSON.stringify(todos));

    setToDoList();
    console.log(todos);

    // reset textbox
    contentElement.value = '';
});

// delete button 

setToDoList();
const y = document.querySelectorAll('.delete');
y.forEach(
    y => {
        y.addEventListener('click', (event) => {
            // get id of checkbox that was clicked
            const id = y.id;

            // find todo in todo array that was clicked
            const z = todos.find(
                todo => {
                    if (y.id == todo.Id) {

                        const b_delete = document.getElementById(y.id);

                        todos.splice(b_delete, 1);

                        localStorage.setItem('todos', JSON.stringify(todos));

                        b_delete.remove();
                    }
                });
        });
    }
)

// counter at the top
function setTopCounter() {
    const total =  document.querySelectorAll('li').length;
    const completed = document.querySelectorAll('.completed').length;
    const left = total - completed;
    console.log(left);

    if (left == 1) {
        document.querySelector('#counter').innerHTML = left + ' Task Left';
    } else {
        document.querySelector('#counter').innerHTML = left + ' Tasks Left';
    }
}

// setTopCounter();

// NEW BUTTON
const button_new = document.querySelector('#btnNew');
button_new.addEventListener('click', (event) => {
    console.log("new");
    setToDoList();

    const completed = document.querySelectorAll('.completed');

    completed.forEach(
        completed => {
            console.log(completed);
            completed.parentNode.style.display = "none";
        })

})

// COMPLETED BUTTON
const button_completed = document.querySelector('#btnCompleted');
button_completed.addEventListener('click', (event) => {
    console.log("completed");
    setToDoList();

    const notCompleted = document.querySelectorAll('.not-completed');

    notCompleted.forEach(
        notCompleted => {
            console.log(notCompleted);
            notCompleted.parentNode.style.display = "none";
        })
})

// ALL BUTTON
const button_all = document.querySelector('#btnAll');
button_all.addEventListener('click', (event) => {
    console.log("all");

    setToDoList();
})

const button_dark = document.querySelector('#btnDarkMode');
button_dark.addEventListener('click', (event) => {
    console.log("dark");

    const darkBody = document.body;
    darkBody.classList.toggle("dark-mode");
})


