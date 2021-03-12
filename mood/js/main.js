import {Hexagon} from './hexagon.js';
let hexagons = [];

console.log(hexagons);
// set the home screen
setMain();


// home screen with options to see the user's canvas or begin a new day
function setMain() {

    const main = document.querySelector('main');
    main.innerHTML = '';   
    main.innerHTML += `
    <h1>Welcome to Mood Tracker</h1>
    
    <div class="section-container">
    <img src="css/logo.png" alt="logo">
    </div>

    <div class="section-container">
    <section class="home-screen-section">
        <button class="home-btn" id="setMood">New Day &#10140;</button>
        <button class="home-btn" id="setCanvas">See My Canvas &#10140;</button>
    </section>
    <div>
    `
    // buttons that go to new views
    const moodBtn = document.querySelector('#setMood');
    moodBtn.addEventListener('click', (event) => {
        setMood();
    })

    const canvasBtn = document.querySelector('#setCanvas');
    canvasBtn.addEventListener('click', (event) => {
        setCanvas();
    })
}


// set the mood input view
function setMood() {
    const main = document.querySelector('main');
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    main.innerHTML = '';

    main.innerHTML += `
    <h1>How are you feeling today?</h1>

    <h3 class="today-h3">${today}</h3>

    <section class="mood-section">
        <div id="hexagon1" class="hexagon"></div>
        <div id="hexagon2" class="hexagon"></div>
        <div id="hexagon3" class="hexagon"></div>
        <div id="hexagon4" class="hexagon"></div>
        <div id="hexagon5" class="hexagon"></div>
    </section>

    <div class="next-page">
        <h2 class="next-page-button" id="setNews">Next Page &#10140; </h2>
    </div>`;

    // button for the next page
    const newsBtn = document.querySelector('#setNews');
    newsBtn.addEventListener('click', (event) => {
        setNews();
    })

}


// set the good news view
function setNews() {
    const main = document.querySelector('main');

    let liIndex = 1;

    main.innerHTML = '';
    main.innerHTML += `<h1>Tell me something good!</h1>
        <div class="input-div">
            <input class="good-input">
            <button class="good-submit">&#10148;</button>
        </div>

        <section class="good-list">
            <li class="good-li" id="${liIndex}">
                <label>Programmed a lot</label>
                <input type="button" value="x" class="delete" id="delete${liIndex}"></button>
            </li>
        </section>
        <div class="next-page">
            <h2 class="next-page-button2" id="setCanvas">Next Page &#10140; </h2>
        </div>
    `;

    // submit button for the good news list 
    const inputButton = document.querySelector('.good-submit');
    inputButton.addEventListener('click', (event) => {
        liIndex += 1;  
        event.preventDefault();
        const contentElement = document.querySelector('.good-list');
        contentElement.innerHTML += `<li class="good-li" id="${liIndex}"><label>Programmed a lot</label><input type="button" value="x" class="delete"></button></li>`;
        // TODO: save to localStorage
    });

    // delete button for the good news list
    const deleteButton = document.querySelector('.delete');
    deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
            // TODO: complete the delete button function
        console.log('hello');
        
    });

    // button calls the set canvas function, moves on to the main display 
    const newsBtn = document.querySelector('#setCanvas');
    newsBtn.addEventListener('click', (event) => {
        setCanvas();
    })
}

// set the canvas of hexagon section and good news, main display
function setCanvas() {
    const main = document.querySelector('main');
        main.innerHTML = '';

        main.innerHTML += `
        
        <h1 class="mood-canvas-h1">Mood Canvas</h1>
        <div class="section-container">
        <section class="mood-canvas-section">
            <div class="hexagon" id="hexagon3"></div>
            <div class="hexagon" id="hexagon4"></div>
            <div class="hexagon" id="hexagon5"></div>
            <div class="hexagon" id="hexagon1"></div>
            <div class="hexagon" id="hexagon3"></div>
            <div class="hexagon" id="hexagon2"></div>
            <div class="hexagon" id="hexagon1"></div>
            <div class="hexagon" id="hexagon1"></div>
            <div class="hexagon" id="hexagon2"></div>
            <div class="hexagon" id="hexagon3"></div>
            <div class="hexagon" id="hexagon5"></div>
            <div class="hexagon" id="hexagon3"></div>
            <div class="hexagon" id="hexagon5"></div>
            <div class="hexagon" id="hexagon2"></div>
            <div class="hexagon" id="hexagon4"></div>
            <div class="hexagon" id="hexagon4"></div>
            <div class="hexagon" id="hexagon3"></div>
            <div class="hexagon" id="hexagon2"></div>
            <div class="hexagon" id="hexagon4"></div>
            <div class="hexagon" id="hexagon3"></div>
            <div class="hexagon" id="hexagon1"></div>
            <div class="hexagon" id="hexagon4"></div>
            <div class="hexagon" id="hexagon2"></div>
            <div class="hexagon" id="hexagon3"></div>
            <div class="hexagon" id="hexagon1"></div>
            <div class="hexagon" id="hexagon5"></div>
            <div class="hexagon" id="hexagon5"></div>
            <div class="hexagon" id="hexagon3"></div>
        </section>
        </div>
        <h2 class="good-news-h2">Good News</h2>
        <div class="section-container">
        <section class="news-canvas-section">
            <li class="news-li">
                <label>Programmed a lot</label>
            </li>
            <li>
                <label>Programmed a lot</label>
            </li>
            <li>
                <label>Programmed a lot</label>
            </li>
            <li>
                <label>Programmed a lot</label>
            </li>
        </section>
        </div>
        <div class="section-container">
        <button class="home-btn" id="setMain">Go Home</button
        </div>
        `;

        // home button
        const newsBtn = document.querySelector('#setMain');
        newsBtn.addEventListener('click', (event) => {
            setMain();
        })
}