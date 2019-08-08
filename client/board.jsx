import React from 'react'
import Row from './row.jsx'

const Board = props => (
  <table cellSpacing="0" cellPadding="0">
    {props.currentBoard.map((row, ind) => {
      return (
        <tbody id={`row${ind}`}>
          <Row 
            row={row}
            rownum={ind}
            currentPuzzle={props.currentPuzzle}
            currentCell={props.currentCell}
            selectCell={props.selectCell}
          />
        </tbody>  
      )
    })}
  </table>
)

export default Board