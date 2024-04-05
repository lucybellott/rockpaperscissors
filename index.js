//code

function randomChoice() {
    
    let choice = Math.floor(Math.random() * 3)
    // console.log(choice)
    
    if(choice === 0){
        return "rock"
    }
    else if(choice === 1){
        return "paper"
    }
    else {
        return "scissors"
    }
}

function winner (player1, player2) {

    if(player1 === "rock" && player2 === "scissors" || player1 === "paper" && player2 === "rock"  || player1 === "scissors" && player2 === "paper"){
            return "Player 1 wins!"
        }
        else if (player1 === player2){
            return "it's a tie :("
        }
        else {
            return "Player 2 wins!"
        }

}

let player1 = randomChoice()
let player2 = randomChoice()
let result = winner(player1, player2)


//console.log(randomChoice())
console.log("player 1: ", player1)
console.log("player 2: ", player2)
console.log(result)

