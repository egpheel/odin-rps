const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resultsDiv = document.querySelector(".results");
const scoreParagraph = document.querySelector(".score");

let currentRound = 1;
let maxRounds = 5;

let humanScore = 0;
let computerScore = 0;

/* rock: 0
     paper: 1
     scissors: 2

     0 beats 2
     1 beats 0
     2 beats 1
  */
rockBtn.addEventListener("click", () => {
  playRound(0);
});
paperBtn.addEventListener("click", () => {
  playRound(1);
});
scissorsBtn.addEventListener("click", () => {
  playRound(2);
});

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const roundInfo = document.createElement("div");
  const roundResultsParagraph = document.createElement("div");

  let roundResultText = "";

  roundInfo.style["padding-top"] = "10px";
  roundInfo.textContent =
    "Round " +
    currentRound +
    "! You chose " +
    nameifyChoice(humanChoice) +
    ", Computer chose " +
    nameifyChoice(computerChoice) +
    ".";

  resultsDiv.appendChild(roundInfo);

  if (humanChoice === computerChoice) {
    roundResultText = "Draw!";
  } else if (humanChoice === 0 && computerChoice === 2) {
    roundResultText =
      "You win! " +
      capitalise(nameifyChoice(humanChoice)) +
      " beats " +
      nameifyChoice(computerChoice) +
      "!";

    humanScore++;
  } else if (humanChoice === 1 && computerChoice === 0) {
    roundResultText =
      "You win! " +
      capitalise(nameifyChoice(humanChoice)) +
      " beats " +
      nameifyChoice(computerChoice) +
      "!";

    humanScore++;
  } else if (humanChoice === 2 && computerChoice === 1) {
    roundResultText =
      "You win! " +
      capitalise(nameifyChoice(humanChoice)) +
      " beats " +
      nameifyChoice(computerChoice) +
      "!";

    humanScore++;
  } else if (computerChoice === 0 && humanChoice === 2) {
    roundResultText =
      "You lose! " +
      capitalise(nameifyChoice(computerChoice)) +
      " beats " +
      nameifyChoice(humanChoice) +
      "!";

    computerScore++;
  } else if (computerChoice === 1 && humanChoice === 0) {
    roundResultText =
      "You lose! " +
      capitalise(nameifyChoice(computerChoice)) +
      " beats " +
      nameifyChoice(humanChoice) +
      "!";

    computerScore++;
  } else if (computerChoice === 2 && humanChoice === 1) {
    roundResultText =
      "You lose! " +
      capitalise(nameifyChoice(computerChoice)) +
      " beats " +
      nameifyChoice(humanChoice) +
      "!";

    computerScore++;
  }

  roundResultsParagraph.textContent = roundResultText;
  roundResultsParagraph.style["font-style"] = "italic";

  roundInfo.appendChild(roundResultsParagraph);

  console.log(
    "End of round " +
      currentRound +
      "!\nCurrent score\nYou: " +
      humanScore +
      "\nComputer: " +
      computerScore
  );

  scoreParagraph.textContent =
    "YOU " + humanScore + " : " + computerScore + " COMPUTER";

  currentRound++;
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  return choice;
}

function nameifyChoice(choice) {
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return -1;
  }
}

function capitalise(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
