import React from 'react'
import { useSelector } from 'react-redux'

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function ListaPienaConsulta ({lista}) {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType, tableType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
  themeType == "ligth" ? tableType = "table-ligth" : tableType = "table-dark"




console.log(typeof lista)

var listaCopia = []

for(let prop in lista){

  listaCopia.push(lista[prop])
}


console.log(listaCopia)


  return (
    <React.Fragment>

      <section className={"py-3" + " " + bgType + " " + textType}>


        <div className="container-fluid  mt-0 pt-0">
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
                  {listaCopia.map((e) => {
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



              </table>
            </div>

          </div>
        </div>


      </section>

    </React.Fragment>
  )
}

export default ListaPienaConsulta



