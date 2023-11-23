import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {
    const [solution, setSolution] = useState(null);

    const getSolution = () => {
        fetch("http://localhost:3001/solutions")
            .then((res) => res.json())
            .then((json) => {
                //random int between 0 and 14

                const randomSolution =
                    json[Math.floor(Math.random() * json.length)];
                setSolution(randomSolution.word);
            });
    }

    useEffect(() => {
        getSolution()
    }, []);

    console.log(solution);

    return (
        <div className="App">
            <h1>Wordle</h1>
            {solution && <Wordle solution={solution} getSolution={getSolution}/>}
        </div>
    );
}

export default App;
