/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const phraseBlocks = document.getElementById('phrase').firstElementChild
var game 
let startButton = document.getElementById('btn__reset')
const letterLi = document.getElementsByClassName('hide letter')
const hiddenLetters = document.querySelectorAll('.letter.hide')
const scoreboard = document.getElementById('scoreboard').firstElementChild
const lifeBar = document.querySelector("#scoreboard ol")
const tries = lifeBar.getElementsByTagName('li')
const endMessage = document.getElementById('game-over-message')
const overlay = document.getElementById('overlay')
let keys = document.getElementsByClassName('key')
let button = document.getElementsByTagName('button')
const img = document.getElementsByTagName('img')

startButton.addEventListener('click', (e) => {
    game = new Game
    game.startGame()
    console.log(game.activePhrase) 
})


// for(let i = 0; i < keys.length; i++){
//     keys[i].addEventListener('click', (e) => {
//     console.log(keys[i])
//     game.handleInteraction(e.target)
//     })
// }




for(let i = 0; i < keys.length; i++){
    keys[i].addEventListener('click', (e) => {
    game.handleInteraction(e.target)
    })
}