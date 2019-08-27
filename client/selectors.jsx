import React from 'react'

const Selectors = props => (
  <div id='selectors' key={`selectorDiv`}>
    {props.selectors.map((num, ind) => {
      return (
        <span
          key={`selector-${ind}`}
          id={`selector-${num}`}
          className='numChoices'
          onClick={() => {
            props.populateCell(num)
          }}
        >
          {num}
        </span>
      )
    })}
  </div>
)

export default Selectors