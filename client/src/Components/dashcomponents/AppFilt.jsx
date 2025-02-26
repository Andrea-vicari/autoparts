
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Lista from './Lista'
import Pagination from './Pagination'


function AppFilt() {
  const [apiUsers, setApiUsers] = useState([])
  // initialize the loading state as true
  const [loading, setLoading] = useState(true)
  // initialize the error state as null
  const [error, setError] = useState(null)
  const [searchItem, setSearchItem] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])
  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType, tableType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
  themeType == "ligth" ? tableType = "table-ligth" : tableType = "table-dark"

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = componenti.slice(indexOfFirstPost, indexOfLastPost);



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
    <><div className='container-fluid pt-1 mt-5 bg-login'>

      <div className='container text-center mt-5 pb-1'>
        <h1 className='display-2 text-white text-uppercase'>Elenco Componenti</h1>
      </div>
    </div>
    <div className="container-fluid mt-0 pt-0">

<div className="row d-flex align-items-end border py-2">


  <div className="col-sm-6">



  </div>



  <div className="col-sm-3">


  </div>

  <div className="col-sm-3 d-flex justify-content-end align-items-center">
    <Link to="/nuovocomponente" type="button" className="btn btn-success">
      <i className="bi bi-plus-circle mx-2">
      </i>Aggiungi Componente
    </Link>
  </div>


</div>


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

      </section></>

	);
}

export default AppFilt
