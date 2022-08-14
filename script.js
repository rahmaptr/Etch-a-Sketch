const body = document.body;
const container = document.createElement("div");
const button = document.querySelector("#gridSize");
let gridSize = 16;
container.setAttribute("id", "container");
body.appendChild(container);

makeGrid(gridSize);

button.addEventListener("click", changeGridSize);

function makeGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      let cellName = "cell-" + i + "-" + j;
      cell.classList.add("cell");
      cell.setAttribute("id", cellName);
      container.appendChild(cell);
    }
  }
  
  container.style.gridTemplateColumns = `repeat( ${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  changeColorOnHover();
}

function changeGridSize() {
  gridSize = parseInt(window.prompt("Input custom grid size"));

  if (gridSize > 100) {
    alert("Grid can't be bigger than 100");
    gridSize = parseInt(window.prompt("Input custom grid size"));
  }
  removeAllChildNodes(container);
  makeGrid(gridSize);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function changeColorOnHover() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let cellId = "cell-" + i + "-" + j;
      const cell = document.getElementById(cellId);
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "red";
      });
    }
  }
}

// const cell = document.querySelectorAll(".cell");
// console.log(cell);

// cell.forEach(element => {
//   element.addEventListener("mouseover", () => {
//     var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     element.
//   });
// });
