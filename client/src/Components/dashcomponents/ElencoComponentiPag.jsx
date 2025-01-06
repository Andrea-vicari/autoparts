import React from 'react'
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

var numeroPagina

function ElencoComponentiPag() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType, tableType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
  themeType == "ligth" ? tableType = "table-ligth" : tableType = "table-dark"

  let clicked = useLocation();
  numeroPagina = clicked.state

  console.log("RRR")
  console.log(numeroPagina)

  const { user } = UseAuthContext()

  const [componente, setComponente] = useState([]);
  const [termineRicerca, setTermineRicerca] = useState('');
  const [marca, setMarca] = useState('');
  const [modello, setModello] = useState('');
  const [componSearch, setcomponSearch] = useState([]);
  const [componFilt, setComponFilt] = useState([]);
  const [clickCerca, setclickCerca] = useState(false)
  const [clickFiltra, setclickFiltra] = useState(false)

  const makeAPICall = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/componenti?p=${numeroPagina}`, { mode: 'cors' });
      const componente = await response.json();
      setComponente(componente)

      console.log({ componente })
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (user) {
      makeAPICall();
    }

  })




  const ricercaComp = (e) =>{
   	e.preventDefault()
     setclickCerca(true)
  	cercaComponente()

  }
  const filtraComp = (e) =>{
   	e.preventDefault()
     setclickFiltra(true)
  	filtraComponente()

  }




    const cercaComponente = async () => {
    try {

      const response = await fetch(`http://localhost:8080/api/componenti/cerca/${termineRicerca}`, { mode: 'cors' });

      const componenteSearch = await response.json();


      setcomponSearch(componenteSearch)

      console.log({ componenteSearch })

    }
    catch (e) {
      console.log(e)
    }
  }

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



  return (
    <React.Fragment>
      <div className='container-fluid pt-1 mt-5 bg-login'>

        <div className='container text-center mt-5 pb-1'>
          <h1 className='display-2 text-white text-uppercase'>Elenco Componenti</h1>
        </div>
      </div>

      <section className={"py-3" + " " + bgType + " " + textType}>

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

              <form className="d-flex" role="search" onSubmit={ricercaComp}>
		        <input className="form-control mx-2" type="search" placeholder="Cerca componente" aria-label="Search" onChange={(e) => setTermineRicerca(e.target.value)}
                  value={termineRicerca}
                  required={true}
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



        <div className="container-fluid  mt-3 pt-0">
          <div className="row mb-3">


            <div className='table-responsive-lg'>
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
                {
                  clickCerca == false && clickFiltra == false &&
                  <tbody>
                  {componente.map((e) => {
                    return (
                      <tr key={e._id}>
                        <td><img src={`http://localhost:8080/images/${e.file}`} style={{ width: 120 }} /></td>
                        <td className='pt-3'>{e.codice}</td>
                        <td className='pt-3'>{e.nome}</td>
                        <td className='pt-3'>{e.categoria}</td>
                        <td className='pt-3'>{e.condizione}</td>
                        <td className='pt-3'>{e.marca}</td>
                        <td className='pt-3'>{e.modello}</td>
                        <td className='pt-3'>{e.versione}</td>
                        <td className='pt-3'>{e.annoImmatricolazione}</td>
                        <td className='pt-3'>
                          <p id="modello-componente" className="mb-0">SCAFFALE: {e.scaffale}</p>
                          <p id="modello-componente" className="mb-0 py-0">CAMPATA: {e.campata}</p>
                          <p id="modello-componente" className="mb-0">RIPIANO: {e.ripiano}</p>
                          <p id="modello-componente" className="mb-0">CASSETTA: {e.cassetta}</p>
                        </td>
                        <td className='pt-3'>{e.peso} Kg</td>
                        <td className='pt-3'>
                          <Link to={`/modificacomponente/${e.unicoID}`} state={e.unicoID} type="button" className="btn btn-sm btn-outline-danger mx-1">
                            <i className='bi bi-zoom-in'></i>
                          </Link>
                          <Link to={`/cancellacomponente/${e.unicoID}`} state={e.unicoID} type="button" className="btn btn-sm btn-outline-danger mx-1">
                            <i className='bi bi-trash'></i>
                          </Link>
                          <button type="button" className="btn btn-sm btn-outline-danger mx-1">
                            <i className='bi bi-printer'></i>
                          </button>
                        </td>
                      </tr>
                    )
                  })}


                </tbody>

                }

                {
                  clickCerca == true &&
                  <tbody>
                  {componSearch.map((e) => {
                    return (
                      <tr key={e._id}>
                        <td><img src={`http://localhost:8080/images/${e.file}`} style={{ width: 120 }} /></td>
                        <td className='pt-3'>{e.codice}</td>
                        <td className='pt-3'>{e.nome}</td>
                        <td className='pt-3'>{e.categoria}</td>
                        <td className='pt-3'>{e.condizione}</td>
                        <td className='pt-3'>{e.marca}</td>
                        <td className='pt-3'>{e.modello}</td>
                        <td className='pt-3'>{e.versione}</td>
                        <td className='pt-3'>{e.annoImmatricolazione}</td>
                        <td className='pt-3'>
                          <p id="modello-componente" className="mb-0">SCAFFALE: {e.scaffale}</p>
                          <p id="modello-componente" className="mb-0 py-0">CAMPATA: {e.campata}</p>
                          <p id="modello-componente" className="mb-0">RIPIANO: {e.ripiano}</p>
                          <p id="modello-componente" className="mb-0">CASSETTA: {e.cassetta}</p>
                        </td>
                        <td className='pt-3'>{e.peso} Kg</td>
                        <td className='pt-3'>
                          <Link to={`/modificacomponente/${e.unicoID}`} state={e.unicoID} type="button" className="btn btn-sm btn-outline-danger mx-1">
                            <i className='bi bi-zoom-in'></i>
                          </Link>
                          <Link to={`/cancellacomponente/${e.unicoID}`} state={e.unicoID} type="button" className="btn btn-sm btn-outline-danger mx-1">
                            <i className='bi bi-trash'></i>
                          </Link>
                          <button type="button" className="btn btn-sm btn-outline-danger mx-1">
                            <i className='bi bi-printer'></i>
                          </button>
                        </td>
                      </tr>
                    )
                  })}


                </tbody>
                }
                {
                  clickFiltra == true && clickCerca == false  &&
                  <tbody>
                  {componFilt.map((e) => {
                    return (
                      <tr key={e._id}>
                        <td><img src={`http://localhost:8080/images/${e.file}`} style={{ width: 120 }} /></td>
                        <td className='pt-3'>{e.codice}</td>
                        <td className='pt-3'>{e.nome}</td>
                        <td className='pt-3'>{e.categoria}</td>
                        <td className='pt-3'>{e.condizione}</td>
                        <td className='pt-3'>{e.marca}</td>
                        <td className='pt-3'>{e.modello}</td>
                        <td className='pt-3'>{e.versione}</td>
                        <td className='pt-3'>{e.annoImmatricolazione}</td>
                        <td className='pt-3'>
                          <p id="modello-componente" className="mb-0">SCAFFALE: {e.scaffale}</p>
                          <p id="modello-componente" className="mb-0 py-0">CAMPATA: {e.campata}</p>
                          <p id="modello-componente" className="mb-0">RIPIANO: {e.ripiano}</p>
                          <p id="modello-componente" className="mb-0">CASSETTA: {e.cassetta}</p>
                        </td>
                        <td className='pt-3'>{e.peso} Kg</td>
                        <td className='pt-3'>
                          <Link to={`/modificacomponente/${e.unicoID}`} state={e.unicoID} type="button" className="btn btn-sm btn-outline-danger mx-1">
                            <i className='bi bi-zoom-in'></i>
                          </Link>
                          <Link to={`/cancellacomponente/${e.unicoID}`} state={e.unicoID} type="button" className="btn btn-sm btn-outline-danger mx-1">
                            <i className='bi bi-trash'></i>
                          </Link>
                          <button type="button" className="btn btn-sm btn-outline-danger mx-1">
                            <i className='bi bi-printer'></i>
                          </button>
                        </td>
                      </tr>
                    )
                  })}


                </tbody>
                }



              </table>
            </div>


          </div>
          <nav>
              <ul className="pagination pagination-sm">
                <li className="page-item active" aria-current="page">
                <Link className="page-link" to={"/elencocomponenti/1"}>1</Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to={"/elencocomponenti/2"} state={2}>2</Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to={"/elencocomponenti/3"} state={3}>3</Link>
                </li>

              </ul>
            </nav>
        </div>


      </section>

    </React.Fragment>
  )
}

export default ElencoComponentiPag


