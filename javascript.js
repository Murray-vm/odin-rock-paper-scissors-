
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3)
    if (randomInt === 0) {
        return "rock"
    } else if (randomInt === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    return prompt("Please select: rock, paper or scissors")
}

function playRound(humanChoice, compterChoice) {
    humanChoice = humanChoice.toLowerCase()
    let result = ""
    if (humanChoice === compterChoice) {
        result = "It's a tie"
    } else if (humanChoice === "rock") {
        if (compterChoice === "scissors") {
            result = "you Win! Rock beats scissors"
            humanScore ++
        } else {
            result = "You lose! Paper beats Rock"
            computerScore ++
        }
    }   else if (humanChoice === "paper") {
        if (compterChoice === "rock")
        {
            result = "You win! Paper beats Rock"
        } else {
            result = "you lose! Scissors beats Rock"
        } 
    } else if (humanChoice === "scissors") {
        if (compterChoice === "paper") {
            result = "You win! Scissors beats Paper"
            humanChoice ++
        } else {
            result = "you lose! Rock beats scissors"
            compterChoice ++
        }
    }
    console.log(result)
}

const humanChoice = getHumanChoice()
const compterChoice = getComputerChoice()



console.log(`You picked ${humanChoice}`)
console.log(`The computer picked ${compterChoice}`)

playRound(humanChoice, compterChoice)
