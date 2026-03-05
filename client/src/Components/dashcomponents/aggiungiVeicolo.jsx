import React, { use } from 'react'
import  {Link} from 'react-router-dom'
import { useState } from 'react';
import logo from "../../assets/images/logo-autoparts-footer.svg";




function AggiungiVeicolo({ urlImmagine }) {

    console.log(urlImmagine)


      const [annoImmatricolazione, setAnnoImmatricolazione] = useState('')
      const [marca, setMarca] = useState('')
      const [modello, setModello] = useState('')
      const [versione, setVersione] = useState('')
      const [file, setFile] = useState('')




      const handleSubmit = async (e) => {
        e.preventDefault()
        setFile(urlImmagine)

        const componente = {{marca, modello, versione, annoImmatricolazione, urlImmagine}}

        console.log(componente)

        const response = await fetch('https://autoparts-flame.vercel.app/api/componenti/crea-componente', {

          method: 'POST',
          body: JSON.stringify(componente),
          headers:{
              'Content-Type': 'application/json'
            }
        })




      }

  return (
    <form onSubmit={handleSubmit} className='mt-5'>
    <div className="row g-3">




      <div className="mb-3 col-md-4">
        <label htmlFor="annoImmatricolazione" className="text-primary">
          <strong>Anno Immatricolazione</strong>
        </label>
        <input
          type="text"
          placeholder="Inserisci anno immatricolazione"
          autoComplete="off"
          name="number"
          className="form-control rounded-0"
          onChange={(e) => setAnnoImmatricolazione(e.target.value)}
          value={annoImmatricolazione}
          required={true}
        />
      </div>
      <div className="mb-3 col-md-4">
        <label htmlFor="marca" className="text-primary">
          <strong>Marca</strong>
        </label>
        <input
          type="text"
          placeholder="Inserisci marca"
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
          placeholder="Inserisci Modello"
          autoComplete="off"
          name="text"
          className="form-control rounded-0"
          onChange={(e) => setModello(e.target.value)}
          value={modello}
          required={true}
        />
      </div>
      <div className="mb-3 col-md-4">
        <label htmlFor="versione" className="text-primary">
          <strong>Versione</strong>
        </label>
        <input
          type="text"
          placeholder="Inserisci Versione"
          autoComplete="off"
          name="text"
          className="form-control rounded-0"
          onChange={(e) => setVersione(e.target.value)}
          value={versione}
          required={true}
        />
      </div>


    </div>

            <div className="mb-3 col-md-4">
  <button className='btn btn-outline-success mt-3'>Aggiungi Veicolo</button>
  </div>

    </form>
  )
}

export default AggiungiVeicolo
