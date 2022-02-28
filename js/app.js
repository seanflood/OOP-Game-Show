/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const startButton = document.getElementById('btn__reset')
const keyButtons = document.getElementsByClassName('key')
const keyRows = document.getElementById('qwerty')
const phraseList = document.getElementById('phrase').firstElementChild;
const overlay = document.getElementById("overlay")




startButton.addEventListener('click',  (e) => {
        if(e.target === startButton){
          keyRows.style.display = 'block';
          overlay.style.display = 'none'  
          console.log('shithouse');
        }
        
        
    })


const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);