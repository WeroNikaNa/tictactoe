import React from 'react';
import classes from './Square.module.css'

function Square(props) {
    let colorWinner;
    if(props.highlight){
            colorWinner = {
                backgroundColor: "#008000"
            };
        }

    return (
            <button className={classes.square}
                    style={colorWinner}
                    onClick={props.onClick}>
                {props.value}
            </button>
        );

}

export default Square;