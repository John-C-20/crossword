import React from "react";

export default function Clue(props) {
    const {direction, text, word, number, highlighted} = props.clue
    return(
        <div className={highlighted?`clue highlighted`:`clue`} id={`clue${number}`}>
            <span className="number">{number}</span>
            <span className="text">{text}</span>
        </div>
    )
}