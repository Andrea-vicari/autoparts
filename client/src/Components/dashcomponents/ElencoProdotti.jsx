import React from 'react'
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function ElencoProdotti() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  const role = useSelector((state) => state.setRole.value)

  const { user } = UseAuthContext()

  const [prodotto, setProdotto] = useState([]);
  const [immagine, setImmagine] = useState([]);

  const makePRODOTTICall = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/prodotti`, { mode: 'cors' });
      const prodotto = await response.json();
      setProdotto(prodotto)

      console.log({ prodotto })
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (user) {
      makePRODOTTICall();
    }

  }, [user])

  const makeIMMAGINICall = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/images`, { mode: 'cors' });
      const immagine = await response.json();
      setImmagine(immagine)

      console.log({ immagine })
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (user) {
      makeIMMAGINICall();
    }

  }, [user])

  // Clona array prodotto
  var prodottoCopy = [...prodotto];
  console.log("prodottoCopy")
  console.log(prodottoCopy)

  // Clona array immagini
  var immaginiCopy = [...immagine];
  console.log("immaginiCopy")
  console.log(immaginiCopy)

  /*Looppa in prodottoCopy e se unicoID combacia tra i 2 oggetti
    pusha immagineCaricata in prodottoCopy
  */

  /*
    for (let i = 0; i < prodottoCopy.length; i++) {

    for (let keyprodotto in prodottoCopy[i]) {

      // keyprodotto == "immagine" ? delete prodottoCopy[i][keyprodotto] : true

      }
    }


  prodottoCopy.forEach(function callback(value, index) {
    console.log(index)
    console.log(value.unicoID);
    let immagineDaAggiungere = immaginiCopy[index].immagineCaricata
    console.log(immagineDaAggiungere)
    // value.unicoID == immaginiCopy[index].value.idProdotto ? console.log('yes') : console.log('no')
  });
  */


  return (
    <React.Fragment>
      <div className='container-fluid pt-1 mt-5 bg-stripe'>
        <div className='container text-center mt-5 pb-1'>
          <h1 className='display-2 text-white text-uppercase'>Elenco Prodotti</h1>
        </div>
      </div>

      <section className={"py-3" + " " + bgType + " " + textType}>

        <div className="container-fluid mt-0 pt-0">
        <p>Filtra per:</p>
                    <div className="row border d-flex align-items-center">
                        <div className="col-sm-2 accordion accordion-flush border">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Accordion Item #1
                                </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                </div>
                            </div>
                       </div>
                       <div className="col-sm-2 accordion accordion-flush border">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Accordion Item #1
                                </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                </div>
                            </div>
                       </div>
                       <div className="col-sm-8 d-flex justify-content-end align-items-center">
                            <Link to="/nuovoprodotto" type="button" className="btn btn-success">
                            	<i className="bi bi-plus-circle mx-2">
                            	</i>Aggiungi Prodotto
                            </Link>
                       </div>


                    </div>


        </div>
        <div className="container-fluid  mt-0 pt-0">
            <div className="row mb-3">

              <div className="col-md-12">
                <div className="p-3 mb-2">

                <div className="row bg-body-tertiary pt-3">
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
                      <p>ID</p>
                    </div>
                    <div className="col-sm-1">
                      <p>CATEGORIA</p>
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
                      <p>UBICAZIONE</p>
                    </div>
                    <div className="col-sm-1">
                      <p>PESO</p>
                    </div>
                    <div className="col-sm-2">
                      <p>GESTISCI</p>
                    </div>
                </div>
                {prodotto.map((e) => {
                return (
                <div className="row pt-2"key={e._id}>
                    <div className="col-sm-1">
                      <img src={`http://localhost:8080/images/${e.immagine}`} style={{ width: 80 }} />

                    </div>
                    <div className="col-sm-1">
                      <p className="fs-6">{e.unicoID}</p>
                    </div>
                    <div className="col-sm-1">
                      <p className="fs-6">{e.nome}</p>
                    </div>
                    <div className="col-sm-1">
                      <p className="fs-6">{e.codice}</p>
                    </div>
                    <div className="col-sm-1">
                      <p>CATEGORIA</p>
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
                      <p>UBICAZIONE</p>
                    </div>
                    <div className="col-sm-1">
                      <p>PESO</p>
                    </div>
                    <div className="col-sm-2">
                      <button type="button" className="btn btn-sm btn-outline-primary mx-1">
                        <i className='bi bi-zoom-in'></i>
                      </button>
                      <Link to={`/cancellaprodotto/${e.unicoID}`} state={e.unicoID} type="button" className="btn btn-sm btn-outline-primary mx-1">
                        <i className='bi bi-trash'></i>
                      </Link>
                      <button type="button" className="btn btn-sm btn-outline-primary mx-1">
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

export default ElencoProdotti
