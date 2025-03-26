import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import {  Link, useLocation,  useNavigate } from 'react-router-dom';
import axios from 'axios';

import logo from "../../assets/images/logo-autoparts-footer.svg";

var prodSingle

const ModificaComponente = () =>{

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-light" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  let clicked = useLocation();
  prodSingle = clicked.state

  const [error, setError] = useState(null)
  const [prodottoSingolo, setProdottoSingolo] = useState([]);

  // Chiamata API al singolo prodotto
  const makeAPICall = async () => {
    try {
      const response = await fetch(`https://autoparts-flame.vercel.app/api/componenti/${prodSingle}`, { mode: 'cors' });
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
      makeAPICall();
  }, [])

  // Use state modifica componenti tranne immagine
  const [comp, setComp] = useState({
    nome: '',
    descrizione:'',
    categoria: '',
    codice: '',
    condizione:'',
    peso: '',
    scaffale:'',
    campata:'',
    ripiano:'',
    cassetta:'',
    annoImmatricolazione:'',
    marca: '',
    modello: '',
    versione:''
  });


     // Set file della modifica immagine
	const [file, setFile ] = useState()

  const navigate = useNavigate();

    useEffect(() => {
    axios
      .get(`https://autoparts-flame.vercel.app/api/componenti/${prodSingle}`)
      .then((res) => {

        setComp({
          nome: res.data.nome,
          descrizione:res.data.descrizione,
          categoria: res.data.categoria,
          codice: res.data.codice,
          condizione:res.data.condizione,
          peso:res.data.peso,
          scaffale:res.data.scaffale,
          campata:res.data.campata,
          ripiano:res.data.ripiano,
          cassetta:res.data.cassetta,
          annoImmatricolazione:res.data.annoImmatricolazione,
          marca:res.data.marca,
          modello:res.data.modello,
          versione:res.data.versione
          });
          console.log(res)
      })
      .catch((err) => {
        console.log('Errore in modifica componente');
      });
  }, [prodSingle]);

  console.log('******')
  console.log(prodSingle)


    const onChange = (e) => {
    setComp({ ...comp, [e.target.name]: e.target.value });
  };

    const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      nome: comp.nome,
      descrizione:comp.descrizione,
      categoria: comp.categoria,
      codice: comp.codice,
      condizione: comp.condizione,
      peso: comp.peso,
      scaffale:comp.scaffale,
      campata:comp.campata,
      ripiano:comp.ripiano,
      cassetta:comp.cassetta,
      annoImmatricolazione:comp.annoImmatricolazione,
      marca:comp.marca,
      modello:comp.modello,
      versione:comp.versione,
      file:comp.file
    };

    axios
      .patch(`https://autoparts-flame.vercel.app/api/componenti/modifica/${prodSingle}`, data)
      .then((res) => {
        navigate(`/dashboardpage`);
      })
      .catch((err) => {
        console.log(err)
        console.log('Error in AggiornaInfoComp!');
      });
  };

        const modImage = () =>{

        const formdata = new FormData()
        formdata.append('file', file)
        axios.patch(`https://autoparts-flame.vercel.app/api/componenti/aggiornaimage/${prodSingle}`, formdata)
        .then(res=> res.status == 200 ? alert('Immagine caricata correttamente') : false)
         .catch(err => setError(err))
        console.log(error)
        console.log(file)
      }

	// Modale
	      function closeModal(){
        document.getElementById('modale_mod_img').classList.remove("d-block")

      }
      function openModal(e){
	  e.preventDefault()
        document.getElementById('modale_mod_img').classList.add("d-block")

      }

    return (
      <div className={"container-fluid pt-0 " + bgType}>
      <div className={"container py-5 " + bgType}>

        <div className="d-flex justify-content-center align-items-center py-5">
          <div className={"p-3 rounded w-100 " + bgType + textType}>
            <h2 className={textType}>Visualizza/  Modifica componente</h2>
		 {prodottoSingolo.map((e) => {
                return (

            <form onSubmit={onSubmit} key={e.unicoID}>
              <div className="row g-3">
              <div className="mb-3 col-md-10">
                  <p>Clicca sull'immagine per modificarla</p>
                  <button className='btn' onClick={(e)=>openModal(e)}>
                  <img src={`https://autoparts-flame.vercel.app/images/${e.file}`} style={{ width: 320 }} />
                  </button>

                </div>
                <div className="mb-3 col-md-4">
                  <label htmlFor='nome'>Nome</label>
                    <input
                      type='text'
                      placeholder= {e.nome}
                      name='nome'
                      className='form-control'
                      value={comp.nome}
                      onChange={onChange}
                    />
                </div>
                <div className="mb-3 col-md-4">
                  <label htmlFor='descrizione'>Descrizione</label>
                    <input
                      type='text'
                      placeholder= {e.descrizione}
                      name='descrizione'
                      className='form-control'
                      value={comp.descrizione}
                      onChange={onChange}
                    />
                </div>
                <div className="mb-3 col-md-4">
                  <label htmlFor='categoria'>Categoria</label>
                    <input
                      type='text'
                      placeholder={e.categoria}
                      name='categoria'
                      className='form-control'
                      value={comp.categoria}
                      onChange={onChange}
                    />
                </div>
              </div>
              <div className="row g-3">
              <div className="mb-3 col-md-4">
                  <label htmlFor='codice'>Codice</label>
                    <input
                      type='text'
                      placeholder={e.codice}
                      name='codice'
                      className='form-control'
                      value={comp.codice}
                      onChange={onChange}
                    />
                </div>
                <div className="mb-3 col-md-4">
                  <label htmlFor='condizione'>Condizione</label>
                    <input
                      type='text'
                      placeholder={e.condizione}
                      name='condizione'
                      className='form-control'
                      value={comp.condizione}
                      onChange={onChange}
                    />
                </div>
                <div className="mb-3 col-md-4">
                  <label htmlFor='peso'>Peso</label>
                    <input
                      type='text'
                      placeholder={e.peso}
                      name='peso'
                      className='form-control'
                      value={comp.peso}
                      onChange={onChange}
                    />
                </div>
                <div className="mb-3 col-md-4">
                  <label htmlFor='scaffale'>Scaffale</label>
                    <input
                      type='text'
                      placeholder={e.scaffale}
                      name='scaffale'
                      className='form-control'
                      value={comp.scaffale}
                      onChange={onChange}
                    />
                </div>
                <div className="mb-3 col-md-4">
                  <label htmlFor='campata'>Campata</label>
                    <input
                      type='text'
                      placeholder={e.campata}
                      name='campata'
                      className='form-control'
                      value={comp.campata}
                      onChange={onChange}
                    />
                </div>
                <div className="mb-3 col-md-4">
                  <label htmlFor='ripiano'>Ripiano</label>
                    <input
                      type='text'
                      placeholder={e.ripiano}
                      name='ripiano'
                      className='form-control'
                      value={comp.ripiano}
                      onChange={onChange}
                    />
                </div>
                <div className="mb-3 col-md-4">
                  <label htmlFor='cassetta'>Cassetta</label>
                    <input
                      type='text'
                      placeholder={e.cassetta}
                      name='cassetta'
                      className='form-control'
                      value={comp.cassetta}
                      onChange={onChange}
                    />
                </div>
                <div className="mb-3 col-md-4">
                  <label htmlFor='annoImmatricolazione'>Anno</label>
                    <input
                      type='text'
                      placeholder={e.annoImmatricolazione}
                      name='annoImmatricolazione'
                      className='form-control'
                      value={comp.annoImmatricolazione}
                      onChange={onChange}
                    />
                </div>
                <div className="mb-3 col-md-4">
                  <label htmlFor='marca'>Marca</label>
                    <input
                      type='text'
                      placeholder={e.marca}
                      name='marca'
                      className='form-control'
                      value={comp.marca}
                      onChange={onChange}
                    />
                </div>
                <div className="mb-3 col-md-4">
                  <label htmlFor='modello'>Modello</label>
                    <input
                      type='text'
                      placeholder={e.modello}
                      name='modello'
                      className='form-control'
                      value={comp.modello}
                      onChange={onChange}
                    />
                </div>
                <div className="mb-3 col-md-4">
                  <label htmlFor='versione'>Versione</label>
                    <input
                      type='text'
                      placeholder={e.versione}
                      name='versione'
                      className='form-control'
                      value={comp.versione}
                      onChange={onChange}
                    />
                </div>

              </div>


              <button type='submit' className="btn btn-success">Conferma e salva
  		      </button>


              {error && <div className="error text-danger fs-4 mt-3">{error}</div>}
            </form>
			            )
            })}



            <Link to={`/elencocomponenti`} type="submit" className="btn btn-outline-danger w-100 rounded-0 mt-3">
                Torna Indietro
              </Link>


			<div className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog" id="modale_mod_img">
              <div className='container'>
                <div className='px-5'>
                  <div className="modal-dialog-centered bg-dark" role="document">
                    <div className="modal-content rounded-4 shadow bg-dark" >
                      <div className="modal-header d-flex justify-content-between">

                        <h2 className="modal-title text-white text-center">CARICA IMMAGINE</h2>

                      </div>
                      <div className="modal-body py-3 text-white">
                      <div className="mb-3">
                          <label htmlFor="formFile" className="form-label">Seleziona il file e clicca CARICA</label>
                          <input className="form-control" type="file" required={true} id="formFile" onChange={(e)=> setFile(e.target.files[0])}/>
                          <button className='btn btn-primary mt-3' onClick={modImage}>CARICA</button>
                        {error && <p className='fs-3 text-danger mt-3'>Prego, Seleziona un immagine</p>}

                      </div>

                      </div>

                      <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

                        <div className="modal-footer">
                          <button type="button" onClick={()=>closeModal()} className="btn btn-danger align-items-center" data-bs-dismiss="modal" aria-label="Close">
                          <i className='fa fa-times px-2 fs-4'></i>OK, Chiudi
                          </button>
                        </div>
                      </div>
                  </div>
                  </div>
                </div>

              </div>
              </div>



          </div>
        </div>
      </div>
      </div>

  );

}

export default ModificaComponente



