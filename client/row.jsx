import React from 'react'

const Row = props => (
  <tr>
    {props.row.map((square, ind) => {
      return (
        <td 
          colnum={ind} 
          id={`row${props.rownum}col${ind}`}
          className={
            (props.currentPuzzle[props.rownum][ind] === 0 && props.currentCell[0] === props.rownum && props.currentCell[1] === ind) ? 'blue square selected' 
            : props.currentPuzzle[props.rownum][ind] === 0 ? 'blue square'
            : 'bold square'}
          onClick={() => {
            props.selectCell(props.rownum, ind)
          }}
        >
          {square != 0
            ? square
            : null
          }
        </td>  
      )
    })}
  </tr>
)

export default Row