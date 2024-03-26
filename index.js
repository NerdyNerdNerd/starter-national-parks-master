//usins querySelector(); examples
console.log(document);
const heading = document.querySelector("h1");
console.log(heading);

let value = document.querySelector(".value");
console.log(value);

const btn = document.querySelector("button");
console.log(btn);

const area1 = document.querySelector(".area-display");
console.log(area1);

const descendent = document.querySelector(".stat div");
console.log(descendent);

const hello = document.querySelector(".hello");
console.log(hello);

//using querySelectorAll(); examples
const buttons = document.querySelectorAll("button");
console.log(buttons);

const ratingDiv = document.querySelectorAll(".rating-display div");
for (let element of ratingDiv.values()) {
    console.log(element);
}
console.log(ratingDiv);

const areaDiv = document.querySelectorAll(".area-display div");
for (let i = 0; i < areaDiv.length; i++) {
    const element = areaDiv[i];
    console.log(element);
  }

  //log each description to the console
  const descriptions = document.querySelectorAll(".description-display");
  for (let desc of descriptions.values()) {
    let content = desc.innerText;
    console.log(content);
  }

  for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + "...";
    }
  
    console.log(content);
  }
//display the elipsed description to the pag e
  for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + "...";
    }
  
    desc.innerText = content;
  }

  //display a link to allow user to expand to see the full description
  for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + `<a href="#">...</a>` ;
    }
  
    //desc.innerText = content;
    desc.innerHTML = content;
  }

  //get all the rating elements with class of value
  const ratings = document.querySelectorAll(".rating-display .value");

  //check if the park rating is above 4.7 and update the style by adding the high-rating css class to it
  for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.classList.add("high-rating");
      rating.classList.remove("value");
    }
  }

  // create a new element with text to display the current number of parks on display in the header
//select all the park display elements
const parks = document.querySelectorAll(".park-display");
//get teh number of parks using the length property
const numberParks = parks.length;
//create a new div element to hold the number of parks
const newElement = document.createElement("div");
//set teh text of the newElement div
newElement.innerText = `${numberParks} exciting parks to visit`;
//add the header-statement css class to the newEmelent
newElement.classList.add("header-statement");
//add the newElement to the page
const header = document.querySelector("header");
header.appendChild(newElement);

//Example of removing a DOM element
// Get the parent element of all parks
const main = document.querySelector("main");
// Select a single park
const park = main.querySelector(".park-display");
// Remove that park
main.removeChild(park);

