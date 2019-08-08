import React from "react"
import { transitions, positions, Provider as AlertProvider, useAlert } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import Board from "./board.jsx"
import Selectors from "./selectors.jsx"

export default class App extends React.Component {
  constructor(props) {
    super(props)

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
        // [0, 3, 0, 0, 0, 0, 0, 5, 6],
        // [0, 0, 8, 0, 9, 1, 3, 0, 0],
        // [6, 0, 0, 4, 0, 0, 7, 0, 0],
        // [0, 0, 3, 8, 1, 0, 0, 0, 0],
        // [0, 0, 6, 0, 0, 0, 2, 0, 0],
        // [0, 0, 0, 0, 3, 4, 8, 0, 0],
        // [0, 0, 1, 0, 0, 8, 0, 0, 9],
        // [0, 0, 4, 1, 2, 0, 6, 0, 0],
        // [0, 6, 0, 0, 0, 0, 0, 4, 0]
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
    this.populateCell = this.populateCell.bind(this)
    this.checkBoard = this.checkBoard.bind(this)
  }

  selectCell(row, col) {
    this.setState({currentCell: [row,col]})
  }

  checkBoard() {
    if (JSON.stringify(this.state.currentBoard) === JSON.stringify(this.state.currentSolution)) {
      console.log('SOLVED!')
      // const alert = useAlert()
      alert("SOLVED! You're a genius!")
    } else {
      console.log('Not solved.')
    }
    
    // console.log(this.state.currentBoard)
    // for (let i=0; i<9; i++) {
    //   for (let j=0; j<9; j++) {
    //     if (this.state.currentBoard[i][j] === 0) {
    //       console.log('board not full')
          
    //     }
    //   }
    // }
    // console.log('board full')
  }

  populateCell(num) {
    if (this.state.currentPuzzle[this.state.currentCell[0]][this.state.currentCell[1]] === 0) {
      let boardCopy = JSON.parse(JSON.stringify(this.state.currentBoard))
      boardCopy[this.state.currentCell[0]][this.state.currentCell[1]] = num
      this.setState({currentBoard: boardCopy}, (argument) => {
        this.checkBoard()
      })
    }
  }

  render() {
    return (
      <div>
      {/* <AlertProvider template={AlertTemplate} {...{position: positions.BOTTOM_CENTER}}> */}
          <Board
            currentPuzzle={this.state.currentPuzzle}
            currentBoard={this.state.currentBoard}
            currentCell={this.state.currentCell}
            selectCell={this.selectCell}
          />
          <br />
          <Selectors 
            selectors={this.state.selectors}
            populateCell={this.populateCell}
          />
      {/* </AlertProvider> */}
      </div>
    );
  }
}
