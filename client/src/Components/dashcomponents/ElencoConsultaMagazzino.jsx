import React from 'react'
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

function ElencoConsultaMagazzino({ubicazione}) {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"


  const { user } = UseAuthContext()

  console.log('Sono ubicazione')
  console.log(ubicazione.cassetta)

  const [componente, setComponente] = useState([]);

  const makeAPICall = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/componenti/magazzino/${ubicazione.scaffale}/${ubicazione.campata}/${ubicazione.ripiano}/${ubicazione.cassetta}`, { mode: 'cors' });
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

  }, [user])


  // Clona array componente
  var componenteCopy = [...componente];
  console.log("componenteCopy")
  console.log(componenteCopy)


  return (
    <React.Fragment>


      <section className={"py-3" + " " + bgType + " " + textType}>


        <div className="container-fluid  mt-0 pt-0">
            <div className="row mb-3">

              <div className="col-md-12">
                <div className="p-3 mb-2">

                <div className="row bg-body-secondary pt-3">
                    <div className="col-sm-1">
                      <p>IMMAGINE</p>

                    </div>
                    <div className="col-sm-1">
                      <p>CODICE</p>
                    </div>
                    <div className="col-sm-1">
                      <p>NOME</p>
                    </div>
                   <div className="col-sm-1">
                      <p>CAT.</p>
                    </div>
                    <div className="col-sm-1">
                      <p>MARCA</p>
                    </div>
                    <div className="col-sm-1">
                      <p>MODELLO</p>
                    </div>
                    <div className="col-sm-1">
                      <p>VERSIONE</p>
                    </div>
                    <div className="col-sm-1">
                      <p>IMMATR.</p>
                    </div>

                    <div className="col-sm-1">
                      <p>UBICAZIONE</p>
                    </div>
                    <div className="col-sm-1">
                      <p>PESO</p>
                    </div>
                    <div className="col-sm-2">
                      <p>GESTISCI</p>
                    </div>
                </div>
                {componente.map((e) => {
                return (
                <div id='riga-prodotto' className="border row pt-2 pb-2 d-flex align-items-center"key={e._id}>
                    <div className="col-sm-1">
                      <img src={`http://localhost:8080/images/${e.file}`} style={{ width: 80 }} />

                    </div>
                    <div className="col-sm-1">
                      <p className="fs-6">{e.unicoID}</p>
                    </div>
                    <div className="col-sm-1">
                      <p className="fs-6">{e.nome}</p>
                    </div>
                    <div className="col-sm-1">
                      <p className="fs-6">{e.categoria}</p>
                    </div>
                    <div className="col-sm-1">
                      <p>{e.marca}</p>
                    </div>
                    <div className="col-sm-1">
                      <p className="small">{e.modello}</p>

                    </div>
                    <div className="col-sm-1">
                      <p id="modello-componente">{e.versione}</p>
                    </div>
                    <div className="col-sm-1">
                      <p>{e.annoImmatricolazione}</p>
                    </div>

	              <div className="col-sm-1">
                      <p id="modello-componente" className="mb-0">SCAFFALE: {e.scaffale}</p>
                      <p id="modello-componente" className="mb-0">CAMPATA: {e.campata}</p>
                      <p id="modello-componente" className="mb-0">RIPIANO: {e.ripiano}</p>
                      <p id="modello-componente" className="mb-0">CASSETTA: {e.cassetta}</p>
                    </div>


                    <div className="col-sm-1">
                      <p>{e.peso} Kg</p>
                    </div>
                   <div className="col-sm-2">
                      <Link  to={`/modificacomponente/${e.unicoID}`} state={e.unicoID}type="button" className="btn btn-sm btn-outline-danger mx-1">
                        <i className='bi bi-zoom-in'></i>
                      </Link>
                      <Link to={`/cancellacomponente/${e.unicoID}`} state={e.unicoID} type="button" className="btn btn-sm btn-outline-danger mx-1">
                        <i className='bi bi-trash'></i>
                      </Link>
                      <button type="button" className="btn btn-sm btn-outline-danger mx-1">
                        <i className='bi bi-printer'></i>
                      </button>
                    </div>
                </div>
                )
                })}
                </div>




              </div>



            </div>
          </div>
      </section>

    </React.Fragment>
  )
}

export default ElencoConsultaMagazzino


