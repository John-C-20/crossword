import React from "react";

export default function Clue(props) {
    const {direction, text, word, number} = props.clue
    return(
        <div className="clue">
            <span className="number">{number}</span>
            <span className="text">{text}</span>
        </div>
    )
}