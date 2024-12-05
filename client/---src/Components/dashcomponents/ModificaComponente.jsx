import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import { UseAuthContext } from "../../hooks/UseAuthContext";
import {  Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

import logo from "../../assets/images/logo-magazzino-footer.svg";

var prodSingle

const ModificaComponente = () =>{

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-light" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"


  const { user } = UseAuthContext()
  console.log(user)

  const [error, setError] = useState(null)
  const [prodottoSingolo, setProdottoSingolo] = useState([]);

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
    versione:'',
    // file:''
  });

  let clicked = useLocation();
  prodSingle = clicked.state

  console.log(prodSingle)




  const navigate = useNavigate();

    useEffect(() => {
    axios
      .get(`http://localhost:8080/api/componenti/${prodSingle}`)
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
          versione:res.data.versione,
          // file:res.data.files[0]
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
      // file:comp.file
    };

    axios
      .put(`http://localhost:8080/api/componenti/modifica/${prodSingle}`, data)
      .then((res) => {
        navigate(`/dashboardpage`);
      })
      .catch((err) => {
        console.log(err)
        console.log('Error in AggiornaInfoComp!');
      });
  };


    return (
      <div className={"container-fluid py-5 " + bgType}>
      <div className={"container py-5 " + bgType}>

        <div className="d-flex justify-content-center align-items-center py-5">
          <div className={"p-3 rounded w-100 " + bgType + textType}>
            <h2 className={textType}>Visualizza / Modifica prodotto</h2>
		 {prodottoSingolo.map((e) => {
                return (

            <form onSubmit={onSubmit}>
              <div className="row g-3">
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



          </div>
        </div>
      </div>
      </div>

  );

}

export default ModificaComponente


