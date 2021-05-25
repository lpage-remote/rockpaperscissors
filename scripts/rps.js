//--------------------------------------------------------------//
//  USER INTERACTION
//--------------------------------------------------------------//

//  - get choice from user
//  - generate random oponent
//  - comparing user and generated options
//  - output result

//--------------------------------------------------------------//
//  ROCK PAPER SCISSORS GAMEPLAY
//--------------------------------------------------------------//

//COMPUTER GENERATES A CHOICE
function computerPlay(){
	const options = ["Rock" , "Paper", "Scissors"];
	
	let choice = Math.floor((Math.random() * 3));

    document.getElementById("computer").innerHTML = options[choice].toString();

	return options[choice];
}

//CHOICES ARE COMPARED TO FIND A WINNER
function playRound(playerSelection, computerSelection){

  let whoWon;

  switch(playerSelection){

    case "Rock":
        if (computerSelection =="Scissors"){
            whoWon = "P";
            return whoWon;
        }
        else if (computerSelection == "Rock"){
            whoWon="D";
            return whoWon;
        }
        else if (computerSelection == "Paper"){
            whoWon="C";
            return whoWon;
        }
    case "Paper":
        if (computerSelection =="Scissors"){
            whoWon="C";
            return whoWon;
        }
        else if (computerSelection == "Rock"){
            whoWon = "P";
            return whoWon;
        }
        else if (computerSelection == "Paper"){
            whoWon="D";
            return whoWon;
        }
    case "Scissors":
        if (computerSelection =="Scissors"){
            whoWon="D";
            return whoWon;
        }
        else if (computerSelection == "Rock"){
            whoWon="C";
            return whoWon;
        }
        else if (computerSelection == "Paper"){
          whoWon = "P";
          return whoWon;
        }
      default:
        whoWon= "E";
        return whoWon;

  }
}

//GAME AND SCORECOUNT
function playGame(rounds){

    let roundCount=0;

    // -- add event listener
    // listen for a click
    // wait for a user to click button
    // on click:
    //          choice submitted to game
    //          score to be added
    //          round to iterate

    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');

    // const scoreCounter = document.getElementById('score_counter')
    // scoreCounter.updateValue("Player 1 wins the round!")

    rock.addEventListener('click', () => {
        roundCount+=1;
        winChecker(calcScore("Rock", roundCount));
    });

    paper.addEventListener('click', () => {
        roundCount+=1;
        winChecker(calcScore("Paper",roundCount));
    });
  
    scissors.addEventListener('click', () => {
        roundCount+=1;
        winChecker(calcScore("Scissors",roundCount));
     }); 
}

function calcScore(userinput, roundCount =0){

    let winner=(playRound(userinput, computerPlay()));

    if (winner=="P"){
      playerScore +=1;
    }

    else if (winner=="C"){
      compScore +=1;
    }
  
    //console.log(playerScore + " - " + compScore);

    document.getElementById("score").innerHTML = playerScore.toString() + " - " + compScore.toString();

    let currentScores=[playerScore, compScore];

    document.getElementById("roundCounter").innerHTML = "Round: " + roundCount;


    return currentScores;
}

function winChecker(currentScores){

    if (currentScores[0] >= 5){
        document.getElementById("gameOver").innerHTML = "Game Over! Player Wins";
        disableGame();
    }

    else if (currentScores[1] >=5){
        document.getElementById("gameOver").innerHTML = "Game Over! Computer Wins";
        disableGame();        
    } 
    else if (currentScore[0] && currentScore[1] == 5){
        document.getElementById("gameOver").innerHTML = "Game Over! Its a tie";
        disableGame();  
    }
}

function disableGame(){
    rock.removeEventListener("click");
    paper.removeEventListener("click");
    scissors.removeEventListener("click");
}



/* MAIN GAMEPLAY */
let compScore =0;
let playerScore =0;

/*PLAY 5 TIMES*/

let rounds = 5;
let firstTo = Math.floor(rounds/2)+1;

playGame(rounds);