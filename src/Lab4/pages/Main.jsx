import React, {useState} from 'react';
import Header from "../components/Header";
import Svg from "../components/Svg";
import Form from "../components/Form";
import Table from "../components/Table";

const Main = () => {

    const [points, setPoints] = useState([]);
    const [rValueForSvg, setRValueForSvg] = useState(1);

    return (
        <div className="App">
            <Header name='Matvey Chukhno' group='P3230' option='30035'/>
            <Svg rValue={rValueForSvg} points={points} setPoints={setPoints}/>
            <Form points={points} setPoints={setPoints} setRValueForSvg={setRValueForSvg} rValueForSvg={rValueForSvg}/>
            <Table points={points}/>
        </div>
    );
};

export default Main;