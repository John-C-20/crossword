import React, {useState, useEffect} from "react";

export default function Cell(props) {
    const {x,y,solution, number, type} = props.cell
    const i = props.i
    const {cellToClue, cellToWords, fillCell, checkCells} = props.functions
    const [text, setText] = useState("")

    const handleChange = (e) => {
        const value = e.currentTarget.value.toUpperCase()
        if (value.length <= 1) {
            setText(value)
            fillCell(x,y,value) 
            const words = cellToWords(x,y)
            checkCells(words[0])
            checkCells(words[1])
         } else return;
    };

    return(
            solution ? 
            <div className="cell" id={`${x},${y} ${i}`}>
                <div className="cell-number">
                    {number}
                </div>
                <input className="cell-letter" onChange={handleChange} value={text}>
                    {/* {solution} */}
                </input>
            </div> :
            <div className="cell-black"></div>
    )
}
