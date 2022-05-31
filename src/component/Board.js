import React from 'react';
import Square from "./Square";
import classes from "./Board.module.css"

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            next: true,
            squares: Array(9).fill(null),
            counter: 0
        };
    }
    handleClick(n, winner){
        const squares = this.state.squares.slice();
        if(!squares[n] && (winner!=='O' && winner !=='X')){
                squares[n] = this.state.next ?'O':'X';

                this.setState({
                    squares: squares,
                    next: !this.state.next,
                    counter: this.state.counter + 1
                });
        }
        console.log(this.state.counter)
    }
    renderSquare(i, highlight, winner) {
        return <Square value={this.state.squares[i]}  highlight={highlight} onClick={()=>this.handleClick(i, winner)}/>;
    }

    reset(){
        this.setState({
            squares: Array(9).fill(null),
            next: true,
            counter: 0
        })
    }

    checkWinner(sq) {
        const linesVal = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < linesVal.length; i++) {
            const [x, y, z] = linesVal[i];
            if (sq[x] && sq[x] === sq[y] && sq[x] === sq[z]) {
                return [sq[x], linesVal[i]]
            }
        }
        return null;
    }

    render() {
        let results = this.checkWinner(this.state.squares);
        let winner ="";
        let winnerLine;
        let highlight = Array(9).fill(false);

        if(results){
            winner = results[0]
            winnerLine = results[1]
            //color the winner
            highlight[winnerLine[0]] = true;
            highlight[winnerLine[1]] = true;
            highlight[winnerLine[2]] = true;
        }


        return (
            <div>
                { this.state.counter !==9 && !winner && <div className={classes.status}>Next player: <span>{this.state.next ? 'O': 'X'}</span></div>}
                {winner && <div className={classes.status}>Winner: <span>{winner}</span></div>}
                {this.state.counter ===9 && <div className={classes.status}>It is a tie!</div>}
                <button onClick={() => this.reset()}>Reset</button>
                <div className={classes.row}>
                    {this.renderSquare(0, highlight[0], winner)}
                    {this.renderSquare(1, highlight[1], winner)}
                    {this.renderSquare(2, highlight[2], winner)}
                </div>
                <div className={classes.row}>
                    {this.renderSquare(3, highlight[3], winner)}
                    {this.renderSquare(4, highlight[4], winner)}
                    {this.renderSquare(5, highlight[5], winner)}
                </div>
                <div className={classes.row}>
                    {this.renderSquare(6, highlight[6], winner)}
                    {this.renderSquare(7, highlight[7], winner)}
                    {this.renderSquare(8, highlight[8], winner)}
                </div>
            </div>
        );
    }
}

export default Board;