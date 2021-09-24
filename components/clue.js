import React from "react";

export default function Clue(props) {
    var _props$clue = props.clue,
        direction = _props$clue.direction,
        text = _props$clue.text,
        word = _props$clue.word,
        number = _props$clue.number;

    return React.createElement(
        "div",
        { className: "clue" },
        React.createElement(
            "span",
            { className: "number" },
            number
        ),
        React.createElement(
            "span",
            { className: "text" },
            text
        )
    );
}