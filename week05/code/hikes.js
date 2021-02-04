import { hikeList } from "./list.js";
console.log(hikeList);

// class Hike: created the Hike 
// for each object in hikeList


// Functions: 
// --------------------
// create section 
// create name 
// create image
// create distance
// create difficulty
// create direction
// create description


  const imgBasePath = "//byui-cit.github.io/cit261/examples/";
  //on load grab the array and insert it into the page
  window.addEventListener("load", () => {
    showHikeList();
  });
  
  function showHikeList() {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    renderHikeList(hikeList, hikeListElement);
  }
  
  function renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
      parent.appendChild(renderOneHike(hike));
    });
  }
  function renderOneHike(hike) {
    const item = document.createElement("li");
  
    item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>`;
  
    return item;
  }