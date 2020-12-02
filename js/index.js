// Create Variables---------------------------------------

// Home Container
const home = document.querySelector(".home");
// Buttons 
const clickButton = document.querySelectorAll(".btn");
let clickButtonArray = Array.from(clickButton);
// Links
const links = document.querySelectorAll(".nav-link");
let linksArray = Array.from(links);
// Fun Bus logo h1
const funBus = document.querySelector(".logo-heading");
// Images
const imgDBClick = document.querySelectorAll("img");
let imgDBClickArray = Array.from(imgDBClick);


//--------------------------------------------------------------
// On button click, change the color to red

clickButtonArray.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.style.color = "red";
    });
});


// -------------------------------------------------------------------
// On button double click, send an alert message

clickButtonArray.forEach((e)=> e.addEventListener('dblclick', ()=> alert("You only need to click the button once.")));


// -------------------------------------------------------------------
// Welcome message on a successful page load

document.addEventListener('keydown', (elem) => {
    if (elem.key === 'Escape'){
        funBus.style.backgroundColor = "black"
        // setInterval(function(funBus.style.backgroundColor.toggle("black")), 2000)
        // I wanted to get the logo background to turn black and then reset back after 2 seconds but I could not get this line of code to work
    }
});


// ----------------------------------------------------------------
// Change the size of the h1 any time the scroll wheel is used

document.addEventListener('wheel', () => funBus.style.fontSize = "5rem")


// -------------------------------------------------------------
// When an image is double clicked, it applies a gray filter

imgDBClickArray.forEach((item) => 
    item.addEventListener("click", () => 
        item.style.opacity = "0.5")
);


// -------------------------------------------------------------
// When a link is moused over, it will change its color

linksArray.forEach((elem) => 
    elem.addEventListener('mouseover', () => 
        elem.style.color = "yellow")
);

// ----------------------------------------------------------------
// Change the text color back after mouse hovers off of links

linksArray.forEach((elem) => 
    elem.addEventListener('mouseout', () => 
        elem.style.color = "black")
);

// ---------------------------------------------------------------
// Change background color to slate gray when mouse is clicked

home.addEventListener('mousedown', () =>
    home.style.backgroundColor = "slateGray"
);

// ----------------------------------------------------------------
// Change background color back to white when mouse click is released

home.addEventListener('mouseup', () =>
    home.style.backgroundColor = "white"
);

// ------------------------------------------------------------------
// Change when the right mouse button is clicked

document.addEventListener('contextmenu', () =>
    home.style.backgroundColor = 'hotPink'
);

// ---------------------------------------------------------------------
// stopPropagation
linksArray.forEach((elem) => {
    elem.addEventListener('click', (event) => event.stopPropagation())
})