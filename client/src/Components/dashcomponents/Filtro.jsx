
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Lista from './Lista'
import Pagination from './Pagination'



function Filtro() {

    const themeType = useSelector((state) => state.counter.value)

  let bgType, textType, tableType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
  themeType == "ligth" ? tableType = "table-ligth" : tableType = "table-dark"

  const [componenti, setComponenti] = useState([])
  // initialize the loading state as true
  const [loading, setLoading] = useState(true)
  // initialize the error state as null
  const [error, setError] = useState(null)
  const [cercaComponente, setCercaComponente] = useState('')
  const [componentiFiltrati, setComponentiFiltrati] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, SetPostsPerPage] = useState(2);




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
    const filteredItems = componenti.filter((componente) =>
      componente.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setComponentiFiltrati(filteredItems);
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = componenti.slice(indexOfFirstPost, indexOfLastPost);

  console.log("currentPosts")
  console.log(currentPosts)

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
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
          {componentiFiltrati.map(componente => <li key={componente.unicoID}>{componente.nome}</li>)}
        </ul>
      }


    </div>
    <section className={"py-3" + " " + bgType + " " + textType}>
        <div className="container-fluid mt-2 pt-0">
          <div className='table-responsive-lg mt-2'>
            <table className={"table table-striped table-hover" + " " + tableType}>
              <thead className='text-uppercase'>
                <tr>
                  <th scope="col">Immagine</th>
                  <th scope="col">Codice</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Cat</th>
                  <th scope="col">Condizione</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Modello</th>
                  <th scope="col">Versione</th>
                  <th scope="col">Anno</th>
                  <th scope="col">Ubicazione</th>
                  <th scope="col">Peso</th>
                  <th scope="col">Gestisci</th>
                </tr>
              </thead>
              <tbody>
                <Lista componenti={currentPosts} loading={loading} />
              </tbody>
            </table>
            <Pagination length={componenti.length} postsPerPage={postsPerPage} handlePagination={handlePagination} currentPage={currentPage} />
          </div>
        </div>

    </section>

    </>
  )
}

export default Filtro
