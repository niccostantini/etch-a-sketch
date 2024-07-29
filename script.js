const container = document.querySelector(".container");
const containerWidth = container.offsetWidth; // Corrected from offsetHeight to offsetWidth
const resetButton = document.querySelector(".reset");
const number = document.querySelector(".number");
const createButton = document.querySelector(".create");
const blackButton = document.querySelector("#black");
const randomButton = document.querySelector("#random");
// const darkenButton = document.querySelector("#darken");
let colorButtons = document.querySelectorAll(".color");
let squareColor = "black";
let squares;
let squareDim;

blackButton.disabled = true;
resetButton.disabled = true;

function createGrid(n) {
    if (n > 100 || n < 0) {
        container.textContent = "!!!ERROR!!!";
        resetButton.disabled = false;
        createButton.disabled = true;
    } else if (n <= 100) {
        if (container.textContent == "!!!ERROR!!!") {
            container.textContent = "";
        }
        for (let i = 0; i < (n * n); i++) {
            let square = document.createElement("div");
            squareDim = (parseInt(containerWidth) / n) + "px";
            square.setAttribute("class", "square");
            square.style.width = squareDim;
            square.style.height = squareDim;
            container.appendChild(square);
        }
        squares = document.querySelectorAll(".square");
        squares.forEach(square => square.addEventListener("mouseover", () => {
            if (squareColor === 'random') {
                square.style.backgroundColor = getRandomColor();
            } else {
                square.style.backgroundColor = squareColor;
            }
            // darkenColor(square);
        }));
        createButton.disabled = true;
        resetButton.disabled = false;
        number.disabled = true;
    }
}

function reset() {
    squares = document.querySelectorAll(".square");
    squares.forEach(function(square) {
        square.remove();
    });
    resetButton.disabled = true;
    createButton.disabled = false;
    number.disabled = false;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateColor(event) {
    let selectedButton = document.querySelector(".selected");
    let clicked = event.target;

    if (clicked.id === "random") {
        squareColor = "random";
    } else {
        squareColor = "black";
    }

    selectedButton.classList.remove("selected");
    selectedButton.classList.add("unselected");

    clicked.classList.remove("unselected");
    clicked.classList.add("selected");

    let unselectedButtons = document.querySelectorAll(".unselected");
    unselectedButtons.forEach(button => button.disabled = false);

    clicked.disabled = true;
}

// function darkenColor(square) {
//     if (darkenButton.classList.contains("selected")) {
//         square.style.opacity += 0.1;
//     } 
// }

colorButtons.forEach(button => button.addEventListener("click", updateColor));

createButton.addEventListener("click", function() {
    createGrid(number.value);
});

resetButton.addEventListener("click", function() {
    reset();
});
