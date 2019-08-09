import React from 'react'

const Selectors = props => (
  <div id='selectors' key={`selectorDiv`}>
    {props.selectors.map((num, ind) => {
      return (
        <a 
          key={`selector-${ind}`}
          className='numChoices'
          onClick={() => {
            props.populateCell(num)
          }}
        >
          {num}
        </a>
      )
    })}
  </div>
)

export default Selectors