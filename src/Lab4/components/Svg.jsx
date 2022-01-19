import React from 'react';
import Drawing from "../utils/Drawing";
import {fromCoordinateToValues} from "../utils/coordinates";
import {getTime} from "../utils/Time";
import {hitCheck} from "../utils/HitChecker";
import TablePoint from "./TablePoint";

const Svg = ({rValue , points , setPoints}) => {


    const handleClick =(e)=>{
        if (rValue<=0){
            return;
        }
        const startTime = Date.now();
        const coordinateY = e.nativeEvent.offsetY;
        const coordinateX = e.nativeEvent.offsetX;
        console.log('Y coordinate:' + coordinateY);
        console.log('X coordinate:' + coordinateX);
        const [xValue , yValue] = fromCoordinateToValues(coordinateX, coordinateY , rValue);
        const time = getTime();
        const exTime = Date.now() - startTime;
        const newPoint = {
            x : Math.round(xValue * 100) / 100 ,
            y : Math.round(yValue * 100) / 100,
            r : rValue,
            time : time,
            exTime : exTime ,
            result : (hitCheck(xValue, yValue, rValue)).toString().toUpperCase()
        }
        setPoints([...points , newPoint]);
        console.log('length' + points.length);
    }

    return (

        <div className='section_lab'>
            <svg className="svg_container" onClick={(e) =>handleClick(e)} id="svg_cont" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                {/*// <!-- Оси координат -->*/}
                <line x1="0" x2="300" y1="150" y2="150"></line>
                <line x1="150" x2="150" y1="0" y2="300"></line>
                {/*// <!-- Стрелки к осям -->*/}
                <polygon points="150,0 145,15 155,15" stroke="black" fill='black'></polygon>
                <polygon points="300,150 285,145 285,155" stroke="black" fill='black'></polygon>
                {/*// <!-- Метки для значений R на оси X -->*/}
                <line x1="20" x2="20" y1="140" y2="160"></line>
                <line x1="85" x2="85" y1="140" y2="160"></line>
                <line x1="215" x2="215" y1="140" y2="160"></line>
                <line x1="280" x2="280" y1="140" y2="160"></line>
                {/*// <!-- Метки для значений R на оси Y -->*/}
                <line x1="140" x2="160" y1="20" y2="20"></line>
                <line x1="140" x2="160" y1="85" y2="85"></line>
                <line x1="140" x2="160" y1="215" y2="215"></line>
                <line x1="140" x2="160" y1="280" y2="280"></line>

                {/*// <!-- Четверь окружности в третьей четверти -->*/}
                <path id='circle' stroke="yellow" fill="yellow" fillOpacity="0.3"
                      d="M50,150 A100,100 90 0,0 150,250 L 150,150 Z"></path>



                {/*Треугольник в первой четверти*/}
                <polygon id='triangle' stroke="green" fill="green" fillOpacity="0.3" points="150,150 200,150 150,100"></polygon>


                {/*// <!-- Прямоугольник во второй четверти -->*/}
                <polygon id='rectangle' stroke="blue" fill="blue" fillOpacity="0.3"
                         points="150,150 150,50 100,50 100,150"></polygon>

                {/*// <!-- Подписи к осям -->*/}
                <text x="285" y="135" fill='black'>X</text>
                <text x="160" y="15" fill='black'>Y</text>
                {/*// <!-- Значения R на оси X -->*/}
                <text id='minRLetterOnX' x="7" y="130" fill='black'>-R</text>
                <text id='minRDivTwoLetterOnX' x="65.5" y="130" fill='black'>-R/2</text>
                <text x="202" y="130" fill='black'>R/2</text>
                <text x="273.5" y="130" fill='black'>R</text>
                {/*// <!-- Значения R на оси Y -->*/}
                <text x="170" y="23.25" fill='black'>R</text>
                <text x="170" y="88.25" fill='black'>R/2</text>
                <text x="170" y="218.25" fill='black'>-R/2</text>
                <text x="170" y="283.25" fill='black'>-R</text>

                {points.map((point, index) =>
                    <circle
                        cx={150 + point.x / 1 * 100}
                        cy={150 - point.y / 1 * 100}
                        r ={3}
                        key={index}
                        fill={point.result.toString().toLowerCase()==='true' ? '#00d66b' : '#FF4040'}
                    />
                )}


            </svg>

        </div>
    );
};

export default Svg;