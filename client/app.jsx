import React from 'react'
import axios from 'axios'
import { transitions, positions, Provider as AlertProvider, useAlert } from 'react-alert'
import { sudokuChecker } from './helpers.js'
import AlertTemplate from 'react-alert-template-basic'

import Menu from './menu.jsx'
import Board from './board.jsx'
import Selectors from './selectors.jsx'

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
        // [0, 3, 0, 0, 0, 0, 0, 5, 0],
        // [0, 0, 8, 0, 9, 1, 3, 0, 0],
        // [6, 0, 0, 4, 0, 0, 7, 0, 0],
        // [0, 0, 3, 8, 1, 0, 0, 0, 0],
        // [0, 0, 6, 0, 0, 0, 2, 0, 0],
        // [0, 0, 0, 0, 3, 4, 8, 0, 0],
        // [0, 0, 1, 0, 0, 8, 0, 0, 9],
        // [0, 0, 4, 1, 2, 0, 6, 0, 0],
        // [0, 6, 0, 0, 0, 0, 0, 4, 0]
        [1, 3, 9, 7, 6, 2, 4, 5, 0],
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
      selectors: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      solved: false
    };

    this.selectCell = this.selectCell.bind(this);
    this.populateCell = this.populateCell.bind(this)
    this.checkBoard = this.checkBoard.bind(this)
    this.resetPuzzle = this.resetPuzzle.bind(this)
    this.getPuzzle = this.getPuzzle.bind(this)
    this.solvePuzzle = this.solvePuzzle.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.isCellSelected = this.isCellSelected.bind(this)
  }

  isCellSelected() {
    let rowValid = this.state.currentCell[0] != -1
    let colValid = this.state.currentCell[1] != -1
    let validCell = this.state.currentPuzzle[this.state.currentCell[0]][this.state.currentCell[1]] === 0
    return (rowValid && colValid && validCell)
  }

  handleKeyPress(e) {
    let key = parseInt(e.key)

    if (key >= 1 && key <=9 && this.isCellSelected()) {
      let boardCopy = this.state.currentBoard
      boardCopy[this.state.currentCell[0]][this.state.currentCell[1]] = key
      this.setState({currentBoard: boardCopy}, () => {
        this.checkBoard()
      })
    }
  }

  solvePuzzle() {
    this.setState({
      currentBoard: this.state.currentSolution, 
      currentCell: [-1,-1],
      solved: true
    })
  }

  resetPuzzle() {
    let oldBoard = JSON.parse(JSON.stringify(this.state.currentPuzzle))
    this.setState({
      currentBoard: oldBoard,
      currentCell: [-1,-1],
      solved: false
    })
  }

  selectCell(row, col) {
    if (!this.state.solved) {
      this.setState({currentCell: [row,col]})
    }
  }

  checkBoard() {
    if (JSON.stringify(this.state.currentBoard) === JSON.stringify(this.state.currentSolution)) {
      console.log('SOLVED!')
      // const alert = useAlert()
      this.setState({solved: true, currentCell: [-1, -1]}, () => {
        setTimeout(() => alert("SOLVED! You're a genius!"), 50)
      })
    }
  }

  populateCell(num) {
    if (this.state.currentCell[0] != -1) {
      if (this.state.currentPuzzle[this.state.currentCell[0]][this.state.currentCell[1]] === 0) {
        let boardCopy = JSON.parse(JSON.stringify(this.state.currentBoard))
        boardCopy[this.state.currentCell[0]][this.state.currentCell[1]] = num
        this.setState({currentBoard: boardCopy}, () => {
          this.checkBoard()
        })
      }
    }
  }

  getPuzzle() {
    axios.get(`/puzzle`)
    .then(data => {
      let quiz = data.data.quiz
      let quizCopy = JSON.parse(JSON.stringify(quiz))
      let solution = data.data.solution

      this.setState({
        currentPuzzle: quiz,
        currentBoard: quizCopy,
        currentSolution: solution,
        currentCell: [-1, -1],
        selectors: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        solved: false
      })
    });
    // this.resetPuzzle()
  }

  componentDidMount(){
    document.addEventListener("keyup", this.handleKeyPress);
    console.log(sudokuChecker(this.state.currentSolution))
  }

  render() {
    return (
      <div onKeyUp={this.handleKeyPress}>
      {/* <AlertProvider template={AlertTemplate} {...{position: positions.BOTTOM_CENTER}}> */}
          <div className='title'>Sudoku MVP</div>
          <Menu
            getPuzzle={this.getPuzzle}
            resetPuzzle={this.resetPuzzle}
            solvePuzzle={this.solvePuzzle}
          />
          <br />
          <Board
            currentPuzzle={this.state.currentPuzzle}
            currentBoard={this.state.currentBoard}
            currentCell={this.state.currentCell}
            handleKeyPress={this.handleKeyPress}
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
