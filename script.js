    // ROCK - PAPER - SCISSORS GAME


    // Declare game elements 
    const rock = document.getElementById("rock");
    rock.addEventListener("click", () => playGame("rock"));
    const paper = document.getElementById("paper");
    paper.addEventListener("click", () => playGame("paper"));
    const scissors = document.getElementById("scissors");
    scissors.addEventListener("click", () => playGame("scissors"));
    const playerDisplay = document.getElementById("playerDisplay");
    const computerDisplay = document.getElementById("computerDisplay");
    const resultDisplay = document.getElementById("resultDisplay");
    const playerScoreDisplay = document.getElementById("playerScoreDisplay");
    const computerScoreDisplay = document.getElementById("computerScoreDisplay");
    let playerScore = 0;
    let computerScore = 0;
    let gameOver = false;

    
    function playGame(playerChoice){

        if(gameOver) return;

        // Make computer choose an option each time player chooses an option
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        
        let result = "";
        
        if(playerChoice === computerChoice){
            result = "IT'S A DRAW!!";
        }
        else{
            // Make a switch with a case for each potential player choice
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

        // Want to change text color depending on win conditions
        // Remove text color classes before the switch or the text will stay red on every condition
        resultDisplay.classList.remove("greenText", "redText");

        switch(result){
            case "FATALITY!":
                resultDisplay.classList.add("greenText");
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                break;
            
            case "WASTED...":
                resultDisplay.classList.add("redText");
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                break;
        }

        if(playerScore === 5 || computerScore === 5){
            resultDisplay.textContent = (playerScore === 5) ? "VICTORY!" : "FOILED AGAIN...";
            gameOver = true;
        }

    }