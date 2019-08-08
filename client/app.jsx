import React from "react";
import Board from "./board.jsx";
import Selectors from "./selectors.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPuzzle: [
        [0, 3, 0, 0, 0, 0, 0, 5, 0],
        [0, 0, 8, 0, 9, 1, 3, 0, 0],
        [6, 0, 0, 4, 0, 0, 7, 0, 0],
        [0, 0, 3, 8, 1, 0, 0, 0, 0],
        [0, 0, 6, 0, 0, 0, 2, 0, 0],
        [0, 0, 0, 0, 3, 4, 8, 0, 0],
        [0, 0, 1, 0, 0, 8, 0, 0, 9],
        [0, 0, 4, 1, 2, 0, 6, 0, 0],
        [0, 6, 0, 0, 0, 0, 0, 4, 0]
      ],
      currentBoard: [
        [0, 3, 0, 0, 0, 0, 0, 5, 6],
        [0, 0, 8, 0, 9, 1, 3, 0, 0],
        [6, 0, 0, 4, 0, 0, 7, 0, 0],
        [0, 0, 3, 8, 1, 0, 0, 0, 0],
        [0, 0, 6, 0, 0, 0, 2, 0, 0],
        [0, 0, 0, 0, 3, 4, 8, 0, 0],
        [0, 0, 1, 0, 0, 8, 0, 0, 9],
        [0, 0, 4, 1, 2, 0, 6, 0, 0],
        [0, 6, 0, 0, 0, 0, 0, 4, 0]
      ],
      currentSolution: [
        [1, 3, 9, 7, 6, 2, 4, 5, 8],
        [7, 4, 8, 5, 9, 1, 3, 2, 6],
        [6, 5, 2, 4, 8, 3, 7, 9, 1],
        [5, 2, 3, 8, 1, 6, 9, 7, 4],
        [4, 8, 6, 9, 5, 7, 2, 1, 3],
        [9, 1, 7, 2, 3, 4, 8, 6, 5],
        [2, 7, 1, 6, 4, 8, 5, 3, 9],
        [3, 9, 4, 1, 2, 5, 6, 8, 7],
        [8, 6, 5, 3, 7, 9, 1, 4, 2]
      ],
      currentCell: [-1, -1],
      selectors: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };

    this.selectCell = this.selectCell.bind(this);
  }

  selectCell(row, col) {
    this.setState({currentCell: [row,col]})
  }

  render() {
    return (
      <div>
        <Board
          currentPuzzle={this.state.currentPuzzle}
          currentBoard={this.state.currentBoard}
          currentCell={this.state.currentCell}
          selectCell={this.selectCell}
        />
        <br />
        <Selectors selectors={this.state.selectors} />
      </div>
    );
  }
}
