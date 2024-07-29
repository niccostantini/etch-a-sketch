const container = document.querySelector(".container");
const containerWidth = container.offsetHeight;
const resetButton = document.querySelector(".reset");
const number = document.querySelector(".number");
const createButton = document.querySelector(".create");
const blackButton = document.querySelector("#black");
const randomButton = document.querySelector("#random");
const darkenButton = document.querySelector("#darken");
let colorButtons = document.querySelectorAll(".color");
let squareColor = "black";
let squares;
let squareDim;

blackButton.disabled = true;

resetButton.disabled = true;

function createGrid (n) {

    if (n > 100) {container.textContent = "!!!ERROR!!!"; resetButton.disabled = false; createButton.disabled = true}
    else if (n <= 100) {
        if (container.textContent == "ERROR") {container.textContent = ""}
        for(i = 0; i < (n*n); i++){
            let square = document.createElement("div");
            squareDim = (parseInt(containerWidth)/n) + "px";
            square.setAttribute("class", "square");
            square.style.width = squareDim; square.style.height = squareDim;
            container.appendChild(square);
        }
        squareDim = (container.style.offsetWidth / n) + "px";
        squares = document.querySelectorAll(".square");
        squares.forEach(square => square.addEventListener("mouseover", () => {square.style.backgroundColor = squareColor;
            if (squareColor == "random") {squareColor=randomColor()}
            if (darkenButton.classList.contains("selected")) {
                let opacity = square.style.opacity;
                opacity -= 0.05;
            };
        }))
        createButton.disabled = true;
        resetButton.disabled = false;
        }
    }

function reset() {
    squares = document.querySelectorAll(".square");
    squares.forEach(function(square) {
        square.style.backgroundColor = "";
        square.style.borderColor = "";
        square.remove();});
    resetButton.disabled = true;
}

// - randomColor(event)
// - Get the clicked button
// - Update the selected color based on button's id
// - Disable the clicked button
// - Enable all other color buttons
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function randomColor(event) {

        // Get the currently selected button
        let selectedButton = document.querySelector(".selected");
        // Get the clicked button
        let clicked = event.target;
    
        // Update the color based on the clicked button's ID
        squareColor = getRandomColor();
    
        // Remove 'selected' class from the currently selected button and add 'unselected' class
        selectedButton.classList.remove("selected");
        selectedButton.classList.add("unselected");
    
        // Add 'selected' class to the clicked button and remove 'unselected' class
        clicked.classList.remove("unselected");
        clicked.classList.add("selected");
    
        // Enable all buttons
        let unselectedButtons = document.querySelectorAll(".unselected");
        unselectedButtons.forEach(button => button.disabled = false);
    
        // Disable the clicked button
        clicked.disabled = true;
}

function blackColor(event) {

    // Get the currently selected button
    let selectedButton = document.querySelector(".selected");
    // Get the clicked button
    let clicked = event.target;

    // Update the color based on the clicked button's ID
    squareColor = "black";

    // Remove 'selected' class from the currently selected button and add 'unselected' class
    selectedButton.classList.remove("selected");
    selectedButton.classList.add("unselected");

    // Add 'selected' class to the clicked button and remove 'unselected' class
    clicked.classList.remove("unselected");
    clicked.classList.add("selected");

    // Enable all buttons
    let unselectedButtons = document.querySelectorAll(".unselected");
    unselectedButtons.forEach(button => button.disabled = false);

    // Disable the clicked button
    clicked.disabled = true;
    console.log(getRandomColor())
}

// colorButtons.forEach(button => button.addEventListener("click", () => randomColor(event)));

blackButton.addEventListener("click", (event) => blackColor(event));
randomButton.addEventListener("click", (event) => randomColor(event))


createButton.addEventListener("click", function() {createGrid(number.value);})

resetButton.addEventListener("click", function() {reset(); createButton.disabled = false;});

