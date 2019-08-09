import React from 'react'

const classCalc = (currentPuzzle, currentCell, row, col) => {
  let cls = ''

  if (currentPuzzle[row][col] === 0 && currentCell[0] === row && currentCell[1] === col) {
    cls = 'blue square selected'
  } else if (currentPuzzle[row][col] === 0) {
    cls = 'blue square'
  } else {
    cls = 'bold square'
  }

  return cls
}

const Row = props => (

  
  <tr key={`tr-${props.rownum}`}>
    {props.row.map((square, ind) => {
      return (
        <td
          key={`td-${props.rownum}-${ind}`}
          colnum={ind} 
          id={`row${props.rownum}col${ind}`}
            className={classCalc(props.currentPuzzle, props.currentCell, props.rownum, ind)}
          onKeyUp={props.handleKeyPress}
          onClick={() => {
            props.selectCell(props.rownum, ind)
          }}
        >
          {/* {console.log(props.currentPuzzle[props.rownum][ind])} */}
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