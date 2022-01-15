import React from 'react';

const Svg = ({rValue}) => {
    return (
        <div className='section_lab'>
            <svg className="svg_container" id="svg_cont" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                {/*// <!-- Оси координат -->*/}
                <line x1="0" x2="300" y1="150" y2="150"></line>
                <line x1="150" x2="150" y1="0" y2="300"></line>
                {/*// <!-- Стрелки к осям -->*/}
                <polygon points="150,0 145,15 155,15" stroke="black" fill='black'></polygon>
                <polygon points="300,150 285,145 285,155" stroke="black" fill='black'></polygon>
                {/*// <!-- Метки для значений R на оси X -->*/}
                <line x1="50" x2="50" y1="140" y2="160"></line>
                <line x1="100" x2="100" y1="140" y2="160"></line>
                <line x1="200" x2="200" y1="140" y2="160"></line>
                <line x1="250" x2="250" y1="140" y2="160"></line>
                {/*// <!-- Метки для значений R на оси Y -->*/}
                <line x1="140" x2="160" y1="50" y2="50"></line>
                <line x1="140" x2="160" y1="100" y2="100"></line>
                <line x1="140" x2="160" y1="200" y2="200"></line>
                <line x1="140" x2="160" y1="250" y2="250"></line>

                {/*// <!-- Четверь окружности в третьей четверти -->*/}
                <path stroke="yellow" fill="yellow" fill-opacity="0.3"
                      d="M50,150 A100,100 90 0,0 150,250 L 150,150 Z"></path>



                {/*Треугольник в первой четверти*/}
                <polygon stroke="green" fill="green" fill-opacity="0.3" points="150,150 200,150 150,100"></polygon>


                {/*// <!-- Прямоугольник во второй четверти -->*/}
                <polygon stroke="blue" fill="blue" fill-opacity="0.3"
                         points="150,150 150,50 100,50 100,150"></polygon>

                {/*// <!-- Подписи к осям -->*/}
                <text x="285" y="135" fill='black'>X</text>
                <text x="160" y="15" fill='black'>Y</text>
                {/*// <!-- Значения R на оси X -->*/}
                <text x="40" y="130" fill='black'>-R</text>
                <text x="85" y="130" fill='black'>-R/2</text>
                <text x="190" y="130" fill='black'>R/2</text>
                <text x="245" y="130" fill='black'>R</text>
                {/*// <!-- Значения R на оси Y -->*/}
                <text x="170" y="52.5" fill='black'>R</text>
                <text x="170" y="102.5" fill='black'>R/2</text>
                <text x="170" y="202.5" fill='black'>-R/2</text>
                <text x="170" y="252.5" fill='black'>-R</text>
            </svg>

        </div>
    );
};

export default Svg;