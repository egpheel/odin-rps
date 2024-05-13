function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  return choice;
}

function getHumanChoice() {
  let choice = prompt("Please type rock, paper or scissors:").toLowerCase();
  let choiceValue = -1;
  console.log(choice);

  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt("Try again! Please type rock, paper or scissors:");
  }

  switch (choice.toLowerCase()) {
    case "rock":
      return (choiceValue = 0);
    case "paper":
      return (choiceValue = 1);
    case "scissors":
      return (choiceValue = 2);
    default:
      return (choiceValue = -1);
  }
}

console.log(getHumanChoice());
