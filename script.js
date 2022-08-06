const body = document.body;
const container = document.createElement("div");
const button = document.querySelector("#gridSize")
container.setAttribute("id", "container");
body.appendChild(container);

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement("div");
    let cellName = "cell-" + i + "-" + j;
    cell.classList.add("cell");
    cell.setAttribute("id", cellName);
    container.appendChild(cell);
  }
}

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let cellId = "cell-" + i + "-" + j;
      const cell = document.getElementById(cellId);
      cell.addEventListener("mouseover", () => {
        // var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        cell.style.backgroundColor = 'red';
      })
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
