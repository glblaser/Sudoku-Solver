import React from 'react'

const Selectors = props => (
  <div>
    {props.selectors.map((num, ind) => {
      return (
        <a className='selectors'> 
          {num}
        </a>
      )
    })}
  </div>
)

export default Selectors