import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

export default function Wordle({ solution, getSolution }) {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys, resetData} = useWordle(solution);

    const [showModal, setShowModal] = useState(false)

    const restartGame = () => {
        getSolution()
        resetData()
        setShowModal(false)
    }

    useEffect(() => {
        window.addEventListener("keyup", handleKeyup);

        if(isCorrect){
            setTimeout(() => setShowModal(true), 2000)

            console.log('You win!')
            window.removeEventListener("keyup", handleKeyup);
        }

        if(turn === 6){
            setTimeout(() => setShowModal(true), 2000)

            console.log('unlucky, out of guesses')
            window.removeEventListener("keyup", handleKeyup);
        }

        return () => window.removeEventListener("keyup", handleKeyup);
        
    }, [turn, handleKeyup]);


    return (
        <div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keypad usedKeys={usedKeys}></Keypad>
            {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} restartGame={restartGame}/>}
        </div>
    );
}
