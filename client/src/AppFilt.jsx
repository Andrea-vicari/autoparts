// src/App.jsx
import { useState, useEffect } from 'react'

// We no longer need the users variable so you can remove it from here

function AppFilt() {
  // add this state
  const [apiUsers, setApiUsers] = useState([])
  const [searchItem, setSearchItem] = useState('')
  // set the initial state of filteredUsers to an empty array
  const [filteredUsers, setFilteredUsers] = useState([])


  // fetch the users
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      // save the complete list of users to the new state
      .then(data => setApiUsers(data.users))
      // if there's an error we log it to the console
      .catch(err => console.log(err))
  }, [])

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    // filter the items using the apiUsers state
    const filteredItems = apiUsers.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  }

  return (
    <div>      
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
    </div>
  )
}

export default AppFilt
