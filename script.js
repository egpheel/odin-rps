let currentRound = 1;
let maxRounds = 5;
let winRoundsCondition = 3;

let humanScore = 0;
let computerScore = 0;

function playGame(rounds) {
  for (i = 0; i < rounds; i++) {
    if (
      humanScore >= winRoundsCondition ||
      computerScore >= winRoundsCondition
    ) {
      break;
    }

    playRound();
  }

  console.log("GAME OVER");
  console.log("YOU: " + humanScore + "\nCOMPUTER: " + computerScore);

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry, you lost this time!");
  } else {
    console.log("It's a draw!");
  }
}

function playRound() {
  console.log();

  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  /* rock: 0
     paper: 1
     scissors: 2

     0 beats 2
     1 beats 0
     2 beats 1
  */

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

function getHumanChoice() {
  let choice = prompt("Please type rock, paper or scissors:").toLowerCase();

  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt("Try again! Please type rock, paper or scissors:");
  }

  switch (choice.toLowerCase()) {
    case "rock":
      return 0;
    case "paper":
      return 1;
    case "scissors":
      return 2;
    default:
      return -1;
  }
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

playGame(maxRounds);
