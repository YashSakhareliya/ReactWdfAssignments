import React from 'react'

function Person(props) {
  return (
    <div>
      <h2>Person name: {props.name}</h2>
      <h2>Person Age: {props.age}</h2>
    </div>
  )
}

export default Person
