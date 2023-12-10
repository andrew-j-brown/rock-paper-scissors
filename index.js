console.log("test");

let valid_guess = ["rock", "paper", "scissors"];

let player_score = 0;
let computer_score = 0;

function game_loop() {
  let player_guess = prompt("Rock, Paper, or Scissors?");
  if (valid_guess.includes(player_guess.toLowerCase())) {
    console.log(player_guess + " was a good guess");

    let computer_guess = valid_guess[Math.floor(Math.random() * valid_guess.length)]
    console.log(computer_guess + " was guessed by the computer");

    if (player_guess == computer_guess) {
      console.log("No points this round!")
    }
    else if (player_guess == "rock") {
      if (computer_guess == "scissors") {
        player_score++;
        console.log("You won that round!");
        console.log("The current score is: Player - " + player_score + " | Computer - " + computer_score);
      } else {
        computer_score++;
        console.log("They won that round.");
        console.log("The current score is: Player - " + player_score + " | Computer - " + computer_score);
      }
    }
    else if (player_guess == "scissors") {
      if (computer_guess == "paper") {
        player_score++;
        console.log("You won that round!");
        console.log("The current score is: Player - " + player_score + " | Computer - " + computer_score);
      } else {
        computer_score++;
        console.log("They won that round.");
        console.log("The current score is: Player - " + player_score + " | Computer - " + computer_score);
      }
    }
    else if (player_guess == "paper") {
      if (computer_guess == "rock") {
        player_score++;
        console.log("You won that round!");
        console.log("The current score is: Player - " + player_score + " | Computer - " + computer_score);
      } else {
        computer_score++;
        console.log("They won that round.");
        console.log("The current score is: Player - " + player_score + " | Computer - " + computer_score);
      }
    }

    if (player_score == 3) {
      console.log("You win! Good job.");
    } else if (computer_score == 3) {
      console.log("You lost. :(");
    } else {
      game_loop();
    }
  } else {
    console.log(player_guess + " is not a valid guess. You may choose from Rock, Paper, or Scissors.");
    game_loop();
  }

};

game_loop();
