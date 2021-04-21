
// computerPlay() function returns Rock, Paper or Scissors randomly
function computerPlay() {
    let x = Math.floor(Math.random() *array.length)
    return array[x];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase()
    let comp = computerSelection.toLowerCase()
    let winner = null
    if (player == comp) {
        return "This round is a tie!"
    }
    else if (player == "scissors" && comp == "paper" || player == "paper" && comp == "rock" || player == "rock" && comp == "scissors") {
        return "player" 
    } 
    return "computer"
}

function game() {
    let totalNumOfRound = 5
    let currRound = 0
    let playerScore = 0
    let compScore = 0
    let bestOf = Math.ceil(5/2)
    let winner = null
    while (playerScore != bestOf && compScore != bestOf && currRound != totalNumOfRound) {
        promptUser = prompt("Best of 5, Your score: " + playerScore + " , Computer's score: " + compScore)
        let x = playRound(promptUser, computerPlay())
        if (x == "player") {
            console.log("Player wins this round!")
            playerScore += 1
        }
        if (x == "computer") {
            console.log("Computer wins this round!")
            compScore += 1
        }
        
        currRound += 1

        console.log("fortesting playerScore: "+playerScore)
        console.log("fortesting compScore: "+compScore)
        console.log("fortesting currRound: "+currRound)


    }
    if (currRound == 5 && (playerScore != bestOf || compScore != bestOf)) {
        return "The game is a tie!"
    }
    winner = playerScore == bestOf ? "You won the game!" : "You lost the game!"
    return winner 
}

let array = ['rock', 'paper', 'scissors']
console.log(game())