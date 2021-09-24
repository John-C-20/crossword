var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState, useEffect } from "react";
import Cell from "./cell";
import Clues from "./clues";
// useEffect is similar to componentDidMount
// pass [] as second argument to useEffect to make it only run once

export default function Game() {
    var _useState = useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        cells = _useState2[0],
        setCells = _useState2[1];

    var _useState3 = useState([]),
        _useState4 = _slicedToArray(_useState3, 2),
        clues = _useState4[0],
        setClues = _useState4[1];

    var _useState5 = useState([]),
        _useState6 = _slicedToArray(_useState5, 2),
        words = _useState6[0],
        setWords = _useState6[1];

    var getData = function getData() {
        fetch('crossword-puzzle.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            data.words.forEach(function (word) {
                var idx = convertWordToCells(word);
                // add index of all related squares to word object
                word.cells = idx;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = idx[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var i = _step.value;

                        // add word object to all related indices
                        !data.cells[i].word ? data.cells[i].word = [word] : data.cells[i].word.push(word);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            });
            setClues(data.clues);
            setCells(data.cells);
            setWords(data.words);
        });
    };

    useEffect(function () {
        return getData();
    }, []);

    var cellToClue = function cellToClue(number) {
        var clue = clues.find(function (clue) {
            return clue.number === number;
        });
        // console.log("cellToClue", clue)
        return clue;
    };

    var clueToWord = function clueToWord(wordId) {
        var word = words.find(function (obj) {
            return obj.id == wordId;
        });
        // console.log("clueToWord", word)
        return word;
    };

    var cellToWords = function cellToWords(x, y) {
        return cells[convertXYtoIdx(x, y)].word;
    };

    //converts x,y grid coordinates to an indice in cells array
    var convertXYtoIdx = function convertXYtoIdx(x, y) {
        return 15 * (y - 1) + (x - 1);
    };

    var convertWordToCells = function convertWordToCells(word) {
        var x = word.x.split("-").map(function (num) {
            return Number(num);
        });
        var y = word.y.split("-").map(function (num) {
            return Number(num);
        });

        var idx = [];
        var i = void 0,
            j = void 0;
        if (x.length > 1) {
            var _ref = [x[0], x[1]];
            i = _ref[0];
            j = _ref[1];

            while (i <= j) {
                idx.push(convertXYtoIdx(i, y));
                i++;
            }
        } else {
            var _ref2 = [y[0], y[1]];
            i = _ref2[0];
            j = _ref2[1];

            while (i <= j) {
                idx.push(convertXYtoIdx(x, i));
                i++;
            }
        }
        return idx;
    };

    var fillCell = function fillCell(x, y, value) {
        cells[convertXYtoIdx(x, y)].value = value;
    };

    // check if every cell of word is filled and correct
    var checkCells = function checkCells(word) {
        var str = [];
        word.cells.forEach(function (i) {
            if (!cells[i].value) cells[i].value = " ";
            str.push(cells[i].value);
        });

        console.log(str);
        if (str.join("") == word.solution) {
            console.log("correct!", word.solution);
            toggleSolved(word, true);
            return true;
        } else {
            toggleSolved(word, false);
            return false;
        };
    };

    var toggleSolved = function toggleSolved(word, solved) {
        word.cells.forEach(function (i) {
            var newCells = cells;
            newCells[i].solved = solved;
            setCells(newCells);
        });
    };

    return React.createElement(
        "div",
        { className: "game-container" },
        React.createElement(
            "div",
            { className: "grid" },
            cells.map(function (cell, i) {
                return React.createElement(Cell, { key: i, functions: { cellToClue: cellToClue, cellToWords: cellToWords, fillCell: fillCell, checkCells: checkCells }, cell: cell });
            })
        ),
        clues.length > 0 ? React.createElement(Clues, { key: clues.length, functions: { clueToWord: clueToWord }, clues: clues }) : null
    );
}