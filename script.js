    // ROCK - PAPER - SCISSORS GAME


    // Declare game elements 
    const choices = ["rock", "paper", "scissors"];
    const playerDisplay = document.getElementById("playerDisplay");
    const computerDisplay = document.getElementById("computerDisplay");
    const resultDisplay = document.getElementById("resultDisplay")

    // Need function playGame to accept argument of player's choice
    function playGame(playerChoice){

        // Make computer choose an option each time player chooses an option
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        console.log(computerChoice);
        let result = "";

        if(playerChoice === computerChoice){
            result = "IT'S A DRAW!!";
        }
        else{
            switch(playerChoice){
                case "rock":
                   result = (computerChoice === "scissors") ? "FATALITY!" : "WASTED...";
                   break;
                case "paper":
                   result = (computerChoice === "rock") ? "FATALITY!" : "WASTED...";
                   break;
                case "scissors":
                   result = (computerChoice === "paper") ? "FATALITY!" : "WASTED...";
                   break;
            }
        }

        playerDisplay.textContent = `PLAYER: ${playerChoice}`;
        computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
        resultDisplay.textContent = result;
    }