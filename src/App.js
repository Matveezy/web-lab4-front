import React, {useEffect, useMemo, useRef, useState} from "react";
// import './styles/App.css'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Lab4/styles/App.css'
// import Slider from '@react-native-community/slider'
import About from "./pages/About";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
    Link,
    Switch,
    Redirect,
    Navigate
} from 'react-router-dom';
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./components/UI/AppRouter";
import Header from "./Lab4/components/Header";
import Svg from "./Lab4/components/Svg";
import Form from "./Lab4/components/Form";
import {findAllByDisplayValue} from "@testing-library/react";
import TablePoint from "./Lab4/components/TablePoint";

function App() {

        const [points , setPoints] = useState([
            // {x : 2 , y: 2 , r : 3},
            // {x : 1 , y: 1 , r : 5},
            // {x : 2 , y: 2 , r : 3},
        ]);


    return (
        <div className="App">
            <Header/>
            <Svg/>
   <Form points={points} setPoints={setPoints}/>
           <section className='table_section'>
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

                       {points.map((point , index) =>
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

                    {/*<tr>*/}
                    {/*   */}
                    {/*    /!*<th>2</th>*!/*/}
                    {/*    /!*<th>3</th>*!/*/}
                    {/*    /!*<th>4</th>*!/*/}
                    {/*    /!*<th>105</th>*!/*/}
                    {/*    /!*<th>18:29</th>*!/*/}
                    {/*    /!*<th>TRUE</th>*!/*/}
                    {/*</tr>*/}
                       </tbody>
                   </table>
               </div>
           </section>
        </div>
    )
}

export default App;
