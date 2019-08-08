import React from 'react'
import Button from 'react-bootstrap/Button'

const Menu = props => (
  <div className='menu'>
    <Button variant="primary" onClick={props.resetPuzzle}>Reset</Button>

  </div>
)

export default Menu