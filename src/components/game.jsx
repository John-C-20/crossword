import React, {useState, useEffect} from "react";
import Cell from "./cell";
import Clues from "./clues";
// useEffect is similar to componentDidMount
// pass [] as second argument to useEffect to make it only run once

export default function Game() {
    const [cells, setCells] = useState([])
    const [clues, setClues] = useState([])
    const [words, setWords] = useState([])
    const [count, setCount] = useState(0)

    const getData = () => {
        fetch('crossword-puzzle.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            } 
        })
        .then(res => res.json())
        .then(data => {
            data.words.forEach(word => {
                const idx = convertWordToCells(word)
                // add index of all related squares to word object
                word.cells = idx
                for (const i of idx) {
                // add word object to all related indices
                !data.cells[i].word ? data.cells[i].word = [word] : data.cells[i].word.push(word)
            }
        })
        setClues(data.clues)
        setCells(data.cells)
        setWords(data.words)
        });
    }

    useEffect(() => getData(), []);

    const cellToClue = (number) => { 
        const clue = clues.find(clue => clue.number === number)
        // console.log("cellToClue", clue)
        return clue;
    }

    const clueToWord = (wordId) => {
        const word = words.find(obj => obj.id == wordId)
        // console.log("clueToWord", word)
        return word; 
    }

    const cellToWords = (x,y) => {
        return cells[convertXYtoIdx(x,y)].word
    }
    
    //converts x,y grid coordinates to an indice in cells array
    const convertXYtoIdx = (x,y) => 15*(y-1)+(x-1);
    
    const convertWordToCells = word => {
        let x = word.x.split("-").map(num => Number(num))
        let y = word.y.split("-").map(num => Number(num))
        
        const idx = []
        let i,j; 
        if (x.length > 1) {
            [i, j]= [x[0], x[1]]
            while (i <= j) {
                idx.push(convertXYtoIdx(i, y))
                i++
            }
        } else {
            [i,j] = [y[0], y[1]]
            while (i <= j) {
                idx.push(convertXYtoIdx(x, i))
                i++
            }
        }
        return idx;
    }
    
    const fillCell = (x,y, value) => {
        cells[convertXYtoIdx(x,y)].value = value
    }
    
    // check if every cell of word is filled and correct
    const checkCells = word => {
        const str = [] 
        word.cells.forEach(i => {
            if (!cells[i].value) cells[i].value = " ";
            str.push(cells[i].value)
        })
        
        if (str.join("") == word.solution) {
            console.log("correct!", word.solution)
            return true;
        } else {
            console.log("not correct yet, currently: ", str.join(""))
            return false
        };
    }

    const toggleSolved = (word, solved,x,y) => {
        let newCells = [...cells]
        const idx = convertXYtoIdx(x,y)
        console.log("word.cells", word.cells)
        word.cells.forEach(i => {
            // console.log(`i:${i}, newCells[i]:${newCells[i]}`)
            if (newCells[i].solved) {
                if (i == idx) {
                    newCells[i].solved = solved;
                } else {
                    if(!( checkCells(newCells[i].word[0]) || checkCells(newCells[i].word[1]))) {
                        newCells[i].solved = solved
                    }
                }
            } else {
                newCells[i].solved = solved;
            }
        })
        setCells(newCells)
    }

    return(
        <div className="game-container">
            <div className="grid">
                {cells.map((cell, i) => <Cell key={`${i}`} functions={{cellToClue, cellToWords, fillCell, checkCells, toggleSolved}} cell={cell}/>)}
            </div>

            {clues.length > 0 ?
            <Clues key={clues.length} functions={{clueToWord}} clues={clues} /> :
            null 
            }

        </div>
    )

}