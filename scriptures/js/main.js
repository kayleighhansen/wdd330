import { Hexagon } from './hexagon.js';
let hexagons = [];

console.log(hexagons);

setMain();
const homebtn = document.querySelector('#home-btn');
homebtn.addEventListener('click', event => {
    console.log('home');
    setMain();
})

const nextbtn = document.querySelector('#next-btn');
nextbtn.style.display = 'inline';
nextbtn.addEventListener('click', event => {
    console.log('next');
    setMood();
})

// MAIN VIEW //
function setMain() {

    const main = document.querySelector('main');
    main.innerHTML = '';
    main.innerHTML += `
    <h1>Welcome to Scripture Study Tracker</h1>
    
    <div class="section-container">
        <img src="css/logo.png" alt="logo">
    </div>

    <section class="instructions">
        <p>This is a personal journal where you can keep track of your 
        Scripture Study over time.</p>
        
        <p>Pick a color, think about something you learned, and before 
        you know it, you'll have a beautiful canvas!</p>

        <p>Press the next arrow to get started</p>
    </section>
    `;

    const nextbtn = document.querySelector('#next-btn');
    nextbtn.addEventListener('click', event => {
        console.log('next');
        setMood();
    })

    nextbtn.style.display = 'inline';

}

// MOOD VIEW //
function setMood() {

    const main = document.querySelector('main');
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    main.innerHTML = '';

    main.innerHTML += `
    <h1>How good was your scripture study?</h1>

    <h3 class="today-h3">${today}</h3>

    <section class="mood-section">
        <div id="red" class="hexagon"></div>
        <div id="orange" class="hexagon"></div>
        <div id="yellow" class="hexagon"></div>
        <div id="green" class="hexagon"></div>
        <div id="black" class="hexagon"></div>
    </section>`;

    setColor();

    const nextbtn = document.querySelector('#next-btn');
    nextbtn.addEventListener('click', event => {
        console.log('next');
        setNews();
    })

    nextbtn.style.display = 'inline';

}

// set hex color from the input on the mood screen and push to localStorange
function setColor() {

    document.querySelectorAll('.hexagon').forEach(color => {
        color.addEventListener('click', event => {
            console.log("yes");
            const newHex = new Hexagon();
            newHex.Color = color.id;
            console.log(newHex.Color);
            hexagons.push(newHex);
        })
    });
}

// GOOD NEWS VIEW
function setNews() {
    const main = document.querySelector('main');

    main.innerHTML = '';
    main.innerHTML += `<h1>Tell me something you learned:</h1>
        <div class="input-div">
            <input class="good-input">
            <button class="good-submit">&#10148;</button>
        </div>

        <section class="good-list" id="set-good-list">

        </section>`;

    // submit button for the good news list 
    const inputButton = document.querySelector('.good-submit');

    inputButton.addEventListener('click', (event) => {

        event.preventDefault();
        let contentElement = document.querySelector('.good-input').value;
        console.log(contentElement);

        hexagons[hexagons.length - 1].Content = contentElement;
        localStorage.setItem('hexagons', JSON.stringify(hexagons));

        setNewsList();

        contentElement = 'yes';
        console.log(contentElement);

    });

    const nextbtn = document.querySelector('#next-btn');
    nextbtn.style.display = 'inline';
    nextbtn.addEventListener('click', event => {
        console.log('next');
        setCanvas();
    })
}

// take the total list of good news and create a list for the good news view, delete button included
function setNewsList() {
    if (hexagons.length > 0) {
        let newsList = document.querySelector('.good-list');
        newsList.innerHTML = '';

        hexagons.forEach((hexagon) => {
            newsList.innerHTML +=
                `<li id="${hexagon.Id}" class="test">
                    <p class="good-list-items">${hexagon.Content}</p>
                    <input type="button" value="x" class="delete"></button>
                </li>`;

                deleteNews();
        });
    }
}

// get the id of 
function deleteNews() {

    const id = `#${hexagons[hexagons.length - 1].Id}`;
    const hex = document.querySelector(`${id}`);
    console.log(hex);

    hex.addEventListener('click', (event) => {
        console.log('delete');

        const b_delete = document.querySelect(id);

        todos.splice(b_delete, 1);

        localStorage.setItem('hexagons', JSON.stringify(hexagons));

        b_delete.remove();
    });
}

// set the canvas of hexagon section and good news, main display
function setCanvas() {
    const main = document.querySelector('main');
    main.innerHTML = '';

    main.innerHTML += `
        
        <h1 class="mood-canvas-h1">Scripture Study Canvas</h1>
        <div class="section-container">
        <section class="mood-canvas-section" id="set-canvas">

        </section>
        </div>
        <h2 class="good-news-h2">Things you've learned</h2>
        <div class="section-container">
        <section class="news-canvas-section" id="set-good-list">

        </section>`;

    const canvas = document.querySelector('#set-canvas');
    const list = document.querySelector('#set-good-list');

    console.log(hexagons.length);
    if (hexagons.length > 0) {
        hexagons.forEach((hexagon) => {
            list.innerHTML += `<li class="canvas-li">${hexagon.Content}</li>`
            canvas.innerHTML += `<div class="hexagon" id="${hexagon.Color}"></div>`
        });
    }

    nextbtn.style.display = 'none';

}