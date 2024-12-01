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
    categoria: ''
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
      categoria: comp.categoria
    };

    axios
      .put(`http://localhost:8080/api/componenti/tryaggiorna/${prodSingle}`, data)
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

            <form onSubmit={onSubmit}>
              <div className="row g-3">
              <div className="mb-3 col-md-4">
                 <label htmlFor='nome'className="text-primary">Nome</label>
              <input
                type='text'
                placeholder= 'Inserisci nome'
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
                placeholder= 'Inserisci descrizione'
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
                placeholder='Inserisci Categoria'
                name='categoria'
                className='form-control'
                value={comp.categoria}
                onChange={onChange}
              />
              </div>
              </div>
              <div className="row g-3">

               <div className="mb-3 col-md-6">

              </div>
              </div>


              <button type='submit' className="btn btn-success">Conferma e salva
  		      </button>


              {error && <div className="error text-danger fs-4 mt-3">{error}</div>}
            </form>



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



