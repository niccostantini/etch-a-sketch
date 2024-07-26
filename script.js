const container = document.querySelector(".container");
const squareSide = 31.04;

function createGrid (n) {
    for(i = 0; i < (n*n); i++){
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        container.appendChild(square);
    }


    let containerWidth = (squareSide * n * 1.02)+"px";

    container.style.width = containerWidth;
}