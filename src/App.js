import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import jsonData from "./data/db.json";

function App() {
    const [solution, setSolution] = useState(null);

    // to run the server -> json-server ./data/db.json --port 3001
    const getSolutionFromJSONServer = () => {
        fetch("http://localhost:3001/solutions")
            .then((res) => res.json())
            .then((json) => {
                //random int between 0 and 14
                const randomSolution =
                    json[Math.floor(Math.random() * json.length)];
                setSolution(randomSolution.word);
            });
    };

    const getSolutionFromJSONSFile = () => {
        //random int between 0 and 14
        const randomSolution = jsonData.solutions[Math.floor(Math.random() * jsonData.solutions.length)];
        setSolution(randomSolution.word);
    };

    useEffect(() => {

        //change function to use JSONServer
        getSolutionFromJSONSFile();
    }, []);

    return (
        <div className="App">
            <h1>Wordle</h1>
            {solution && (
                <Wordle
                    solution={solution}
                    getSolution={getSolutionFromJSONSFile}
                />
            )}
        </div>
    );
}

export default App;
