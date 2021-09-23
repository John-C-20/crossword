var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState, useEffect } from "react";
import Cell from "./cell";
// useEffect is similar to componentDidMount
// pass [] as second argument to useEffect to make it only run once

export default function Game() {
    var _useState = useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        grid = _useState2[0],
        setGrid = _useState2[1];

    var _useState3 = useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        gameOver = _useState4[0],
        setGameOver = _useState4[1];

    var _useState5 = useState({ cells: [] }),
        _useState6 = _slicedToArray(_useState5, 2),
        data = _useState6[0],
        setData = _useState6[1];

    var cells = [];

    var getData = function getData() {
        fetch('crossword-puzzle.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            return setData(data);
        });
    };

    useEffect(function () {
        return getData();
    }, []);

    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "grid" },
            data.cells.map(function (cell) {
                return React.createElement(Cell, { cell: cell });
            })
        )
    );
}