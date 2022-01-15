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

function App() {



    return (
        <div className="App">
            <Header/>
            <Svg/>
   <Form/>
        </div>
    )
}

export default App;
