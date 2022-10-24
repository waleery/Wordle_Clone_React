import { useState } from "react";

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState("");
    const [guesses, setGuesses] = useState([]); //each guess is array
    const [history, setHistory] = useState(['hello', 'ninja']); //each guess is a string
    const [isCorret, setIsCorrect] = useState(false);

    //format a gess into an array of letter objects
    //eg [{key: 'a' , color: 'yellow'}]
    const formatGuess = () => {
        console.log('formating the guess - ', currentGuess)

        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((letter) => {
            return {key: letter, color: 'grey'}        
        })
        
        //find any green letteres
        formattedGuess.forEach((letter, i) => {
            if(solutionArray[i] === letter.key){
                formattedGuess[i].color = 'green'
                solutionArray[i] = null;
            }
        })

        //find any yellow colors
        formattedGuess.forEach((letter, i) => {
            if(solutionArray.includes(letter.key) && letter.color !== 'green'){
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(letter.key)] = null
            }
        }) 

        return formattedGuess
    };

    //add a new guess to the guesses state
    //update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () => {};

    //handle keyup event and track current guess
    //if user presses enter, add the new guess
    const handleKeyup = ({ key }) => {
        console.log(key);

        if(key === "Enter"){
            //only add guess if turn is less than 5
            if(turn > 5){
                console.log("You used all your guesses")
                return
            } 
            //do not allow duplicate words
            if(history.includes(currentGuess)){
                console.log("You already tried that word.")
                return
            }
            //check word is 5 chars long
            if(currentGuess.length !== 5) {
                console.log("word must be 5 chars long")
                return
            }
            const formatted = formatGuess()
            console.log(formatted)

        }


        if(key === 'Backspace'){
            setCurrentGuess((prev) => {
                return prev.slice(0,-1)
            })
            return
        }
        
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    };

    return { turn, currentGuess, guesses, isCorret, handleKeyup };
};

export default useWordle;
