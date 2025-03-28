import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import LigthBox from './LigthBox';
var singolaCat

function SingolaCategoria() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType, tableType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
  themeType == "ligth" ? tableType = "table-ligth" : tableType = "table-dark"

  let clicked = useLocation();

  singolaCat = clicked.state

  console.log('SINGOLA CATEGORIA DA MOSTRARE')
  console.log(singolaCat)

  const [componente, setComponente] = useState([]);

  const makeAPICall = async () => {
    try {
      const response = await fetch(`https://autoparts-flame.vercel.app/api/componenti/singolacategoria/${singolaCat}`, { mode: 'cors' });
      const componente = await response.json();
      setComponente(componente)

      console.log({ componente })
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
      makeAPICall();
  }, [])





  return (
    <React.Fragment>
      <div className='container-fluid pt-1 mt-5 bg-login'>

        <div className='container text-center mt-5 pb-1'>
          <h1 className='display-2 text-white text-uppercase'>{singolaCat}</h1>
        </div>
      </div>


      <div className="container-fluid mt-3 pt-3">
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
              <tbody>
                {componente.map((e) => {
                  return (
                    <tr key={e._id}>
                      <td><LigthBox immagine={e.file}/></td>
                      {/*<td><img src={`https://autoparts-flame.vercel.app/images/${e.file}`} style={{ width: 120 }} /></td>*/}                      
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



            </table>
          </div>

        </div>

      </div>

    </React.Fragment>
  )
}

export default SingolaCategoria


