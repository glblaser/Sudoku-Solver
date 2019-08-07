import React from 'react'
import Row from './row.jsx'

const Board = props => (
  <div>
    {props.currentPuzzle.map((row, ind) => {
      return (
        <div id={ind}>
          <Row rowNum={ind} row={row}/>
        </div>  
      )
    })}
  </div>
)

export default Board