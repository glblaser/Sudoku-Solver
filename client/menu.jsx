import React from 'react'
import Button from 'react-bootstrap/Button'

const Menu = props => (
  <div className='menu'>
    <Button variant="primary" onClick={props.getPuzzle}>New Game</Button>
    <Button variant="primary" onClick={props.resetPuzzle}>Reset</Button>
    <Button variant="primary" onClick={props.solvePuzzle}>Solve</Button>
    <Button variant="primary" onClick={props.setCustomGame}>Custom Game</Button>
  </div>
)

export default Menu