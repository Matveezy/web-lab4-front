import React from 'react';
import TablePoint from "./TablePoint";
import {CSSTransition} from "react-transition-group";
import MyButton from "./UI/MyButton/MyButton";
import {Link} from "react-router-dom";

const Table = ({points}) => {
    return (
        <section className='table_section'>
            <MyButton id='logout_button'>
                <Link to='/authorization' className='logout_link'>Log Out</Link>
            </MyButton>
            <div>
                <table id='table'>

                    <thead>
                    <tr>
                        <th>X</th>
                        <th>Y</th>
                        <th>R</th>
                        <th>CURRENT TIME</th>
                        <th>EXECUTION TIME</th>
                        <th>HIT RESULT</th>
                    </tr>
                    </thead>
                    <tbody>

                    {points.map((point, index) =>
                        <TablePoint
                            x={point.x}
                            y={point.y}
                            r={point.r}
                            time={point.time}
                            exTime={point.exTime}
                            result={point.result}
                            key={index}
                        />
                    )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Table;