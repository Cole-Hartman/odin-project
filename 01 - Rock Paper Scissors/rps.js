let userScore = 0;
let computerScore = 0;
let outputText = document.getElementById("output-text");

const getComputerChoice = function () {
  let randomChoice = Math.floor(Math.random() * 3); //Returns 0,1,2
  let choices = ["rock", "paper", "scissors"];
  return choices[randomChoice].toLowerCase();
};

const getUserChoice = function () {
  return new Promise((resolve) => {
    const rockButton = document.getElementById("rock-button");
    const paperButton = document.getElementById("paper-button");
    const scissorsButton = document.getElementById("scissors-button");

    rockButton.addEventListener("click", () => resolve("rock"));
    paperButton.addEventListener("click", () => resolve("paper"));
    scissorsButton.addEventListener("click", () => resolve("scissors"));
  });
};

const playRound = function (userChoice, computerChoice) {
  //Check for winner

  outputText.classList.remove("hidden");
  if (userChoice == computerChoice) {
    outputText.textContent =
      `${userChoice} vs ${computerChoice}!` + " It's a tie!";
  } else if (
    (userChoice == "rock" && computerChoice == "scissors") ||
    (userChoice == "paper" && computerChoice == "rock") ||
    (userChoice == "scissors" && computerChoice == "paper")
  ) {
    userScore++;
    outputText.textContent =
      `${userChoice} beats ${computerChoice}!` + " You win this round!";
  } else {
    computerScore++;
    outputText.textContent =
      `${userChoice} loses to ${computerChoice}!` + " Computer won this round";
  }
};

const playGame = async function () {
  for (i = 0; i <= 4; i++) {
    let userChoice = await getUserChoice();
    let computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
  }

  if (userScore > computerScore) {
    outputText.textContent = "You win the game!";
    outputText.classList.remove("bg-gray-400");
    outputText.classList.add("bg-green-200");
  } else if (userScore < computerScore) {
    outputText.textContent = "Computer wins the game";
    outputText.classList.remove("bg-gray-400");
    outputText.classList.add("bg-red-300");
  } else {
    outputText.textContent = "It's a tie :O";
    outputText.classList.remove("bg-gray-400");
    outputText.classList.add("bg-yellow-300");
  }
};

// Start Button
const playButton = document.getElementById("play-button");
const userInputDiv = document.getElementById("user-input-div");

playButton.addEventListener("click", function () {
  playButton.style.display = "none";
  userInputDiv.classList.remove("hidden");
  setTimeout(playGame, 0);
});
