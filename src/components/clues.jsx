import React, {useState, useEffect} from "react";
import Clue from "./clue";

export default function Clues(props) {
    const {clues} = props
    const across = clues.filter(clue => clue.direction === 0)
    const down = clues.filter(clue => clue.direction === 1)
    const {clueToWord} = props.functions

    return(
        <div className="clues-container">
            <div className="across">
                <h2 className="clues-header">Across</h2>
                {across.map((clue, idx) => <Clue key={idx} clue={clue} />)}
            </div>
            <div className="down">
                <h2 className="clues-header">Down</h2>
                {down.map((clue, idx) => <Clue key={idx} clue={clue} />)}
            </div>
        </div>
    )
}