import React from 'react'
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ElencoConsultaMagazzino from "./ElencoConsultaMagazzino";

function ConsultaMagazzino() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"


  const { user } = UseAuthContext()

  	 const [scaffale, setScaffale] = useState('')
	 const [campata, setCampata] = useState('')
	 const [ripiano, setRipiano] = useState('')
	 const [cassetta, setCassetta] = useState('')



const handleSubmit = (e) => {
  e.preventDefault()
setCampata(campata)
setCassetta(cassetta)
}

  return (
    <React.Fragment>
      <div className='container-fluid pt-1 mt-5 bg-login'>

        <div className='container text-center mt-5 pb-1'>
          <h1 className='display-5 text-white text-uppercase'>Consulta Magazzino</h1>
          <h5 className='text-white'>Inserisci l'ubicazione e trova i componenti realativi alla posizione scelta</h5>

        </div>
      </div>

      <section className={"py-3" + " " + bgType + " " + textType}>

        <div className="container mt-0 pt-0">
            <div className="d-flex justify-content-center align-items-center py-5">
          <div className={"p-3 rounded w-100 " + bgType + textType}>
            <h2 className={textType}>Inserisci Scaffale, Campata, Ripiano e cassetta e poi clicca Consulta</h2>
			<form onSubmit={handleSubmit}>
			<div className="row g-3">
			  <div className="mb-3 col-md-2">
                <label htmlFor="scaffale" className="text-primary">
                  <strong>Scaffale</strong>
                </label>
                <input
                  type="text"
                  placeholder="Inserisci scaffale"
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setScaffale(e.target.value)}
                  value={scaffale}
                  required={false}
                />
              </div>


			  <div className="mb-3 col-md-2">
                <label htmlFor="campata" className="text-primary">
                  <strong>Campata</strong>
                </label>
                <input
                  type="text"
                  placeholder="Inserisci campata"
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setCampata(e.target.value)}
                  value={campata}
                  required={false}
                />
              </div>

			  <div className="mb-3 col-md-2">
                <label htmlFor="ripiano" className="text-primary">
                  <strong>Ripiano</strong>
                </label>
                <input
                  type="text"
                  placeholder="Inserisci ripiano"
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setRipiano(e.target.value)}
                  value={ripiano}
                  required={false}
                />
              </div>
			  <div className="mb-3 col-md-2">
                <label htmlFor="cassetta" className="text-primary">
                  <strong>Cassetta</strong>
                </label>
                <input
                  type="text"
                  placeholder="Inserisci cassetta"
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setCassetta(e.target.value)}
                  value={cassetta}
                  required={false}
                />
              </div>
              <Link to={`/elencoconsultamagazzino/${scaffale}/${campata}/${ripiano}/${cassetta}`} state={{"scaffale" : scaffale, "campata": campata, "ripiano": ripiano, "cassetta": cassetta}} className='btn btn-outline-success mt-3 px-2'>
            <i className="bi bi-zoom-in mx-3"></i>
            Consulta
          </Link>

</div>

</form>


            </div>






		</div>

		</div>

      </section>

    </React.Fragment>
  )
}

export default ConsultaMagazzino


