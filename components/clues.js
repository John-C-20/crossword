import React, { useState, useEffect } from "react";
import Clue from "./clue";

export default function Clues(props) {
    var clues = props.clues;

    var across = clues.filter(function (clue) {
        return clue.direction === 0;
    });
    var down = clues.filter(function (clue) {
        return clue.direction === 1;
    });
    var clueToWord = props.functions.clueToWord;


    return React.createElement(
        "div",
        { className: "clues-container" },
        React.createElement(
            "div",
            { className: "across" },
            React.createElement(
                "h2",
                { className: "clues-header" },
                "Across"
            ),
            across.map(function (clue, idx) {
                return React.createElement(Clue, { key: idx, clue: clue });
            })
        ),
        React.createElement(
            "div",
            { className: "down" },
            React.createElement(
                "h2",
                { className: "clues-header" },
                "Down"
            ),
            down.map(function (clue, idx) {
                return React.createElement(Clue, { key: idx, clue: clue });
            })
        )
    );
}