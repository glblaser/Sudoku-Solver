import React from 'react'
import Board from './board.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPuzzle: [
        [1, null, null, null, null, null, null, null, null],
        [2, null, null, null, null, null, null, null, null],
        [3, null, null, null, null, null, null, null, null],
        [4, null, null, null, null, null, null, null, null],
        [5, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null]
      ]
    }

  }
  render() {
    return (
      <div>
        <Board currentPuzzle={this.state.currentPuzzle} />
      </div>
    )
  }
}
