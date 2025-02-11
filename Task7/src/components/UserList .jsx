import React from 'react'

function UserList () {
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
      ];
  return (
    <div>
        <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li >
            {user.name} - {user.age} years 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList 
