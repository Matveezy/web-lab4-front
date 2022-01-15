import React from 'react';

const TablePoint = ({x, y, r, time, exTime, result}) => {

    var color = "#00d66b";
    const getResColor = (color) => {
        if (result.toLowerCase() === 'false') {
            color = '#FF4040';
        }
        return color;
    }


    return (
        <tr>
            <th>{x}</th>
            <th>{y}</th>
            <th>{r}</th>
            <th>{time}</th>
            <th>{exTime}</th>
            <th style={{color: getResColor(color)}}>{result}</th>
        </tr>
    );
};

export default TablePoint;