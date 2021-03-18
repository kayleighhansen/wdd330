//create header

const header_h1 = document.createElement("h1");
header_h1.className = 'header'; 
const text = document.createTextNode("portfolio");
header_h1.appendChild(text);
const element = document.querySelector('header');
element.appendChild(header_h1);

const header_p = document.createElement("p");
header_p.className = 'subheader'; 
const text_2 = document.createTextNode("kayleigh hansen wdd 330");
header_p.appendChild(text_2);
const element_2 = document.querySelector('header');
element_2.appendChild(header_p);

//navigation bar - create Notes button

const notes_button = document.createElement('button');  
notes_button.className = 'dropdown-btn'; 
const text_3 = document.createTextNode("Notes");   
notes_button.appendChild(text_3);
const element_3 = document.querySelector('ol');
element_3.appendChild(notes_button);





 //navigation bar - creates all of the li's from week folders
 let ol = document.querySelector('.dropdown-container');

 const links = [
   {
        label: "home",
        url: "../index.html"
    },
    {
        label: "week 01",
        url: "../week01/index.html"
    },
    {
        label: "week 02",
        url: "../week02/index.html"
    },
    {
        label: "week 03",
        url: "../week03/index.html"
    },
    {
        label: "week 04",
        url: "../week04/index.html"
    },
    {
        label: "week 05",
        url: "../week05/index.html"
    },
    {
        label: "week 07",
        url: "../week07/index.html"
    },
    {
        label: "week 08",
        url: "../week08/index.html"
    },
    {
        label: "week 09",
        url: "../week09/index.html"
    },
    {
        label: "week 10",
        url: "../week10/index.html"
    },
    {
        label: "week 11",
        url: "../week11/index.html"
    }
];

console.log(ol.className);

links.forEach(
    link => {
        ol.innerHTML += 
        `<li><a href="${link.url}">${link.label}</a></li>`;
    }
);

// create footer

const footer = document.createElement('p');
const text_f = document.createTextNode("@Kayleigh Hansen | BYUI | WDD330 Brother Thayne");
footer.appendChild(text_f);
const element_f = document.querySelector('footer');
console.log(footer);
element_f.appendChild(footer);