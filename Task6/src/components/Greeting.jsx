import React from 'react'

function Greeting() {
    const greet = { name: 'Yash', date: new Date().toISOString() } 
  return (
    <div>
      <h1>welcome, {greet.name}</h1>
      <p>Current Date {greet.date}</p>
    </div>
  )
}

export default Greeting
