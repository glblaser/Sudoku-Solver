import React from 'react'

const Row = props => (
  <tr>
    {props.row.map((square, ind) => {
        return (
          <td colNum={ind} className='square'>
            {square}
          </td>  
        )
    })}
  </tr>
)

export default Row