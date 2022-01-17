import React, {useEffect, useMemo, useRef, useState} from "react";
// import './styles/App.css'
import Slider, {Range} from 'rc-slider';
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
import Table from "./Lab4/components/Table";
import Main from "./Lab4/pages/Main";
import Registration from "./Lab4/pages/Registration";
import Authorization from "./Lab4/pages/Authorization";

function App() {

    // const [points, setPoints] = useState([]);
    // const [rValueForSvg , setRValueForSvg] = useState(1);


    return (
        <BrowserRouter>
            <Route path='/main'>
                <Main/>
            </Route>
            <Route path='/registration'>
                <Registration/>
            </Route>
            <Route path='/authorization'>
                <Authorization/>
            </Route>
            <Redirect to='/authorization'/>
        </BrowserRouter>
    )
}

export default App;
