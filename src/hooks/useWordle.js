import { useState } from "react";

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0)
    const [currenGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([])  //each guess is array
    const [history, setHistory] = useState([])  //each guess is a string
    const [isCorret, setIsCorrect] = useState(false)
 
    //format a gess into an array of letter objects
    //eg [{key: 'a' , color: 'yellow'}]
    const formatGuess = () => {

    }

    //add a new guess to the guesses state
    //update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () =>{

    }

    //handle keyup event and track current guess
    //if user presses enter, add the new guess
    const handleKeyup = () => {

    }

    return {turn, currenGuess, guesses, isCorret, handleKeyup}
};

export default useWordle;
