import React from 'react';
import Slider from "rc-slider";
import classes from './MySlider.module.css'

const MySlider = ({...props}) => {
    return (
        <Slider {...props} className={classes.MySlider} />
    );
};

export default MySlider;