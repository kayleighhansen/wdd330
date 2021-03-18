import {Hexagon} from './hexagon.js';
let hexagons = [];

console.log(hexagons);

setMain();

// MAIN VIEW //
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
    <h1>How are you feeling today?</h1>

    <h3 class="today-h3">${today}</h3>

    <section class="mood-section">
        <div id="red" class="hexagon"></div>
        <div id="orange" class="hexagon"></div>
        <div id="yellow" class="hexagon"></div>
        <div id="green" class="hexagon"></div>
        <div id="black" class="hexagon"></div>
    </section>

    <div class="next-page">
        <h2 class="next-page-button" id="setNews">Next Page &#10140; </h2>
    </div>`;

    setColor();

    // button for the next page
    const newsBtn = document.querySelector('#setNews');
    newsBtn.addEventListener('click', (event) => {
        setNews();
    })

}

// set hex color from the input on the mood screen and push to localStorange
function setColor() {
    const colorButton = document.querySelector('.hexagon');
    colorButton.addEventListener('click', (event) => { 

        const newHex = new Hexagon(colorButton.id);
        hexagons.push(newHex);

        // PROBLEM: set the COLOR not the CONTENT
    })
}

// GOOD NEWS VIEW
function setNews() {
    const main = document.querySelector('main');

    let liIndex = 1;

    main.innerHTML = '';
    main.innerHTML += `<h1>Tell me something good!</h1>
        <div class="input-div">
            <input class="good-input">
            <button class="good-submit">&#10148;</button>
        </div>

        <section class="good-list" id="set-good-list">

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

        const contentElement = document.querySelector('.good-input');

        console.log(contentElement);
        console.log(liIndex);
        const newHex = new Hexagon(contentElement.value);

        console.log(newHex);

        hexagons.push(newHex);

        localStorage.setItem('hexagons', JSON.stringify(hexagons));

        setNewsList();

        contentElement.value = '';

    });

    

    // button calls the set canvas function, moves on to the main display 
    const newsBtn = document.querySelector('#setCanvas');
    newsBtn.addEventListener('click', (event) => {
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
            `<li id="${hexagon.Id}">
                    ${hexagon.Content}
                <input type="button" id="${hexagon.Id}" value="x" class="delete"></button>
             </li>
             `;
        });  

    }
}

// if selected, delete the selected li in the good news list 
    const deleteButton = document.querySelector('.delete');
    // PROBLEM: isn't selecting the selected li, maybe put it in the setNewsList() function
    deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
            // TODO: complete the delete button function
        console.log('hello');
        
    });



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
        <section class="news-canvas-section" id="set-good-list">
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

