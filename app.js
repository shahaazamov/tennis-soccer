const btnPlayer1 = document.querySelector('.btn-payer1')
const btnPlayer2 = document.querySelector('.btn-payer2')
const reset = document.querySelector('.btn-reset')
const player1 = document.querySelector('.player-1') 
const player2 = document.querySelector('.player-2') 
const levelChange = document.querySelector('.level-change')

let score1 = 0
let score2 = 0
let gameLevel = +levelChange.value
let gameOver = false

btnPlayer1.addEventListener('click' , () =>{
    if(!gameOver){
        score1++
        player1.textContent = score1
        if(score1 == gameLevel){
            gameOver = true
            player1.style.color = 'green'
            player2.style.color = 'red'
        }
    }
})

btnPlayer2.addEventListener('click' , () =>{
    if(!gameOver){
        score2++
        player2.textContent = score2
        if(score2 == gameLevel){
            gameOver = true
            player1.style.color = 'red'
            player2.style.color = 'green'
        }
    }
})
reset.addEventListener('click', resetGame)


levelChange.addEventListener('change', () =>{
    gameLevel = +levelChange.value
    resetGame()
})

function resetGame(){
    let score1 = 0
    let score2 = 0
    let gameOver = false
    player1.textContent = 0
    player2.textContent = 0
    player1.style = 'white'
    player2.style = 'white'
}