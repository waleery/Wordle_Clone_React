import React from "react";

export default function Modal({ isCorrect, turn, solution, restartGame }) {
    return (
        <div className="modal">
            {isCorrect && (
                <div>
                    <h1>You Win!</h1>
                    <p className="solution">Solution was: {solution} </p>
                    <p>You found the solution in {turn} guesses</p>
                    <button className="getSolution" onClick={() => restartGame()}>New game</button>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>Nevermind!</h1>
                    <p className="solution">Solution was: {solution} </p>
                    <p>Better luck next time :)</p>
                    <button className="getSolution" onClick={() => restartGame()}>New game</button>
                </div>
            )}
        </div>
    );
}
