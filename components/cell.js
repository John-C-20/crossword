var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState, useEffect } from "react";

export default function Cell(props) {
    var _useState = useState(props.cell.x),
        _useState2 = _slicedToArray(_useState, 2),
        x = _useState2[0],
        setX = _useState2[1];

    var _useState3 = useState(props.cell.y),
        _useState4 = _slicedToArray(_useState3, 2),
        y = _useState4[0],
        setY = _useState4[1];

    var _useState5 = useState(props.cell.solution),
        _useState6 = _slicedToArray(_useState5, 2),
        solution = _useState6[0],
        setSolution = _useState6[1];

    var _useState7 = useState(props.cell.number),
        _useState8 = _slicedToArray(_useState7, 2),
        number = _useState8[0],
        setNumber = _useState8[1];

    var _useState9 = useState(props.cell.type),
        _useState10 = _slicedToArray(_useState9, 2),
        type = _useState10[0],
        setType = _useState10[1];

    return React.createElement(
        "div",
        { className: "cell" },
        x,
        ", ",
        y
    );
}