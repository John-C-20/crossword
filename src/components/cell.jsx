import React, {useState, useEffect} from "react";

export default function Cell(props) {
    const {x,y,solution, number, type, solved} = props.cell
    const {cellToClue, cellToWords, fillCell, checkCells, toggleSolved, toggleHighlightClue} = props.functions
    const [text, setText] = useState("")

    const handleChange = (e) => {
        const value = e.currentTarget.value.toUpperCase()
        if (value.length <= 1) {
            setText(value)
            fillCell(x,y,value) 
            const words = cellToWords(x,y)
            const check1 = checkCells(words[0])
            const check2 = checkCells(words[1])
            if (check1) toggleSolved(words[0], true,x,y);
            if (check2) toggleSolved(words[1], true,x,y);
            if (!(check1 || check2)) {
                toggleSolved(words[0], false, x,y)
                toggleSolved(words[1], false, x,y)
            };
         } else return;
    };

    const handleFocus = e => {
        toggleHighlightClue(number, true)
        console.log("focus")
    }

    // const handleClick = e => {
    //     toggleHighlightClue(number, true)
    // }

    const handleBlur = e => {
        toggleHighlightClue(number, false)
        console.log("blur")
    }
    
    return(
            solution ? 
            <div className={`cell ${solved ? "solved" : false}`}id={`${x},${y}`}>
                <div className="cell-number">
                    {number} 
                </div>
                <input className="cell-letter" 
                onFocusCapture={handleFocus}
                onBlur={handleBlur} 
                onChange={handleChange} value={text}>
                </input>
            </div> :
            <div className="cell-black"></div>
    )
}    
