import React from 'react'

const Row = props => (
  <tr>
    {props.row.map((square, ind) => {
      return (
        <td colnum={ind} className='square'>
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