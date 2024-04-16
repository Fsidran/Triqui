let ActiveGamer = "X";
let table = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let numbP = 0;
let winner = "";
let partyF = false;

let changeGamer = () => {
  ActiveGamer = ActiveGamer === "X" ? "O" : "X";
};

let playCase = (row, col) => {
  if (partyF === true) {
    return;
  } else {
    const cell = document.getElementById(`cell-${row}${col}`);
    if (cell.textContent === "") {
      cell.textContent = ActiveGamer;
      table[row][col] = ActiveGamer;
      numbP++;
      checkVictory();
      checkDraw();
      changeGamer();
    } else {
      alert("Esta caja ya esta ocupada! ");
    }
  }
};

let checkVictory = () => {
  // Check lines
  for (let row = 0; row < 3; row++) {
    if (
      table[row][0] !== "" &&
      table[row][0] === table[row][1] &&
      table[row][1] === table[row][2]
    ) {
      partyEnd(table[row][0]);
      document.getElementById(`cell-${row}${0}`).classList.add("case-alignee");
      document.getElementById(`cell-${row}${1}`).classList.add("case-alignee");
      document.getElementById(`cell-${row}${2}`).classList.add("case-alignee");
      return;
    }
  }

  // Check colonms
  for (let col = 0; col < 3; col++) {
    if (
      table[0][col] !== "" &&
      table[0][col] === table[1][col] &&
      table[1][col] === table[2][col]
    ) {
      partyEnd(table[0][col]);
      document.getElementById(`cell-${0}${col}`).classList.add("case-alignee");
      document.getElementById(`cell-${1}${col}`).classList.add("case-alignee");
      document.getElementById(`cell-${2}${col}`).classList.add("case-alignee");
      return;
    }
  }

  // Check diagonals
  if (
    table[0][0] !== "" &&
    table[0][0] === table[1][1] &&
    table[1][1] === table[2][2]
  ) {
    partyEnd(table[0][0]);
    document.getElementById(`cell-${0}${0}`).classList.add("case-alignee");
    document.getElementById(`cell-${1}${1}`).classList.add("case-alignee");
    document.getElementById(`cell-${2}${2}`).classList.add("case-alignee");
    return;
  }
  if (
    table[0][2] !== "" &&
    table[0][2] === table[1][1] &&
    table[1][1] === table[2][0]
  ) {
    partyEnd(table[0][2]);
    document.getElementById(`cell-${0}${2}`).classList.add("case-alignee");
    document.getElementById(`cell-${1}${1}`).classList.add("case-alignee");
    document.getElementById(`cell-${2}${0}`).classList.add("case-alignee");
    return;
  }
};

let partyEnd = (gagnant) => {
  let message = "";
  message = `El pirata ${gagnant} ganó !`;
  document.getElementById("message").textContent = message;
  partyF = true;
};

let checkDraw = () => {
  if (numbP === 9 && winner.length === 0) {
    document.getElementById("message").textContent = "Empate...";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll("td");
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      playCase(cell.dataset.row, cell.dataset.col);
    });
  });
});

let Reload = () => {
  location.reload();
};
