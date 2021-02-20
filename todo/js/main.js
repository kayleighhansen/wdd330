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
                        console.log('delete ' + y.id)
                        const b_delete = document.getElementById(y.id);

                        b_delete.remove();
                        console.log(todos);

                        // todos = document.querySelectorAll(y.id);
                        // setToDoList();

                    }

                });
        });
    }
)

// counter at the top

// const total =  document.querySelectorAll('li').length;
// const completed = document.querySelectorAll('.completed').length;
// const left = total - completed;
// console.log(left);

// if (left == 1) {
//     document.querySelector('#counter').innerHTML = left + ' Task Left';
// } else {
//     document.querySelector('#counter').innerHTML = left + ' Tasks Left';
// }

// function btnNew() {
//     newTodos = []
    
//     // select todos with completed false

//     // display newTodos

//     // display newTodos
// }

// function btnCompleted() {
//     completedTodos = []
    
//     // select todos with completed true

//     // display completedTodos

//     // display completedTodos
// }

// function btnAll() {

//     // display all todos
// }

