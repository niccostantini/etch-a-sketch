const container = document.querySelector(".container");
const squareSide = 31.04;
const resetButton = document.querySelector(".reset");
const number = document.querySelector(".number");
const createButton = document.querySelector(".create");
let squares;

resetButton.disabled = true;

function createGrid (n) {

    if (n > 100) {container.textContent = "ERROR"}
    else if (n <= 100) {
        if (container.textContent == "ERROR") {container.textContent = ""}
        for(i = 0; i < (n*n); i++){
            let square = document.createElement("div");
            square.setAttribute("class", "square");
            container.appendChild(square);
        }
        let containerWidth = (squareSide * n * 1.02)+"px";
        container.style.width = containerWidth;
        squares = document.querySelectorAll(".square");
        squares.forEach(square => square.addEventListener("mouseover", () => {square.style.backgroundColor = "black"}))
        createButton.disabled = true;
        resetButton.disabled = false;
        }
    }

function reset() {
    squares = document.querySelectorAll(".square");
    squares.forEach(function(square) {square.style.backgroundColor = ""; square.remove();});
    resetButton.disabled = true;
}

createButton.addEventListener("click", function() {createGrid(number.value);})

resetButton.addEventListener("click", function() {reset(); createButton.disabled = false;});

