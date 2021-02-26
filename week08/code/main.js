// next page and previous page URLs
let nextUrl = "https://swapi.dev/api/people/";
let prevUrl = "https://swapi.dev/api/people/";
let page1 = "https://swapi.dev/api/people/?page=1";


// call get URL function
loadCharacters();


function loadCharacters(){
    // set main to empty
    let section = document.querySelector('section');
    let buttons = document.querySelector('.buttons');
    section.innerHTML = '';
    buttons.innerHTML = '';


    fetch(nextUrl) 
        .then(result => result.json())
        .then(jsonResult => {
            console.log(jsonResult);

            //Show count
            section.innerHTML += `<h2>There are ${jsonResult.count} characters</h2>`
            jsonResult.results.forEach(
                person => {
                    section.innerHTML +=
                        `<div class="character">${person.name}</div>`;
                    // console.log(person.name);
                }
            )

            const prevButton = document.createElement("button");
            prevButton.innerHTML = "Previous Page";
            buttons.appendChild(prevButton);
            prevUrl = jsonResult.prev;

            const nextButton = document.createElement("button");
            nextButton.innerHTML = "Next Page";
            buttons.appendChild(nextButton);
            nextUrl = jsonResult.next;

            nextButton.addEventListener("click", loadCharacters);
            prevButton.addEventListener("click", loadCharacters);
            
            const characters = document.querySelectorAll('div');
            console.log(characters);
            characters.forEach(
                character => {
                    character.addEventListener("click", (event) =>
                    console.log("you did it!")
                )}
            );
    }); 
}



