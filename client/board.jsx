import React from 'react'
import Row from './row.jsx'

const Board = props => (
  <table cellSpacing="0" cellPadding="0">
    {props.currentBoard.map((row, ind) => {
      return (
        <tbody id={`row${ind}`}>
          <Row rownum={ind} row={row} currentPuzzle={props.currentPuzzle}/>
        </tbody>  
      )
    })}
  </table>
)

export default Board