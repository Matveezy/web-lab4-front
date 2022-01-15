import React, {useState} from 'react';
import Slider from "rc-slider";
import MySlider from "./UI/MySlider/MySlider";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

const Form = () => {

    const [xValue , setXValue] = useState(1);
    const [yValue , setYValue] = useState(0);
    const [rValue , setRValue] = useState(1);

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
                    {/*    <div className='y_value'>*/}
                    {/*        <label htmlFor="Y_value">Y value:</label>*/}
                    {/*        <div>{yValue}</div>*/}
                    {/*        <MyInput*/}
                    {/*            type="text"*/}
                    {/*            maxLength={16}*/}
                    {/*            min*/}
                    {/*            id="Y_value"*/}
                    {/*            name="Y_value"*/}
                    {/*            placeholder='Enter coordinate Y'*/}
                    {/*            onChange={(e)=>setYValue(e.target.value)}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className='r_value'>*/}
                    {/*        <label>R coordinate:</label>*/}
                    {/*        <div>{rValue}</div>*/}
                    {/*        <MySlider*/}
                    {/*            defaultValue={1}*/}
                    {/*            min={-3}*/}
                    {/*            max={5}*/}
                    {/*            step={0.1}*/}
                    {/*            onChange={(e) => setRValue(parseInt(e))}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className='Error_text' id='Error_text'>*/}
                    {/*    <span id="X_error"></span>*/}
                    {/*    <span id="Y_error"></span>*/}
                    {/*    <span id="R_error"></span>*/}
                    {/*</div>*/}

                    {/*<div className="client_button">*/}
                    {/*    <MyButton type='submit' value='Submit' className ='submit'>Submit</MyButton>*/}
                    {/*    <MyButton type='reset' value='Reset' className ='reset'>Reset</MyButton>*/}
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Form;