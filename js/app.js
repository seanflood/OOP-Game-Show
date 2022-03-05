/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const startButton = document.getElementById('btn__reset')
const keyButtons = document.getElementsByClassName('key')
const keyChildren = document.getElementsByClassName('keyrow')
const keyRows = document.getElementById('qwerty')
const phraseList = document.getElementById('phrase').firstElementChild;
const overlay = document.getElementById("overlay")
const singleButtons = document.querySelectorAll('button.key')
const hearts = document.getElementsByClassName('tries');
const scoreBoard = document.getElementById('scoreboard').firstElementChild; 
const gameOverMessage = document.getElementById('game-over-message')
const correctButton = document.querySelectorAll('button.chosen')
const wrongButton = document.querySelectorAll('button.wrong')
const buttons = document.querySelectorAll('button')


 




startButton.addEventListener('click',  function () {
    
    keyRows.style.display = 'block';
    overlay.style.display = 'none';
    game = new Game();
    game.startGame();
    game.handleInteraction()
    

  })





  


