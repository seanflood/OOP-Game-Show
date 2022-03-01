/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game 
const startButton = document.getElementById('btn__reset')
const keyButtons = document.getElementsByClassName('key')
const keyIsh = document.getElementsByClassName('keyrow')
const keyRows = document.getElementById('qwerty')
const phraseList = document.getElementById('phrase').firstElementChild;
const overlay = document.getElementById("overlay")
const singleButtons = document.querySelectorAll('button.key')






//Working start button listener

// startButton.addEventListener('click',  (e) => {
//         if(e.target === startButton){
//           keyRows.style.display = 'block';
//           overlay.style.display = 'none'  
//           console.log('shithouse');
//         }
//     })


startButton.addEventListener('click',  function () {
    keyRows.style.display = 'block';
    overlay.style.display = 'none';
    game = new Game();
    game.startGame();
    game.handleInteraction()
    

  })





  


