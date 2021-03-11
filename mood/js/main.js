// set the home screen
setMain();

// home screen with options to see the user's canvas or begin a new day
function setMain() {
    const main = document.querySelector('main');
    main.innerHTML = '';

    main.innerHTML += `
    <h1>Welcome to Mood Tracker</h1>
    
    <div class="section-container">
    <section class="home-screen-section">
        <button class="home-btn" onclick="setMood()">New Day &#10140;</button>
        <button class="home-btn" onclick="setMoodCanvas()">See My Canvas &#10140;</button>
    </section>
    <div>
    `
}

function setMood() {
    const main = document.querySelector('main');
    main.innerHTML = '';

    main.innerHTML += `
    <h1>How are you feeling today?</h1>

    <section class="mood-section">
        <div id="hexagon1" class="hexagon"></div>
        <div id="hexagon2" class="hexagon"></div>
        <div id="hexagon3" class="hexagon"></div>
        <div id="hexagon4" class="hexagon"></div>
        <div id="hexagon5" class="hexagon"></div>
    </section>

    <div class="next-page">
        <h2 class="next-page-button" onclick="setGoodDay()">Next Page &#10140; </h2>
    </div>`;
}

function setGoodDay() {
    const main = document.querySelector('main');
    main.innerHTML = '';

    main.innerHTML += `<h1>Good day?</h1>
        <div class="input-div">
            <input class="good-input">
            <button class="good-submit">&#10148;</button>
        </div>

        <section class="good-list">
            <li>
                <label>Programmed a lot</label>
                <input type="button" value="x" class="delete"></button>
            </li>
            <li>
                <label>Programmed a lot</label>
                <input type="button" value="x" class="delete"></button>
            </li>
            <li>
                <label>Programmed a lot</label>
                <input type="button" value="x" class="delete"></button>
            </li>
            <li>
                <label>Programmed a lot</label>
                <input type="button" value="x" class="delete"></button>
            </li>
        </section>

        <div class="next-page">
            <h2 class="next-page-button2" onclick="setMoodCanvas()">Next Page <span class="arrow">&#10140;</span> </h2>
        </div>
    `;
}

function setMoodCanvas() {
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
        <button class="home-btn" onclick="setMain()">Go Home</button
        </div>
        `;
}




