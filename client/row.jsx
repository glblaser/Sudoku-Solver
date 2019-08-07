import React from 'react'

const Row = props => (
  <tr>
    {props.row.map((square, ind) => {
      return (
        <td colnum={ind} id={`row${props.rownum}col${ind}`} className={props.currentPuzzle[props.rownum][ind] != 0 ? 'bold square' : 'blue square'}>
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