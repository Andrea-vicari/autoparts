
import { useState, useEffect } from 'react'



function AppFilt() {
  const [apiUsers, setApiUsers] = useState([])
  // initialize the loading state as true
  const [loading, setLoading] = useState(true)
  // initialize the error state as null
  const [error, setError] = useState(null)
  const [searchItem, setSearchItem] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])



  useEffect(() => {
    fetch('http://localhost:8080/api/componenti')
      .then(response => response.json())
      .then(data => {
        console.log("*****")
        console.log(data)
        setApiUsers(data)
        setFilteredUsers(data)
      })
      .catch(err => {
        console.log(err)
        // update the error state
        setError(err)
      })
      .finally(() => {
        // wether we sucessfully get the users or not,
        // we update the loading state
        setLoading(false)
      })
  }, [])


  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    // filter the items using the apiUsers state
    const filteredItems = apiUsers.filter((user) =>
      user.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  }

   return (
    <>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />

      {filteredUsers.length === 0
        ? <p>No users found</p>
        : <ul>
          {filteredUsers.map(user => <li key={user.unicoID}>{user.nome}</li>)}
        </ul>
      }
    </>
  )
}

export default AppFilt
