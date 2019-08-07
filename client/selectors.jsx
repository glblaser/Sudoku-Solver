import React from 'react'

const Selectors = props => (
  <div id='selectors'>
    {props.selectors.map((num, ind) => {
      return (
        <a className='numChoices'> 
          {num}
        </a>
      )
    })}
  </div>
)

export default Selectors