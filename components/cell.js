var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState, useEffect } from "react";

export default function Cell(props) {
    var _props$cell = props.cell,
        x = _props$cell.x,
        y = _props$cell.y,
        solution = _props$cell.solution,
        number = _props$cell.number,
        type = _props$cell.type,
        solved = _props$cell.solved;
    var _props$functions = props.functions,
        cellToClue = _props$functions.cellToClue,
        cellToWords = _props$functions.cellToWords,
        fillCell = _props$functions.fillCell,
        checkCells = _props$functions.checkCells,
        toggleSolved = _props$functions.toggleSolved;

    var _useState = useState(""),
        _useState2 = _slicedToArray(_useState, 2),
        text = _useState2[0],
        setText = _useState2[1];

    var handleChange = function handleChange(e) {
        var value = e.currentTarget.value.toUpperCase();
        if (value.length <= 1) {
            setText(value);
            fillCell(x, y, value);
            var words = cellToWords(x, y);
            if (checkCells(words[0])) toggleSolved(words[0], true);
            if (checkCells(words[1])) toggleSolved(words[1], true);
            // if (!(checkCells(words[0])) || checkCells(words[1])) {
            //     toggleSolved(words[0], false)
            //     toggleSolved(words[1], false)
            // };
        } else return;
    };

    return solution ? React.createElement(
        "div",
        { className: "cell " + (solved ? "solved" : false), id: x + "," + y },
        React.createElement(
            "div",
            { className: "cell-number" },
            number,
            " ",
            solved
        ),
        React.createElement("input", { className: "cell-letter", onChange: handleChange, value: text })
    ) : React.createElement("div", { className: "cell-black" });
}