function getComputerChoice() {
    let rock = "rock";
    let scissors = "scissors";
    let paper = "paper";
    let randomNumber = Math.random(); 
        if (randomNumber <= 0.33) {
            return rock;
     } else if (randomNumber <= 0.66) {
            return scissors;
        } else {
            return paper;
        }           
}

function game() {
    let gameWinner = 0;
    let gameLoser = 0;
    let fiveGameWinner = "";
    
    const buttons = document.querySelectorAll('button');
    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        playerSelection = button.className;
        const computerSelection = getComputerChoice();
        //console.log(computerSelection);
        singleGameResult.textContent = (playRound(playerSelection, computerSelection));
        playerWinTotal.textContent = ("Player win total " + gameWinner);
        compWinTotal.textContent = ("Computer win total " + gameLoser);
        endGame();
    });
    });

    function playRound(playerSelection, computerSelection) {
            let tie = "Tie! you selected " + playerSelection + " and computer selected " + computerSelection + ".";
            let win = "You win! you selected " + playerSelection + " and computer selected " + computerSelection + ".";
            let lose = "You lose! you selected " + playerSelection + " and computer selected " + computerSelection + ".";
            let incorrectAmount = "Sorry! you selected " + playerSelection + ", please select rock, paper or scissors.";
            
            if (playerSelection === computerSelection) {
                return tie;
            } else if ((playerSelection === "rock") && (computerSelection === "scissors")) { 
                gameWinner++;
                return win;
            }  else if ((playerSelection === "scissors") && (computerSelection === "paper")) { 
                gameWinner++;
                return win;
            }  else if ((playerSelection === "paper") && (computerSelection === "rock")) { 
                gameWinner++;
                return win;
            }  else if ((playerSelection === "scissors") && (computerSelection === "rock")) { 
                gameLoser++;
                return lose;
            }  else if ((playerSelection === "rock") && (computerSelection === "paper")) { 
                gameLoser++;
                return lose;
            }  else if ((playerSelection === "paper") && (computerSelection === "scissors")) { 
                gameLoser++;
                return lose;
            } else {
                return incorrectAmount;
            }    
        }
    

    function endGame() { 
        if (gameWinner == 5 ) {
        fiveGameWinner = "Player!";
        } else if (gameLoser == 5 ) {
        fiveGameWinner = "Computer!";
        } else {
        return;
        }
        results.textContent = "The Winner is " + fiveGameWinner + " with 5 Wins!";   
   }

 // select container to nest divs    
const container = document.querySelector('.butContainer');
// create div for text results
const resultsDiv = document.createElement("div");
container.appendChild(resultsDiv);

const singleGameResult = document.createElement('p');
resultsDiv.appendChild(singleGameResult);

const playerWinTotal = document.createElement('p');
resultsDiv.appendChild(playerWinTotal);

const compWinTotal = document.createElement('p');
resultsDiv.appendChild(compWinTotal);

const results = document.createElement('p');
resultsDiv.appendChild(results);

}
// initiate game
game();






