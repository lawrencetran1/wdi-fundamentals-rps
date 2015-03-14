////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // If a move is given, your expression should evaluate to that move.
    // If move is not specified / is null, your expression should run getInput()
    var inputP = getInput();
    if (inputP === "") {
        return getInput();
    }
    return inputP;
}

function getComputerMove(move) {
    // If a move is given, your expression should evaluate to that move.
    // If move is not specified / is null, your expression should run randomPlay()
    var inputC = randomPlay();
    if (inputC === "") {
        return randomPlay();
    }
    return inputC;
}

function getWinner(playerMove,computerMove) {
    // This function should either give us back 'player', 'computer', or 'tie'.
    // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
    // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.
    if (playerMove === "rock" && computerMove === "rock") {
        return "tie";
    }
    else if (playerMove === "rock" && computerMove === "scissors") {
        return "player";
    }
    else if (playerMove === "rock" && computerMove === "paper") {
        return "computer";
    }
    else if (playerMove === "paper" && computerMove === "paper") {
        return "tie";
    }
    else if (playerMove === "paper" && computerMove === "scissors") {
        return "computer";
    }
    else if (playerMove === "paper" && computerMove === "rock") {
        return "player";
    }
    else if (playerMove === "scissors" && computerMove === "scissors") {
        return "tie";
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        return "player";
    }
    else if (playerMove === "scissors" && computerMove === "rock") {
        return "computer";
    }
    else {
        return null;
    }
}

function playTo(x) {
    console.log("Let's play Rock Paper Scissors");
    console.log("First one to " + x + " wins!");
    var playerWins = 0;
    var computerWins = 0;
    var tiedGames = 0;
    // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === "player") {
            playerWins += 1;
        }
        else if (winner === "computer") {
            computerWins += 1;
        }
        else if (winner === "tie") {
            tiedGames += 1;
        }
        else {
            winner = null;
        }
        console.log("Player chose " + playerMove + " while Computer chose " + computerMove + ".");
        if (winner === "computer") {
            console.log("Computer wins");
        }
        else if (winner === "player") {
            console.log("Player wins")
        }
        else if (winner === "tie") {
            console.log("Tie game")
        }
        else {
            console.log("Invalid entry")
        }
        console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    }
    // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    return [playerWins, computerWins];
}
playTo(10);