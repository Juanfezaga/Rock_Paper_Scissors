const OPTIONS = ['ROCK', 'PAPER', 'SCISSORS']

function computerChoice(opt) {
    let random = Math.floor(Math.random()*(3-0)+0)
    return opt[random]
}


const container = document.querySelector('#container')
const results = document.createElement('div')
const title = document.createElement('h3')
const computerOpt = document.createElement('span')
const playerOpt = document.createElement('span')
const rounds = document.createElement('p') 

const playerRock = document.querySelector('#btn-Rock')
const playerPaper = document.querySelector('#btn-Paper')
const playerScissors = document.querySelector('#btn-Scissors')


function appendContent(){
    results.appendChild(title)
    results.appendChild(computerOpt)
    results.appendChild(playerOpt)
    container.appendChild(results)
}


function playround(playerChoice, computer){ 
    let playerC=0,computerC=0
    if(playerChoice === OPTIONS[0]){
        if(computer === OPTIONS[0]){
            title.textContent="EMPATE"
            computerOpt.textContent = `${computer}`
            playerOpt.textContent = `${playerChoice}`
            appendContent()
        }else if (computer === OPTIONS[2]){
            title.textContent="GANASTE!"
            computerOpt.textContent = `${computer}`
            playerOpt.textContent = `${playerChoice}`
            playerC++
            appendContent()
        }else if (computer === OPTIONS[1]){
            title.textContent="GANA LA COMPUTADORA"
            computerOpt.textContent = `${computer}`
            playerOpt.textContent = `${playerChoice}`
            computerC++
            appendContent()
        }
    }else if (playerChoice === OPTIONS[1]){
        if(computer === OPTIONS[1]){
            title.textContent="EMPATE"
            computerOpt.textContent = `${computer}`
            playerOpt.textContent = `${playerChoice}`
            appendContent()
        }else if (computer === OPTIONS[0]){
            title.textContent="GANASTE!"
            computerOpt.textContent = `${computer}`
            playerOpt.textContent = `${playerChoice}`
            playerC++
            appendContent()
        }else if (computer === OPTIONS[2]){
            title.textContent="GANA LA COMPUTADORA"
            computerOpt.textContent = `${computer}`
            playerOpt.textContent = `${playerChoice}`
            computerC++
            appendContent()
        }
    }else if (playerChoice === OPTIONS[2]){
        if(computer === OPTIONS[2]){
            title.textContent="EMPATE"
            computerOpt.textContent = `${computer}`
            playerOpt.textContent = `${playerChoice}`
            appendContent()
        }else if (computer === OPTIONS[1]){
            title.textContent="GANASTE!"
            computerOpt.textContent = `${computer}`
            playerOpt.textContent = `${playerChoice}`
            playerC++
            appendContent()
        }else if (computer === OPTIONS[0]){
            title.textContent="GANA LA COMPUTADORA"
            computerOpt.textContent = `${computer}`
            playerOpt.textContent = `${playerChoice}`
            computerC++
            appendContent()
        }
    }
    return [playerC,computerC]
}

playerRock.addEventListener('click', () => {
    const playerChoice = OPTIONS[0]
    let computer = computerChoice(OPTIONS)
    playround(playerChoice, computer)
    computer = computerChoice(OPTIONS)
})

playerPaper.addEventListener('click', () => {
    const playerChoice = OPTIONS[1]
    let computer = computerChoice(OPTIONS)
    playround(playerChoice, computer)
    computer = computerChoice(OPTIONS)
})

playerScissors.addEventListener('click', () => {
    const playerChoice = OPTIONS[2]
    //let acum1=0,acum2=0
    let computer = computerChoice(OPTIONS)
    playround(playerChoice, computer)
    //rounds.textContent = `Contador: ${acum1}, ${acum2}`
    //container.appendChild(rounds) 
    computer = computerChoice(OPTIONS)
})

function Points(gameRound){
    let pointPlayer = gameRound[0]
    let pointComputer = gameRound[1]
    return [pointPlayer, pointComputer]
}


container.appendChild(rounds) 


 
 





    


