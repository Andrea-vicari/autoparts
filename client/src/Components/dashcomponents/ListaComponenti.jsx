import React from 'react'
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Lista from './Lista'
import Pagination from './Pagination'


function ListaComponenti() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType, tableType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
  themeType == "ligth" ? tableType = "table-ligth" : tableType = "table-dark"

  const { user } = UseAuthContext()

  const [componenti, setComponenti] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPge, SetPostsPerPage] = useState(2);
  const [termineRicerca, setTermineRicerca] = useState('');
  const [marca, setMarca] = useState('');
  const [modello, setModello] = useState('');


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/componenti");
        const data = await response.json();
        setComponenti(data);
        console.log(data)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    fetchPosts();
  }, [])






  const filtraComponente = async () => {
    try {

      const response = await fetch(`http://localhost:8080/api/componenti/filtra/${marca}/${modello}`, { mode: 'cors' });

      const componenteFiltr = await response.json();


      setComponFilt(componenteFiltr)

      console.log({ componenteFiltr})

    }
    catch (e) {
      console.log(e)
    }
  }


   const ricaricaPagina = () => {
    //window.location.reload(false);
    alert('TUUCA')
    window.location.href = "/elencocomponenti"
   }

  const ricercaComp = (e) => {


    console.log(e.target.value)

    const risultato = componenti.filter((compon)=>{

      console.log(componenti)
      if(e.target.value === "") return componenti
      return componenti[nome].toLowerCase().includes(e.target.value.toLowerCase)
    })

    setTermineRicerca(e.target.value)
    setComponenti(risultato)

  }


  const filtraComp = (e) => {
    e.preventDefault()
    setclickFiltra(true)
    filtraComponente()

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
    <form className="d-flex" role="search" onSubmit={filtraComp}>
      <input className="form-control mx-2" type="search" placeholder="Inserisci Marca" aria-label="Search" onChange={(e) => setMarca(e.target.value)}
        value={marca}
        required={true}
      />
      <input className="form-control mx-2" type="search" placeholder="Inserisci Modello" aria-label="Search" onChange={(e) => setModello(e.target.value)}
        value={modello}
        required={true}
      />

      <button className="btn btn-outline-success d-flex mx-2" type="submit">
        <i className="bi bi-funnel mx-1">
        </i>Cerca
      </button>
      <button onClick={ricaricaPagina} className="btn btn-danger d-flex">
        <i className="bi bi-trash mx-1">
        </i>Reset
      </button>
    </form>


  </div>



  <div className="col-sm-3">

    <form className="d-flex" role="search">
      <input className="form-control mx-2" type="search" placeholder="Cerca componente" aria-label="Search" onChange={ricercaComp}


      />
      <button className="btn btn-outline-success d-flex" type="submit">
        <i className="bi bi-zoom-in mx-1">
        </i>Cerca
      </button>
    </form>
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
                <Lista componenti={componenti} loading={loading} />
              </tbody>
            </table>

          </div>
        </div>

      </section></>

	);
}

export default ListaComponenti