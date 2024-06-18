//Create a Gameboard object using a factory function and the module pattern.
//Store the board arr inside the Gameboard object
const Gameboard = (function () {
  let turn = document.querySelector("#turn");
  let winner = "";
  const grid = document.querySelectorAll("#grid");
  let totalCount = 0;
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  turn.textContent = "PLAYER 1 🐹";

  grid.forEach((box) => {
    box.addEventListener("mouseover", function () {
      box.classList.add("bg-pink-300");
    });
    box.addEventListener("mouseout", function () {
      box.classList.remove("bg-pink-300");
    });
  });

  const handleTurn = function (event) {
    const box = event.target;
    if (turn.textContent === "PLAYER 1 🐹") {
      box.textContent = "X";
      checkWin();
      if (turn.textContent == "PLAYER 1 WINS 🐹") {
        handleWin();
      } else if (turn.textContent == "IT'S A TIE") {
        handleWin();
      } else {
        turn.textContent = "PLAYER 2 🐰";
      }
    } else if (turn.textContent === "PLAYER 2 🐰") {
      box.textContent = "O";
      checkWin();
      if (turn.textContent == "PLAYER 2 WINS 🐰") {
        handleWin();
      } else if (turn.textContent == "IT'S A TIE") {
        handleWin();
      } else {
        turn.textContent = "PLAYER 1 🐹";
      }
    }

    box.removeEventListener("click", handleTurn);
  };

  const playGame = function () {
    turn.textContent = "PLAYER 1 🐹";
    winner = "";
    totalCount = 0;

    //Clear Board
    grid.forEach((box) => {
      box.textContent = "";
    });

    //Add event listeners
    grid.forEach((box) => {
      box.addEventListener("click", handleTurn);
    });
  };

  // Method to check for a win
  const checkWin = function () {
    let xCount = 0;
    let oCount = 0;
    totalCount += 1;
    console.log(totalCount);

    //After each click, loop through entire grid and see if the combo matches anywhere
    for (let row = 0; row < 8; row++) {
      for (let num = 0; num < 3; num++) {
        if (grid[winCombos[row][num]].textContent === "X") {
          xCount += 1;
          if (xCount == 3) {
            //Found win
            winner = "X";
            turn.textContent = "PLAYER 1 WINS 🐹";
            break;
          }
        } else if (grid[winCombos[row][num]].textContent === "O") {
          oCount += 1;
          if (oCount == 3) {
            //Found win
            winner = "O";
            turn.textContent = "PLAYER 2 WINS 🐰";
            break;
          }
        }
      }
      xCount = 0;
      oCount = 0;
    }
    if (winner == "" && totalCount == 9) {
      turn.textContent = "IT'S A TIE";
    }
  };

  const handleWin = function () {
    grid.forEach((box) => {
      box.removeEventListener("click", handleTurn);
    });
    const restart = document.querySelector("#restart");
    restart.classList.remove("hidden");
    restart.addEventListener("click", function () {
      restart.classList.add("hidden");
      playGame();
    });
  };

  return { playGame };
})();

Gameboard.playGame();
