import {ToDo} from './todo.js';
let todos = [];

// check localStorage for existing ToDo items
if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
};

// output existing ToDos
setToDoList();

function setToDoList() {
    if (todos.length > 0) {
        let todoList = document.querySelector('ul');
        todoList.innerHTML = '';

        todos.forEach((todo) => {
            todoList.innerHTML += 
            `<li id="${todo.Id}">
                <label ${todo.Completed ? 'class="completed"' : ''}>
                    <input type="checkbox" value="${todo.Id}" ${todo.Completed ? "checked" : ""}>
                    ${todo.Content}
                </label>
                <input type="button" id="${todo.Id}" value="x" class="delete"></button>
             </li>`;
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

                    // save todo list
                    localStorage.setItem("todos", JSON.stringify(todos));

                    setToDoList();
                });
            }
        );
    }
}

// add new ToDos

// console.log(todos);

const button = document.querySelector('button');

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

console.log("WHYYY");

const y = document.querySelectorAll('.delete');
y.forEach(
    y => {
        y.addEventListener('click', (event) => {
            console.log(y);
            // get id of checkbox that was clicked
            const id = y.id;

            // find todo in todo array that was clicked
            const z = todos.find(
                todo => {
                    if (y.id == todo.Id) {
                        console.log('delete ' + y.id)
                        const b_delete = document.getElementById(y.id);
                        todos.remove(y.id);



                        // todos = document.querySelectorAll();
                        // console.log(todos);
                    }

                });
        });
    }
)

// console.log(y);