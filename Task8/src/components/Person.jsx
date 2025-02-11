import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>Person name: {person.name}</h2>
      <h2>Person Age: {person.age}</h2>
    </div>
  )
}

export default Person
