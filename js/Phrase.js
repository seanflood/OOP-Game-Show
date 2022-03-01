/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase;
    }

    /**
     *Adds letter placeholders to the display when the game starts.
     */
    addPhraseToDisplay(){
        
        
        for(let i = 0; i < this.phrase.length; i++){
            let li = document.createElement('li') 
            if (this.phrase[i] === ' '){
                li.className = "space"
                li.innerHTML = ' '
                phraseList.appendChild(li);
            }else{
                li.className = `hide letter ${this.phrase[i]}`
                li.innerHTML = `${this.phrase[i]}`
                phraseList.appendChild(li); 
            }
        }
    };


    /**
     * Checks to see if the letter selected by the player matches a letter in the phrase.
     */
    checkLetter(letter){
        let splitPhrase = this.phrase.toLowerCase().split('')
        // console.log(x)
        if(splitPhrase.includes(letter)){
            console.log('yep')
            return true;
        }else{
            console.log('nope')
            return false;

        }
    
    }


    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        let matchedLetter = document.getElementsByClassName(`hide letter`)
        for (let i = 0; i < matchedLetter.length; i++){
            if(letter === matchedLetter[i].innerHTML.toLowerCase()){
                matchedLetter[i].className = `show letter ${letter}`
            }
        }
    };
        

    



















}//class end


