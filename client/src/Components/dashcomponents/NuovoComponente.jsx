import React, { useState } from 'react'
import axios from 'axios'
import  {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from "../../assets/images/logo-autoparts-footer.svg";
import uniqid from 'uniqid';

var unicoID = uniqid()


const NuovoComponente = () => {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-light" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

     const [nome, setNome] = useState()
     const [descrizione, setDescrizione] = useState()
     const [codUni, setCodUni] = useState('')
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
     const [file, setFile] = useState()

     function closeModal(){
      document.getElementById('modale_Componente').classList.remove("d-block")
    }
    function openModal(){
      document.getElementById('modale_Componente').classList.add("d-block")
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        setCodUni(unicoID)

        const formData = new FormData()
        formData.append('nome', nome)
        formData.append('descrizione', descrizione),
        formData.append('categoria', categoria),
        formData.append('annoImmatricolazione', annoImmatricolazione),
		    formData.append('codice', codice),
		    formData.append('condizione', condizione),
        formData.append('file', file),
		    formData.append('peso', peso),
		    formData.append('scaffale', scaffale),
		    formData.append('campata', campata),
		    formData.append('ripiano', ripiano),
		    formData.append('cassetta', cassetta),
		    formData.append('marca', marca),
		    formData.append('modello', modello),
		    formData.append('versione', versione),
        formData.append('unicoID', unicoID)

        axios.post('https://autoparts-flame.vercel.app/api/componenti', formData)
        .then(res => {
            if(res.data === "Success") {
                openModal()
            }
        })
        .catch(err => console.log(err))
      }



  return (
    <div className={"container-fluid py-5 " + bgType}>
    <div className={"container py-5 " + bgType}>

      <div className="d-flex justify-content-center align-items-center py-5">
        <div className={"p-3 rounded w-100 " + bgType + textType}>
          <h2 className={textType}>Aggiungi nuovo componente</h2>
          <form onSubmit={handleSubmit}>
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
            <label htmlFor="immagine" className="text-primary">
               <strong>Carica Immagine</strong>
            </label>
               <input type="file" className="file" placeholder="Select File"
          		onChange={e => setFile(e.target.files[0])}/>


            </div>
                    <div className="mb-3 col-md-4">
          <button className='btn btn-outline-success mt-3'>Aggiungi Componente</button>
          </div>

        </form>
        <div className="mb-3 col-md-4">
          <Link to={`/dashboardpage`} type="submit" className="btn btn-outline-danger w-100 rounded-0 mt-3">
              Torna alla Dashboard
            </Link>
	      </div>
          {/** MODALE */}
          <div className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog" id="modale_Componente">
            <div className="modal-dialog-centered modal-fullscreen-md-down bg-dark" role="document">
              <div className="modal-content rounded-4 shadow bg-dark" >
                <div className="modal-header d-flex justify-content-between">
                <img src={logo} className='img-fluid'></img>
                  <h2 className="modal-title text-white text-center">Componente AGGIUNTO</h2>

                </div>
                <div className="modal-body py-3 text-white">

                <h4 className="text-white mt-3 fw-bold">Componente inserito correttamente!</h4>
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
  )
}

export default NuovoComponente
