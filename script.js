const body = document.body;
const container = document.createElement("div");
body.appendChild(container);

window.addEventListener("load", () => {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const cell = document.createElement("div");
      let cellName = 'cell-' + i + '-' + j;
      cell.classList.add("cell");
      cell.classList.add(cellName);
      container.appendChild(cell);
    }
  }
});
