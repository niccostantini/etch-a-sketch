const container = document.querySelector(".container");
const containerWidth = container.offsetHeight;
const resetButton = document.querySelector(".reset");
const number = document.querySelector(".number");
const createButton = document.querySelector(".create");
const blackButton = document.querySelector("#black");
let colorButtons = document.querySelectorAll(".color")
let squareColor = "black";
let squares;
let squareDim;

blackButton.disabled = true;
blackButton.classList.add("active");
let activeButton;
blackButton.classList

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
        squares.forEach(square => square.addEventListener("mouseover", () => {square.style.backgroundColor = squareColor; square.style.borderColor = squareColor;}))
        createButton.disabled = true;
        resetButton.disabled = false;
        }
    }

function reset() {
    squares = document.querySelectorAll(".square");
    squares.forEach(function(square) {square.style.backgroundColor = ""; square.style.borderColor = ""; square.remove();});
    resetButton.disabled = true;
}

function chooseBrush(button) {

activeButton = document.querySelector(".active")
    activeButton.disabled = false;
activeButton.classList.remove(".active");
    activeButton.classList.add(".inactive");
    button.classList.remove(".inactive");
    button.classList.add(".active");
    button.disabled = true;

}

colorButtons.forEach(b => b.addEventListener("click", chooseBrush(b)));

createButton.addEventListener("click", function() {createGrid(number.value);})

resetButton.addEventListener("click", function() {reset(); createButton.disabled = false;});

