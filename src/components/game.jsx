import React, {useState, useEffect} from "react";
import Cell from "./cell";
import Clues from "./clues";
// useEffect is similar to componentDidMount
// pass [] as second argument to useEffect to make it only run once

export default function Game() {
    const [cells, setCells] = useState([])
    const [clues, setClues] = useState([])
    const [words, setWords] = useState([])

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
        const clueArr = clues.filter(clue => clue.number === number)
        return clueArr;
    }

    const clueToWord = (wordId) => {
        const word = words.find(obj => obj.id == wordId)
        return word; 
    }

    // finds the word based on x,y of cell
    const cellToWords = (x,y) => {
        return cells[convertXYtoIdx(x,y)].word
    }
    
    //converts x,y grid coordinates to an indice in cells array
    const convertXYtoIdx = (x,y) => 15*(y-1)+(x-1);
    
    //converts the coordinates of a word into an array of indices
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
    

    // sets the "value" of a cell for use in checkCells(word)
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
            return true;
        } else {
            return false
        };
    }

    // highlights or unhighlights tiles depending on if word is solved
    const toggleSolved = (word, solved, x, y) => {
        let newCells = [...cells]
        const idx = convertXYtoIdx(x,y)
        word.cells.forEach(i => {
            if (newCells[i].solved) {
                const check1 = checkCells(newCells[i].word[0])
                const check2 = checkCells(newCells[i].word[1])
                if (!( check1 || check2)) newCells[i].solved = solved;
            } else newCells[i].solved = solved;
        })
        setCells(newCells)
    }

    // highlight clue when clicking a numbered cell
    const toggleHighlightClue = (number, onOff) => {
        const clueArr = cellToClue(number) 
        clueArr.forEach(clue => clue.highlighted = onOff)
        setClues([...clues])
    }

    return(
        <div className="game-container">
            <div className="grid">
                {cells.map((cell, i) => <Cell key={`${i}`} functions={{cellToClue, cellToWords, fillCell, checkCells, toggleSolved, toggleHighlightClue}} cell={cell}/>)}
            </div>

            {clues.length > 0 ?
            <Clues key={clues.length} functions={{clueToWord}} clues={clues} /> :
            null 
            }

        </div>
    )

}