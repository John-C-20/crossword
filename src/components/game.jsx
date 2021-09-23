import React, {useState, useEffect} from "react";
import Cell from "./cell";
// useEffect is similar to componentDidMount
// pass [] as second argument to useEffect to make it only run once

export default function Game() {
    const [grid, setGrid] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [data, setData] = useState({cells: []})
    let cells = [] 

    const getData = () => {
        fetch('crossword-puzzle.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            } 
        })
        .then(res => res.json())
        .then(data => setData(data));
    }

    useEffect(() => getData(), []);

    return(
        <div>
            <div className="grid">
                {data.cells.map(cell => <Cell cell={cell}/>)}
            </div>
        </div>
    )

}