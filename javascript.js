console.log("hello world!")

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3)
    console.log(randomInt)
    if (randomInt === 0) {
        return "rock"
    } else if (randomInt === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

console.log(getComputerChoice())