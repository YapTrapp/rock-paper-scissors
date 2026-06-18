    // ROCK - PAPER - SCISSORS GAME


    // Declare game elements 
    const choices = ["rock", "paper", "scissors"];
    const playerDisplay = document.getElementById("playerDisplay");
    const computerDisplay = document.getElementById("computerDisplay");
    const resultDisplay = document.getElementById("resultDisplay");
    const playerScoreDisplay = document.getElementById("playerScoreDisplay");
    const computerScoreDisplay = document.getElementById("computerScoreDisplay");
    let playerScore = 0;
    let computerScore = 0;

    // Need function playGame to accept argument of player's choice
    function playGame(playerChoice){

        // Make computer choose an option each time player chooses an option
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        // Make result to be displayed later
        let result = "";
        // If the player's choice matches the computer's choice, make the result a tie
        if(playerChoice === computerChoice){
            result = "IT'S A DRAW!!";
        }
        else{
            // Make a switch with a case for each potential player choice
            switch(playerChoice){
                case "rock":
                    // If the player's choice is rock but the computer's choice is paper, you win.
                    // Otherwise you lose
                   result = (computerChoice === "scissors") ? "FATALITY!" : "WASTED...";
                   break;
                case "paper":
                    // If the player's choice is paper but the computer's choice is rock, you win.
                    // Otherwise you lose
                   result = (computerChoice === "rock") ? "FATALITY!" : "WASTED...";
                   break;
                case "scissors":
                    // If the player's choice is scissors but the computer's choice is paper, you win.
                    // Otherwise you lose
                   result = (computerChoice === "paper") ? "FATALITY!" : "WASTED...";
                   break;
            }
        }
        // Make player display and computer display display respective choices
        playerDisplay.textContent = `PLAYER: ${playerChoice}`;
        computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
        // Make result display display the result
        resultDisplay.textContent = result;

        // Want to change text color depending on win conditions

        // Remove text color classes before the switch or the text will stay red on every condition
        resultDisplay.classList.remove("greenText", "redText");

        // Make switch to change text color
        switch(result){
            // If player wins, turn text green
            case "FATALITY!":
                resultDisplay.classList.add("greenText");
                // Increase player score when player wins
                playerScore++;
                // Update player score display to show player score
                playerScoreDisplay.textContent = playerScore;
                break;
            // If player loses, turn text red
            case "WASTED...":
                resultDisplay.classList.add("redText");
                // Increase computer score when computer wins
                computerScore++;
                // Update computer score display to show computer score
                computerScoreDisplay.textContent = computerScore;
                break;
        }

    }