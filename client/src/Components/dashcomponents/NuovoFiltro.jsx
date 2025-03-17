import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Lista from './Lista'
import Pagination from './Pagination'



function NuovoFiltro() {


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


  const filteredProducts = componentiFiltrati.filter((product) =>
    product.marca.toLowerCase().includes(marcaFilter.toLowerCase()) &&
    product.modello.toLowerCase().includes(modelloFilter.toLowerCase()) &&
    product.nome.toLowerCase().includes(nomeFilter.toLowerCase())
  );

  return (
    <>
          <div className='container-fluid pt-1 mt-5 bg-login'>

        <div className='container text-center mt-5 pb-1'>
        <h1 className='display-2 text-white text-uppercase'>Elenco Componenti</h1>
        </div>
        </div>

      <div className="container mt-t pt-5">
        <input
          type="text"
          placeholder="Inserisci la marca"
          value={marcaFilter}
          onChange={(e) => setMarcaFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Inserisci il modello"
          value={modelloFilter}
          onChange={(e) => setModelloFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Inserisci il nome del componente"
          value={nomeFilter}
          onChange={(e) => setNomeFilter(e.target.value)}
        />
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.unicoID}>
            {product.nome}
          </li>
        ))}
      </ul>
    </>
  );
}

export default NuovoFiltro;
