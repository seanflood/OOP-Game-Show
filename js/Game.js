/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



class Game{
    constructor(){
        this.missed = 0; 
        this.phrases = [
            new Phrase('Swinging For the Fences'),
            new Phrase('Ugly Duckling'), 
            new Phrase('A Dime a Dozen'), 
            new Phrase('Talk the Talk'),
            new Phrase('Shot In the Dark')
        ];
        this.activePhrase = null;  
    }

    startGame(){
        const game = new Game();
        const randomPhrase = game.getRandomPhrase();
        const phrase = new Phrase(randomPhrase.phrase);
        this.activePhrase = phrase;
        phrase.addPhraseToDisplay();
        console.log(this.activePhrase)
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase(){
        let random = this.phrases
        return random[Math.floor(Math.random()*random.length)]

    }; 

    handleInteraction(){
        
        keyRows.addEventListener('click', (e) => {
            let targ = e.target 
            let letterClick = e.target.innerHTML

            e.target.setAttribute('disabled', true)
            
            
            if (this.activePhrase.checkLetter(letterClick) === false && targ.className === 'key'){
                this.removeLife()
                targ.className = 'wrong'
                if(this.missed > 4){
                    this.gameOver(false)
                } 

            }else if(this.activePhrase.checkLetter(letterClick)){                
                this.activePhrase.showMatchedLetter(letterClick)
                targ.className = 'chosen'
                if(this.checkForWin()){
                    this.gameOver(true); 
                }
            }
        

          
    })
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        
        this.missed += 1 
        let x = this.missed;  
        document.querySelector(`#scoreboard ol :nth-child(${x})`).firstChild.src = 'images/lostHeart.png'
    };







    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        let phraseLength = this.activePhrase.phrase.split(' ').join('')
        let shownLength = document.getElementsByClassName('show letter');
        if(shownLength.length === phraseLength.length){
            return true; 
            
        }else{
            return false;
        }
    };  




    resetGame(){
        this.activePhrase = null;          

        phraseList.innerHTML = ''
        for (let i = 0; i < buttons.length; i++){
            if (buttons[i].className === 'chosen' || buttons[i].className === 'wrong' ){
                buttons[i].className = 'key'
                buttons[i].disabled = false;
            }
        }

    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        if (this.checkForWin() === true){
            this.missed = 0; 
            overlay.className = 'win'
            gameOverMessage.innerHTML = 'Winner!'
            keyRows.style.display = 'none';
            overlay.style.display = 'block';
            
            console.log('WIINNAAHH')
        }else{
            this.missed = 0; 
            overlay.className = 'lose'
            gameOverMessage.innerHTML = 'You Lost! Try again?'
            keyRows.style.display = 'none';
            overlay.style.display = 'block';
            
            console.log('LOSAHAHH')
        }
    };

}





//'Swinging For the Fences', 'Ugly Duckling', 'A Dime a Dozen', 'Knock Your Socks Off', 'Shot In the Dark'