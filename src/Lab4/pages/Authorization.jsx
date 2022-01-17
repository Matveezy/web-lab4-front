import React, {useState} from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import Header from "../components/Header";
import MyButton from "../components/UI/MyButton/MyButton";
import {Link} from "react-router-dom";
import Validator from "../utils/validator";

const Authorization = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const submitAuth = (e) => {
        e.preventDefault();
        if ((Validator.validateUserName(userName).toString() !== 'true')) {
            return;
        } else if (Validator.validateUserName(userName).toString() === 'true') {
            Validator.cleanUserNameError();
        }
        if (Validator.validatePassword(password).toString() !== 'true') {
            return;
        }
        Validator.cleanPasswordError();
    }

    const submitAuthLink = (e) => {
        if ((Validator.validateUserName(userName).toString() !== 'true')) {
            e.preventDefault();
            return;
        } else if (Validator.validateUserName(userName).toString() === 'true') {
            Validator.cleanUserNameError();
        }
        if (Validator.validatePassword(password).toString() !== 'true') {
            e.preventDefault();
            return;
        }
        Validator.cleanPasswordError();
    }

    return (
        <div>
            <Header name='Matvey Chukhno'/>
            <form id='auth_form'>
                <div className='login_text'>AUTHORIZATION</div>
                <div className='auth_form'>
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
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className='password'>
                            <label htmlFor="password">Password:</label>
                            <MyInput
                                type="password"
                                maxLength={16}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="auth_buttons">
                    <MyButton type="submit" value='Submit' className='auth_submit' onClick={(e) => submitAuthLink(e)}>
                        <Link onClick={(e) => submitAuthLink(e)} className='submit_link' to='/main'>Sign in</Link>
                    </MyButton>
                    <MyButton type="reset" value='Reset' className='auth_reset'>
                        <Link className='reg_link' to='/registration'>Sign up</Link>
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

export default Authorization;