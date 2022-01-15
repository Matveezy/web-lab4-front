import React, {useState} from 'react';
import Slider from "rc-slider";
import MySlider from "./UI/MySlider/MySlider";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

const Form = ({points, setPoints}) => {

    const [xValue, setXValue] = useState(1);
    const [yValue, setYValue] = useState(0);
    const [rValue, setRValue] = useState(1);

    const getExecutionTime = () => {
        const time = Date.now();
        return getExecutionTime();
    }



    const isRectangle = (x, y ,r) =>{
        if ((x>= r/2) && (x < 0) && ( y <=r) && (y >= 0)) {
            return true;
        }
        return false;
    }

    const isTriangle = (x, y ,r) =>{
        if ( (y <= (-x + r/2)) && (x>=0) && (y>=0) ){
            return true;
        }
        return false;
    }

    const isCircle = (x , y ,r)=> {
        if (  (x*x + y*y <= r*r) && (x<=0) && (y<=0) ){
            return true;
        }
        return false;
    }

    const hitCheck = (x ,y ,r ) =>{
        if (isTriangle(x,y,r) || isCircle(x,y,r) || isRectangle(x,y,r)){
            return true;
        }
        return false;
    }

    const submitForm = (e) => {
        const startTime = Date.now();
        e.preventDefault();
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const exTime = Date.now() - startTime;
        const result  = hitCheck(xValue , yValue , rValue);
        console.log(result);
        const newPoint = {
            x: xValue,
            y: yValue,
            r: rValue,
            time: time,
            exTime: exTime,
            result: (hitCheck(xValue , yValue , rValue)).toString().toUpperCase()
        }
        setPoints([...points, newPoint]);
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
                                step={0.1}
                                onChange={(e) => setXValue(parseInt(e))}
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
                                min={-3}
                                max={5}
                                step={0.1}
                                onChange={(e) => setRValue(parseInt(e))}
                            />
                        </div>
                    </div>
                    <div className='Error_text' id='Error_text'>
                        <span id="X_error"></span>
                        <span id="Y_error"></span>
                        <span id="R_error"></span>
                    </div>

                    <div className="client_button">
                        <MyButton type='submit' value='Submit' className='submit' onClick={submitForm}>Submit</MyButton>
                        <MyButton type='reset' value='Reset' className='reset'>Reset</MyButton>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Form;