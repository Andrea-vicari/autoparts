import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import { UseAuthContext } from "../../hooks/UseAuthContext";
import {  Link, useLocation, Navigate, useNavigate } from 'react-router-dom';

import logo from "../../assets/images/logo-magazzino-footer.svg";

var prodSingle

const ModificaComponente = () =>{

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-light" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"


  const { user } = UseAuthContext()
  console.log(user)

  let clicked = useLocation();
  prodSingle = clicked.state

  console.log(prodSingle)

    const [prodottoSingolo, setProdottoSingolo] = useState([]);
    const [nome, setNome] = useState('')
    const [categoria, setCategoria] = useState('')
    // const [descrizione, setDescrizione] = useState('')
    // const [codice, setCodice] = useState('')
    // const [condizione, setCondizione] = useState('')
    // const [peso, setPeso] = useState('')
    // const [scaffale, setScaffale] = useState('')
    // const [campata, setCampata] = useState('')
    // const [ripiano, setRipiano] = useState('')
    // const [cassetta, setCassetta] = useState('')
    // const [marca, setMarca] = useState('')
    // const [modello, setModello] = useState('')
    // const [versione, setVersione] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setemptyFields] = useState([])



  const makeAPICall = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/componenti/${prodSingle}`, { mode: 'cors' });
      const prodottoSingolo = await response.json();
      setProdottoSingolo(prodottoSingolo)
      console.log("======")
      console.log({prodottoSingolo})
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


    const handleSubmit = async () =>{




        openModal()
        const prodotto = {nome, categoria}

        const response = await fetch(`http://localhost:8080/api/componenti/aggiorna/${prodSingle}`, {

            method: 'PATCH',
            body: JSON.stringify(prodotto),
            headers:{
                'Content-Type': 'application/json'
              }
        })


        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setemptyFields(json.emptyFields)
        }

        if(response.ok){
            console.log('Aggiunto', json)
            // New
            setNome('')
            setCategoria('')
            setError(null)
            setemptyFields([])
        }


    }

    function closeModal(){
      document.getElementById('modale_prodotto').classList.remove("d-block")
    }
    function openModal(){
      document.getElementById('modale_prodotto').classList.add("d-block")
    }




    return (
      <div className={"container-fluid py-5 " + bgType}>
      <div className={"container py-5 " + bgType}>

        <div className="d-flex justify-content-center align-items-center py-5">
          <div className={"p-3 rounded w-100 " + bgType + textType}>
            <h2 className={textType}>Visualizza / Modifica prodotto</h2>
            {prodottoSingolo.map((e) => {
                return (

            <form>
              <div className="row g-3">
              <div className="mb-3 col-md-6">
                <label htmlFor="nome" className="text-primary">
                  <strong> Inserisci Nome Componente</strong>
                </label>
                <input
                  type="text"
                  placeholder="inserisci nome"
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setNome(e.target.value)}
                  value={nome}
                  required={true}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="categoria" className="text-primary">
                  <strong>Categoria Prodotto</strong>
                </label>
                <input
                  type="text"
                  placeholder="inserisci categoria"
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setCategoria(e.target.value)}
                  value={categoria}
                  required={true}
                />
              </div>
              </div>

              <button type="button" className="btn btn-success" onClick={handleSubmit}>Conferma e salva
  		      </button>


              {error && <div className="error text-danger fs-4 mt-3">{error}</div>}
            </form>
            )
            })}

            <Link to={`/dashboard`} type="submit" className="btn btn-outline-danger w-100 rounded-0 mt-3">
                Torna Indietro
              </Link>

            {/** MODALE */}
            <div className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog" id="modale_prodotto">
              <div className="modal-dialog-centered modal-xl bg-dark" role="document">
                <div className="modal-content rounded-4 shadow bg-dark" >
                  <div className="modal-header d-flex justify-content-between">
                  <img src={logo} className='img-fluid'></img>
                    <h2 className="modal-title text-white text-center">prodotto AGGIUNTO</h2>

                  </div>
                  <div className="modal-body py-3 text-white">

                  <h4 className="text-white mt-3 fw-bold">Prodotto inserito correttamente!</h4>
                    </div>

                  <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

                    <div className="modal-footer">
                      <button type="button" onClick={()=>closeModal()} className="btn btn-danger align-items-center" data-bs-dismiss="modal" aria-label="Close">
                      <i className='bi bi-x-circle px-2 fs-4'></i>Chiudi
                        </button>
                    </div>
                  </div>
              </div>
            </div>
            </div>
            {/** FINE MODALE */}

          </div>
        </div>
      </div>
      </div>

  );

}

export default ModificaComponente



