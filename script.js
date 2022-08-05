const body = document.body;
const container = document.createElement("div");
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

const cell = document.querySelectorAll(".cell");
console.log(cell);
document.addEventListener("mouseover", () => {
  cell.forEach(element => {
    console.log(element);
    changeColor(element);
  });
  
});

function changeColor(element) {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  element.style.backgroundColor = randomColor;
}
