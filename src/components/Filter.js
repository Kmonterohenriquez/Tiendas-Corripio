import React from 'react'

const Filter = ({data}) => {
  const{section, options}=data;
  return (
    <div id='Filter'>
      <h2>{section}</h2>
      <ul>
      {options.map((option, i)=> <li key={i}>{option}</li>)}
      </ul>
    </div>
  )
}

export default Filter
