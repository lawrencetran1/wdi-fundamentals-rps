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
<<<<<<< HEAD
    // If a move is given, your expression should evaluate to that move.
    // If move is not specified / is null, your expression should run getInput()
    var inputP = getInput();
    if (inputP == "") {
        return getInput();
    }
    return inputP;
}

function getComputerMove(move) {
    // If a move is given, your expression should evaluate to that move.
    // If move is not specified / is null, your expression should run randomPlay()
    var inputC = randomPlay();
    if (inputC == "") {
        return randomPlay();
    }
    return inputC;
}

function getWinner(playerMove,computerMove) {
    // This function should either give us back 'player', 'computer', or 'tie'.
    // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
    // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.
    if (playerMove == "rock" && computerMove == "rock") {
        return "tie";
    }
    else if (playerMove == "rock" && computerMove == "scissors") {
        return "player";
    }
    else if (playerMove == "rock" && computerMove == "paper") {
        return "computer";
    }
    else if (playerMove == "paper" && computerMove == "paper") {
        return "tie";
    }
    else if (playerMove == "paper" && computerMove == "scissors") {
        return "computer";
    }
    else if (playerMove = "paper" && computerMove == "rock") {
        return "player";
    }
    else if (playerMove == "scissors" && computerMove == "scissors") {
        return "tie";
    }
    else if (playerMove == "scissors" && computerMove == "paper") {
        return "player";
    }
    else if (playerMove == "scissors" && computerMove == "rock") {
        return "computer";
    }
    else {
        return null;
    }
=======
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
>>>>>>> 7a8ad0d69455a4d0a56f92f78c2a3655b4cc9b43
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
<<<<<<< HEAD
    var tiedGames = 0;
    // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner == "player") {
            playerWins += 1;
        }
        else if (winner == "computer") {
            computerWins += 1;
        }
        else if (winner == "tie") {
            tiedGames += 1;
        }
        else {
            winner = null;
        }
        console.log("Player chose " + playerMove + " while Computer chose " + computerMove + ".");
        if (winner == "computer") {
            console.log("Computer wins");
        }
        else if (winner == "player") {
            console.log("Player wins")
        }
        else if (winner == "tie") {
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
=======
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
>>>>>>> 7a8ad0d69455a4d0a56f92f78c2a3655b4cc9b43
    return [playerWins, computerWins];
}

function playTo(x) {
    console.log("Let's play Rock Paper Scissors");
    console.log("First one to " + x + " wins!");
    var playerWins = 0;
    var computerWins = 0;
    var tiedGames = 0;
    // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
    while (playerWins < x && computerWins < x) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner == "player") {
            playerWins += 1;
        }
        else if (winner == "computer") {
            computerWins += 1;
        }
        else if (winner == "tie") {
            tiedGames += 1;
        }
        else {
            winner = null;
        }
        console.log("Player chose " + playerMove + " while Computer chose " + computerMove + ".");
        if (winner == "computer") {
            console.log("Computer wins");
        }
        else if (winner == "player") {
            console.log("Player wins")
        }
        else if (winner == "tie") {
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