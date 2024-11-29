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

  let clicked = useLocation();
  prodSingle = clicked.state

  console.log(prodSingle)


  const [comp, setComp] = useState({
    nome: '',
    categoria: ''
  });

  let clicked = useLocation();
  prodSingle = clicked.state


  const navigate = useNavigate();
  
    useEffect(() => {
    axios
      .get(`http://localhost:8080/api/componenti/${prodSingle}`)
      .then((res) => {

        setComp({
          nome: res.data.nome,
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

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
              <div className="mb-3 col-md-6">
                 <label htmlFor='nome'>Nome</label>
              <input
                type='text'
                placeholder= {comp.nome}
                name='nome'
                className='form-control'
                value={comp.nome}
                onChange={onChange}
              />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="categoria" className="text-primary">
                  <strong>Categoria Prodotto</strong>
                </label>
                <input
                  type="text"
                  placeholder="categoria"
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setCategoria(e.target.value)}
                  value={categoria}
                  required={true}
                />
              </div>
              </div>
              <div className="row g-3">

               <div className="mb-3 col-md-6">
                <label htmlFor="descrizione" className="text-primary">
                  <strong>Descrizione Prodotto</strong>
                </label>
                <input
                  type="text"
                  placeholder={e.descrizione}
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setDescrizione(e.target.value)}
                  value={descrizione}
                  required={true}
                />
              </div>
              </div>

               <div className="mb-3 col-md-6">
                <label htmlFor="codice" className="text-primary">
                  <strong>Codice Prodotto</strong>
                </label>
                <input
                  type="text"
                  placeholder={e.codice}
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setCodice(e.target.value)}
                  value={codice}
                  required={true}
                />
              </div>
               <div className="mb-3 col-md-6">
                <label htmlFor="condizione" className="text-primary">
                  <strong>Condizione Prodotto</strong>
                </label>
                <input
                  type="text"
                  placeholder={e.condizione}
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setCondizione(e.target.value)}
                  value={condizione}
                  required={true}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="peso" className="text-primary">
                  <strong>Peso Prodotto</strong>
                </label>
                <input
                  type="text"
                  placeholder={e.peso}
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setPeso(e.target.value)}
                  value={peso}
                  required={true}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="scaffale" className="text-primary">
                  <strong>Scaffale</strong>
                </label>
                <input
                  type="text"
                  placeholder={e.scaffale}
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setScaffale(e.target.value)}
                  value={scaffale}
                  required={true}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="campata" className="text-primary">
                  <strong>Campata</strong>
                </label>
                <input
                  type="text"
                  placeholder={e.campata}
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setCampata(e.target.value)}
                  value={campata}
                  required={true}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="ripiano" className="text-primary">
                  <strong>Ripiano</strong>
                </label>
                <input
                  type="text"
                  placeholder={e.ripiano}
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setRipiano(e.target.value)}
                  value={ripiano}
                  required={true}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="cassetta" className="text-primary">
                  <strong>Cassetta</strong>
                </label>
                <input
                  type="text"
                  placeholder={e.cassetta}
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setCassetta(e.target.value)}
                  value={cassetta}
                  required={true}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="marca" className="text-primary">
                  <strong>Marca</strong>
                </label>
                <input
                  type="text"
                  placeholder={e.marca}
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setMarca(e.target.value)}
                  value={marca}
                  required={true}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="modello" className="text-primary">
                  <strong>Modello</strong>
                </label>
                <input
                  type="text"
                  placeholder={e.modello}
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setModello(e.target.value)}
                  value={modello}
                  required={true}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="versione" className="text-primary">
                  <strong>Versione</strong>
                </label>
                <input
                  type="text"
                  placeholder={e.versione}
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setVersione(e.target.value)}
                  value={versione}
                  required={true}
                />
              </div>


              <button type="button" className="btn btn-success" onClick={handleSubmit}>Conferma e salva
  		      </button>


              {error && <div className="error text-danger fs-4 mt-3">{error}</div>}
            </form>
            )
           

            <Link to={`/dashboard`} type="submit" className="btn btn-outline-danger w-100 rounded-0 mt-3">
                Torna Indietro
              </Link>



          </div>
        </div>
      </div>
      </div>

  );

}

export default ModificaComponente



