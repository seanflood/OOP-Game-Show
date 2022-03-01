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
        let phrase = game.getRandomPhrase()
        
        for(let i = 0; i < phrase.phrase.length; i++){
            let li = document.createElement('li') 
            if (phrase.phrase[i] === ' '){
                li.className = "space"
                li.innerHTML = ' '
                phraseList.appendChild(li);
            }else{
                li.className = `hide letter ${phrase.phrase[i]}`
                li.innerHTML = `${phrase.phrase[i]}`
                phraseList.appendChild(li); 
            }
        }
    };


    /**
     * Checks to see if the letter selected by the player matches a letter in the phrase.
     */
    checkLetter(letter){
        let x = this.phrase.toLowerCase().split('')
        console.log(x)
        if(x.includes(letter)){
            return true;
        }else{
            return false;
        }
    
    }


    /**
     *
     * Reveals the letter(s) on the board that matches the player's selection.
     */
     showMatchedLetter(){};



















}//class end


