import React from 'react'
import Row from './row.jsx'

const Board = props => (
  <table cellSpacing="0" cellPadding="0">
    {props.currentPuzzle.map((row, ind) => {
      return (
        <tbody id={ind}>
          <Row rownum={ind} row={row}/>
        </tbody>  
      )
    })}
  </table>
)

export default Board