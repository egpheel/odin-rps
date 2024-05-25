const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

let currentRound = 1;
let maxRounds = 5;
let winRoundsCondition = 3;

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

  console.log(
    "Round " +
      currentRound +
      "!\nYou chose " +
      nameifyChoice(humanChoice) +
      "\nComputer chose " +
      nameifyChoice(computerChoice)
  );

  if (humanChoice === computerChoice) {
    console.log("Draw!");
  } else if (humanChoice === 0 && computerChoice === 2) {
    console.log(
      "You win! " +
        capitalise(nameifyChoice(humanChoice)) +
        " beats " +
        nameifyChoice(computerChoice) +
        "!"
    );

    humanScore++;
  } else if (humanChoice === 1 && computerChoice === 0) {
    console.log(
      "You win! " +
        capitalise(nameifyChoice(humanChoice)) +
        " beats " +
        nameifyChoice(computerChoice) +
        "!"
    );

    humanScore++;
  } else if (humanChoice === 2 && computerChoice === 1) {
    console.log(
      "You win! " +
        capitalise(nameifyChoice(humanChoice)) +
        " beats " +
        nameifyChoice(computerChoice) +
        "!"
    );

    humanScore++;
  } else if (computerChoice === 0 && humanChoice === 2) {
    console.log(
      "You lose! " +
        capitalise(nameifyChoice(computerChoice)) +
        " beats " +
        nameifyChoice(humanChoice) +
        "!"
    );

    computerScore++;
  } else if (computerChoice === 1 && humanChoice === 0) {
    console.log(
      "You lose! " +
        capitalise(nameifyChoice(computerChoice)) +
        " beats " +
        nameifyChoice(humanChoice) +
        "!"
    );

    computerScore++;
  } else if (computerChoice === 2 && humanChoice === 1) {
    console.log(
      "You lose! " +
        capitalise(nameifyChoice(computerChoice)) +
        " beats " +
        nameifyChoice(humanChoice) +
        "!"
    );

    computerScore++;
  }

  console.log(
    "End of round " +
      currentRound +
      "!\nCurrent score\nYou: " +
      humanScore +
      "\nComputer: " +
      computerScore
  );

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
