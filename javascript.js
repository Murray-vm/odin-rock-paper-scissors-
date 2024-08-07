
let humanScore = 0
let computerScore = 0

const resultDiv = document.querySelector("#results")

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
    let result = ""

    humanChoice = humanChoice.toLowerCase()
    console.log(`You picked ${humanChoice}`)
    console.log(`The computer picked ${compterChoice}`)

    if (humanChoice === compterChoice) {
        result = "It's a tie!"
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
            humanScore ++
        } else {
            result = "you lose! Scissors beats Rock"
            computerScore ++
        } 
    } else if (humanChoice === "scissors") {
        if (compterChoice === "paper") {
            result = "You win! Scissors beats Paper"
            humanScore ++
        } else {
            result = "you lose! Rock beats Scissors"
            computerScore ++
        }
    }
    if (computerScore === 5) {
        result += " Game over, computer wins"
    }
    if (humanScore === 5) {
        result += " Game over, you win"
    }

    resultDiv.textContent = result + ` Player: ${humanScore} Computer: ${computerScore}`
}

const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        playRound(getComputerChoice(), e.target.value)
    })
});



