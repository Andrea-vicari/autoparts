import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Lista from './Lista'
import ScaricaListaCompCSV from './ScaricaListaCompCSV';
// import Etichetta from './Etichetta';
import Pagination from './Pagination'


function ListaComponenti() {


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
  const [componentiFiltrati, setComponentiFiltrati] = useState([])
  const [marcaFilter, setMarcaFilter] = useState('');
  const [modelloFilter, setModelloFilter] = useState('');
  const [nomeFilter, setNomeFilter] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    fetch('https://autoparts-flame.vercel.app/api/componenti')
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

  const resettaRicerca = () =>{
    setMarcaFilter('')
    setModelloFilter('')
    setNomeFilter('')
  }

  const filteredProducts = componenti.filter((product) =>
    product.marca.toLowerCase().includes(marcaFilter.toLowerCase()) &&
    product.modello.toLowerCase().includes(modelloFilter.toLowerCase()) &&
    product.nome.toLowerCase().includes(nomeFilter.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredProducts.slice(indexOfFirstPost, indexOfLastPost);

  console.log("currentPosts")
  console.log(currentPosts)

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  var totaleComponenti = componenti.length
  console.log(totaleComponenti)

  return (
    <>
      <div className='container-fluid pt-1 mt-5 bg-login d-none d-sm-block'>
        <div className='container text-center mt-5 pb-1'>
          <h1 className='display-2 text-white text-uppercase'>Elenco Componenti</h1>
        </div>
      </div>

      <div className={"container-fluid mb-0 py-3" + " " + bgType + " " + textType}>
        <h4 className="mx-2 mb-1" id='filtro_compon'>Filtra il componente</h4>
        <div className="row border-bottom">
        <div className="col-sm-6 py-2 pt-3">
        <input
          className="mb-2 mx-2 pb-1"
          type="text"
          placeholder="Inserisci il nome"
          value={nomeFilter}
          onChange={(e) => setNomeFilter(e.target.value)}
        />
        <input
          className="mb-2 mx-2 pb-1"
          type="text"
          placeholder="Inserisci la marca"
          value={marcaFilter}
          onChange={(e) => setMarcaFilter(e.target.value)}
        />
        <input
          className="mb-2 mx-2 pb-1"
          type="text"
          placeholder="Inserisci il modello"
          value={modelloFilter}
          onChange={(e) => setModelloFilter(e.target.value)}
        />

        <button className='btn btn-outline-info py-1 rounded-0' onClick={()=>resettaRicerca()}>RESET</button>
        </div>
        <div className="col-sm-2 d-none d-sm-block">
        <div className='py-4'>
          <label>
          Componenti per pagina:
          <select value={postsPerPage}
            onChange={e => setPostsPerPage(e.target.value)}
            className='mx-3' name="compPerPage">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </label>
        </div>


        </div>

          <div className="col-sm-2 d-none d-sm-flex justify-content-end">
            <div className='pt-3'>

              <ScaricaListaCompCSV componenti={componenti}/>

            </div>
          </div>
          <div className="col-sm-2 d-none d-sm-flex justify-content-end">
            <div className='pt-3'>

              <Link to="/nuovocomponente" type="button" className="btn btn-outline-success rounded-0">
                <i className="bi bi-plus-circle mx-2">
                </i>Aggiungi Componente
              </Link>

            </div>
          </div>
        </div>

      </div>


          <section className={"py-3" + " " + bgType + " " + textType}>
        <div className="container-fluid mt-1 pt-0">
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
  );
}

export default ListaComponenti;
