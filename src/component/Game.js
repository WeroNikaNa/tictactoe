import React from 'react';
import Board from "./Board";
import classes from "./Game.module.css";

class Game extends React.Component {
    render() {
        return (
            <div className={classes.game}>
                <div>
                    <Board />
                </div>
            </div>
        );
    }
}

export default Game;