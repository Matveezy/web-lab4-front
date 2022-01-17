import React, {useState} from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import Header from "../components/Header";
import MyButton from "../components/UI/MyButton/MyButton";
import {Link} from "react-router-dom";

const Registration = () => {

    const [regUserName , setRegUserName] = useState('');
    const [regPassword , setRegPassword] = useState('');
    const [regRepPassword , setRepPassword] = useState('');

    return (
        <div>
            <Header name='Matvey Chukhno'/>
            <form id='reg_form'>
                <div className='login_text'>REGISTRATION</div>
                <div className='reg_form'>
                    <div className="fields">
                        <div className='username'>
                            <label htmlFor="username">Username:</label>
                            <MyInput
                                type="text"
                                minLength={8}
                                maxLength={20}
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                                onChange={(e)=> setRegUserName(e.target.value)}
                            />
                        </div>
                        <div className='password'>
                            <label htmlFor="password">Password:</label>
                            <MyInput
                                minL
                                type="password"
                                maxLength={16}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                onChange={(e)=> setRegPassword(e.target.value)}
                            />
                            <label htmlFor="repeat_password">Repeat password:</label>
                            <MyInput
                                type="password"
                                maxLength={16}
                                id="repeat_password"
                                name="repeat_password"
                                placeholder="Repeat your password"
                                onChange={(e)=> setRepPassword(e.target.value)}
                            />
                        </div>

                    </div>
                </div>

                <div className="auth_buttons">
                    <MyButton type="submit" value='Submit' className='reg_submit' id='reg_submit' >
                        <Link className='submit_link' to='/authorization'>Create account</Link>
                    </MyButton>
                </div>
                <div className='Error_text' id='Error_text'>
                    <span id="username_error"></span>
                    <span id="password_error"></span>
                </div>
            </form>
        </div>
    );
};

export default Registration;