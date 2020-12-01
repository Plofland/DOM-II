// create variables
// Buttons Why is it not selecting all of the buttons?
const clickButton = document.getElementsByClassName(".btn");
console.log(clickButton);
// Images
const imgDBClick = document.getElementsByTagName("img");
console.log(imgDBClick);



// make the buttons flash on click

clickButton.addEventListener("mouseover", function(event){
    console.log("clicked");
});


// on load, make the "Fun Bus" h1 element transition in (make big and then go back to it's normal size)

// change the color of the scroll wheel as we scroll

// When an image is double clicked, it's size is changed

imgDBClick.addEventListener("click", function(event){
    debugger;
    console.log("double-clicked")
});

// When a link is moused over, it will increase in size