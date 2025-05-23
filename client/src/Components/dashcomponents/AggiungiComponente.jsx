import React, { use } from 'react'
import  {Link} from 'react-router-dom'
import { useState } from 'react';
import logo from "../../assets/images/logo-autoparts-footer.svg";




function AggiungiComponente({ urlImmagine }) {

    console.log(urlImmagine)

      const [nome, setNome] = useState()
      const [descrizione, setDescrizione] = useState()
      const [codice, setCodice] = useState('')
      const [condizione, setCondizione] = useState('')
      const [peso, setPeso] = useState('')
      const [categoria, setCategoria] = useState('')
      const [scaffale, setScaffale] = useState('')
      const [campata, setCampata] = useState('')
      const [ripiano, setRipiano] = useState('')
      const [cassetta, setCassetta] = useState('')
      const [annoImmatricolazione, setAnnoImmatricolazione] = useState('')
      const [marca, setMarca] = useState('')
      const [modello, setModello] = useState('')
      const [versione, setVersione] = useState('')
      const [file, setFile] = useState('')





      const handleSubmit = async (e) => {
        e.preventDefault()
        setFile(urlImmagine)

        const componente = {nome, categoria, descrizione, codice, condizione, peso, scaffale, campata, ripiano, cassetta, marca, modello, versione, annoImmatricolazione, urlImmagine}

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
    <label htmlFor="nome" className="text-primary">
          <strong>Nome Componente</strong>
    </label>
    <input
          type="text"
          placeholder="Inserisci nome Componente"
          autoComplete="off"
          name="text"
          className="form-control rounded-0"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
          required={true}
        />
    </div>
    <div className="mb-3 col-md-3">
        <label htmlFor="descrizione" className="text-primary">
          <strong>Descrizione Componente</strong>
        </label>
        <input
          type="text"
          placeholder="Inserisci descrizione Componente"
          autoComplete="off"
          name="text"
          className="form-control rounded-0"
          onChange={(e) => setDescrizione(e.target.value)}
          value={descrizione}
          required={true}
        />
      </div>
    <div className="mb-3 col-md-4">
        <label htmlFor="categoria" className="text-primary">
          <strong>Categoria Componente</strong>
        </label>
        <input
          type="text"
          placeholder="Inserisci categoria  Componente"
          autoComplete="off"
          value={categoria}
          name="text"
          className="form-control rounded-0"
          onChange={(e) => setCategoria(e.target.value)}

          required={true}
        />
      </div>
    <div className="mb-3 col-md-4">
        <label htmlFor="codice" className="text-primary">
          <strong>Codice Componente</strong>
        </label>
        <input
          type="text"
          placeholder="Inserisci codice Componente"
          autoComplete="off"
          name="text"
          className="form-control rounded-0"
          onChange={(e) => setCodice(e.target.value)}
          value={codice}
          required={true}
        />
      </div>
      <div className="mb-3 col-md-4">
        <label htmlFor="condizione" className="text-primary">
          <strong>Condizione Componente</strong>
        </label>
        <input
          type="text"
          placeholder="Inserisci condizione Componente"
          autoComplete="off"
          name="text"
          className="form-control rounded-0"
          onChange={(e) => setCondizione(e.target.value)}
          value={condizione}
          required={true}
        />
      </div>
      <div className="mb-3 col-md-4">
        <label htmlFor="peso" className="text-primary">
          <strong>Peso Componente</strong>
        </label>
        <input
          type="number"
          placeholder="Inserisci peso Componente"
          autoComplete="off"
          name="text"
          className="form-control rounded-0"
          onChange={(e) => setPeso(e.target.value)}
          value={peso}
          required={true}
        />
      </div>
      <div className="mb-3 col-md-4">
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
          required={true}
        />
      </div>
      <div className="mb-3 col-md-4">
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
          required={true}
        />
      </div>
      <div className="mb-3 col-md-4">
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
          required={true}
        />
      </div>
      <div className="mb-3 col-md-4">
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
          required={true}
        />
      </div>
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
  <button className='btn btn-outline-success mt-3'>Aggiungi Componente</button>
  </div>

    </form>
  )
}

export default AggiungiComponente