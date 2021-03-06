import React, {useState} from 'react';
import Slider from "rc-slider";
import MySlider from "./UI/MySlider/MySlider";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import Validator from "../utils/validator";
import {getTime} from "../utils/Time";
import {hitCheck} from "../utils/HitChecker";
import Drawing from "../utils/Drawing";

const Form = ({points, setPoints , setRValueForSvg , rValueForSvg}) => {

    const [xValue, setXValue] = useState(1);
    const [yValue, setYValue] = useState('');
    const [rValue, setRValue] = useState(1);

    const getExecutionTime = () => {
        const time = Date.now();
        return getExecutionTime();
    }

    const submitForm = (e) => {
        const startTime = Date.now();
        e.preventDefault();
        if (Validator.validateInputY(yValue).toString() !== 'true') {
            return;
        }
        const time = getTime();
        const exTime = Date.now() - startTime;
        const newPoint = {
            x: xValue,
            y: yValue,
            r: rValue,
            time: time,
            exTime: exTime,
            result: (hitCheck(xValue, yValue, rValue)).toString().toUpperCase()
        }
        Validator.yCleanText();
        setPoints([...points, newPoint]);
    }

    const onChangeR = (e)=>{
        setRValue(parseFloat(e));
        setRValueForSvg(parseFloat(e));
        Drawing.svgDrawing(rValueForSvg);
    }


    return (
        <section className='section_lab'>
            <form id='form'>
                <div className='form'>
                    <div className='values'>
                        <div className='x_value'>
                            <label>X coordinate:</label>
                            <div>{xValue}</div>
                            <MySlider
                                defaultValue={1}
                                min={-3}
                                max={5}
                                step={0.01}
                                onChange={(e) => setXValue(parseFloat(e))}
                            />
                        </div>
                        <div className='y_value'>
                            <div></div>
                            <label htmlFor="Y_value">Y coordinate:</label>
                            <div>{null}</div>
                            <MyInput
                                type="text"
                                maxLength={8}
                                id="Y_value"
                                name="Y_value"
                                placeholder='Enter coordinate Y'
                                onChange={(e) => setYValue(e.target.value)}
                            />
                        </div>
                        <div className='r_value'>
                            <label>R coordinate:</label>
                            <div>{rValue}</div>
                            <MySlider
                                defaultValue={1}
                                min={-2}
                                max={1.3}
                                step={0.01}
                                onChange={(e) => onChangeR(e)}
                            />
                        </div>
                    </div>
                    <div className="client_button">
                        <MyButton type='submit' value='Submit' className='submit' onClick={submitForm}>Submit</MyButton>
                        <MyButton type='reset' value='Reset' className='reset' onClick = {() => {setYValue('')}}>Reset</MyButton>
                    </div>
                    <div className='Error_text' id='Error_text'>
                        <span id="Y_error"></span>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Form;