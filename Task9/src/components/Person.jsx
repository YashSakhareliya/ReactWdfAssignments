import React from 'react'

function Person({person:{name, age}}) {
  return (
    <div>
      <h2>Person name: {name}</h2>
      <h2>Person Age: {age}</h2>
    </div>
  )
}

export default Person
