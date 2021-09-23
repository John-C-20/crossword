import React, {useState, useEffect} from "react";

export default function Cell(props) {
    const [x, setX] = useState(props.cell.x)
    const [y, setY] = useState(props.cell.y)
    const [solution, setSolution] = useState(props.cell.solution)
    const [number, setNumber] = useState(props.cell.number)
    const [type, setType] = useState(props.cell.type)

    return(
            solution ? 
            <div className="cell">
                <div className="cell-number">
                    {number}
                </div>
                <div className="cell-letter">
                    {solution}
                </div>
            </div> :
            <div className="cell-black"> 
            </div>
    )
}
