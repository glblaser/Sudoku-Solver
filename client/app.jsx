import React from 'react'
import Board from './board.jsx'
import Selectors from './selectors.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPuzzle: [
        [0, 3, 0, 0, 0, 0, 0, 5, 0],
        [2, null, null, null, null, null, null, null, null],
        [3, null, null, null, null, null, null, null, null],
        [4, null, null, null, null, null, null, null, null],
        [5, null, null, null, null, null, null, null, null],
        [0, 3, 0, 0, 0, 0, 0, 5, 0],
        [null, null, null, null, 3, null, null, null, null],
        [0, 3, 0, 0, 0, 0, 0, 5, 0],
        [null, 1, null, null, null, null, null, null, null]
      ],
      currentCell: [],
      selectors: [1,2,3,4,5,6,7,8,9]
    }

  }
  render() {
    return (
      <div>
        <Board currentPuzzle={this.state.currentPuzzle} />
        <br />
        <Selectors selectors={this.state.selectors} />
      </div>
    )
  }
}
