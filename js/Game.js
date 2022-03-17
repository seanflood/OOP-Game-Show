/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game{
    constructor(){
        this.missed = 0; 
        this.phrases = [
            new Phrase('Heads Up'),
            new Phrase('In a Pickle'), 
            new Phrase('Back To Square One'), 
            new Phrase('Go For Broke'), 
            new Phrase('Down For The Count')
        ]; 
        this.activePhrase = null; 
    }


    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let random = this.phrases
        return random[Math.floor(Math.random()*random.length)]
    };


    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        overlay.style.display = 'none';
        let randPhrase = new Phrase(this.getRandomPhrase().phrase)
        this.activePhrase = randPhrase; 
        randPhrase.addPhraseToDisplay();
    };


    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        let phrase = this.activePhrase.phrase.split(' ').join('')
        const showLetters = document.querySelectorAll('.letter.show').length
        if(showLetters === phrase.length){
            this.gameOver(true)
            return true
        }else{
            return false
        }
    };


    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        tries[`${this.missed}`].firstChild.src = 'file:///C:/Users/Swan/Desktop/OOP%20second%20try/images/lostHeart.png'
        this.missed += 1; 
        if(this.missed > 4){
            this.gameOver()            
        }
    };


    /**
     * Returns all button classes and phrase characters to default
     */
    resetGame(){
        phraseBlocks.innerHTML = '';
        for(let i = 0; i < button.length; i++){
            if(button[i].className === 'wrong' || button[i].className === 'chosen'){
                button[i].className = 'key'
                button[i].disabled = false; 
            }
        }
        
        for(let i = 0; i < img.length; i++){
            if(img[i].src === 'file:///C:/Users/Swan/Desktop/OOP%20second%20try/images/lostHeart.png'){
                img[i].src = 'file:///C:/Users/Swan/Desktop/OOP%20second%20try/images/liveHeart.png'
            }
        }
    }


    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        overlay.style.display = 'block';    
        if(gameWon){
            overlay.className = 'win';
            endMessage.innerText = "You win!"
            this.resetGame()     
        }else{
            overlay.className = 'lose'; 
            endMessage.innerText = "Sorry! Try again!"
            this.resetGame()
        }
    };


    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        let buttonValue = button.innerHTML; 
        button.disabled = true;
        
        if(!this.activePhrase.checkLetter(buttonValue)){
            button.className = 'wrong'; 
            this.removeLife(); 
        }else if(this.activePhrase.checkLetter(buttonValue)){
            button.className = 'chosen'; 
            this.activePhrase.showMatchedLetter(buttonValue)
            this.checkForWin()
        }
    };
}//End of Game Class