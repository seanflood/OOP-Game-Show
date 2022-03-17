/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase; 
    }


    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        let currentPhrase = this.phrase
        
        for(let i = 0; i < currentPhrase.length; i++){
            let letterSquare = document.createElement('li')
            letterSquare.innerHTML = currentPhrase[i]

            if(letterSquare.innerHTML === ' '){
                letterSquare.className = `space`        
                phraseBlocks.appendChild(letterSquare)
            }else{
                letterSquare.className = `hide letter ${currentPhrase[i]}`
                phraseBlocks.appendChild(letterSquare) 
            }
        }
    };


    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        if(this.phrase.toLowerCase().includes(letter) && letter !== ''){
            return true
        }else{
            return false
        }
    };


    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
     showMatchedLetter(letter) {
        let matchedLetter = document.getElementById('phrase').firstElementChild.children
        for (let i = 0; i < matchedLetter.length; i++){
            if(letter === matchedLetter[i].innerText.toLowerCase()){
                matchedLetter[i].className = `show letter ${letter.toLowerCase()}`
            }
        }
    };
}//End of Phrase Class
