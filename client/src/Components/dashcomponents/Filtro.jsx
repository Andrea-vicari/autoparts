
import { useState, useEffect } from 'react'



function Filtro() {

  const [componenti, setComponenti] = useState([])
  // initialize the loading state as true
  const [loading, setLoading] = useState(true)
  // initialize the error state as null
  const [error, setError] = useState(null)
  const [cercaComponente, setCercaComponente] = useState('')
  const [componentiFiltrati, setComponentiFiltrati] = useState([])



  useEffect(() => {
    fetch('http://localhost:8080/api/componenti')
      .then(response => response.json())
      .then(componentiDalServer => {
        console.log("*****")
        console.log(componentiDalServer)
        setComponenti(componentiDalServer)
        setComponentiFiltrati(componentiDalServer)
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
    setCercaComponente(searchTerm)

    // filter the items using the componenti state
    const filteredItems = componenti.filter((user) =>
      user.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setComponentiFiltrati(filteredItems);
  }

   return (
    <>
    <div className='container-fluid pt-1 mt-5 bg-login'>

        <div className='container text-center mt-5 pb-1'>
        <h1 className='display-2 text-white text-uppercase'>Elenco Componenti</h1>
        </div>
        </div>
    <div className='container mt-5 pt-5'>

    <input
        type="text"
        value={cercaComponente}
        onChange={handleInputChange}
        placeholder='Type to search'
      />

      {componentiFiltrati.length === 0
        ? <p>No users found</p>
        : <ul>
          {componentiFiltrati.map(user => <li key={user.unicoID}>{user.nome}</li>)}
        </ul>
      }


    </div>

    </>
  )
}

export default Filtro
