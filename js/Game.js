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
            new Phrase('Knock Your Socks Off'),
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
            let letterClick = e.target.innerHTML
            game.activePhrase.checkLetter(letterClick)
            game.activePhrase.showMatchedLetter(letterClick)
        })
    }


    removeLife(){}; 

    checkForWin(){}; 

    gameOver(){}; 
}





//'Swinging For the Fences', 'Ugly Duckling', 'A Dime a Dozen', 'Knock Your Socks Off', 'Shot In the Dark'