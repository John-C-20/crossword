import React from "react";
import Cell from "./cell";

export default function Grid(props) {
    var cells = props.cells;
    var _props$functions = props.functions,
        cellToClue = _props$functions.cellToClue,
        cellToWords = _props$functions.cellToWords,
        fillCell = _props$functions.fillCell,
        checkCells = _props$functions.checkCells;


    return React.createElement(
        "div",
        { className: "grid" },
        cells.map(function (cell, i) {
            return React.createElement(Cell, { key: i, functions: { cellToClue: cellToClue, cellToWords: cellToWords, fillCell: fillCell, checkCells: checkCells }, cell: cell, i: i });
        })
    );
}