import React, { useState } from 'react'
import axios from 'axios'
import  {useNavigate, Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from "../../assets/images/logo-magazzino-footer.svg";
import uniqid from 'uniqid';

var unicoID = uniqid()


const NuovoComponente = () => {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-light" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

     const [nome, setNome] = useState()
     const [descrizione, setDescription] = useState()
     const [codUni, setCodUni] = useState('')
     const [categoria, setCategoria] = useState('')
     const [annoImmatricolazione, setAnnoImmatricolazione] = useState('')
     const [file, setFile] = useState()
     const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        setCodUni(unicoID)

        const formData = new FormData()
        formData.append('nome', nome)
        formData.append('descrizione', descrizione),
        formData.append('categoria', categoria),
        formData.append('annoImmatricolazione', annoImmatricolazione),
        formData.append('file', file)
        formData.append('unicoID', unicoID)

        axios.post('http://localhost:8080/api/componenti', formData)
        .then(res => {
            if(res.data === "Success") {
                window.location.href = "/"
            }
        })
        .catch(err => console.log(err))
      }

  return (
    <div className={"container-fluid py-5 " + bgType}>
    <div className={"container py-5 " + bgType}>

      <div className="d-flex justify-content-center align-items-center py-5">
        <div className={"p-3 rounded w-100 " + bgType + textType}>
          <h2 className={textType}>Aggiungi nuovo prodotto</h2>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
            <div className="mb-3 col-md-4">
            <label htmlFor="nome" className="text-primary">
                  <strong>Nome Prodotto</strong>
            </label>
            <input
                  type="text"
                  placeholder="Inserisci nome Prodotto"
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setNome(e.target.value)}
                  value={nome}
                  required={true}
                />
            </div>
            <div className="mb-3 col-md-4">
                <label htmlFor="categoria" className="text-primary">
                  <strong>Categoria Prodotto</strong>
                </label>
                <input
                  type="text"
                  placeholder="Inserisci categoria  Prodotto"
                  autoComplete="off"
                  value={categoria}
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setCategoria(e.target.value)}

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
            </div>

          <input type="file" className="file" placeholder="Select File"
          onChange={e => setFile(e.target.files[0])}/>
          <button>Post</button>
        </form>
          <Link to={`/elencoutenti/`} type="submit" className="btn btn-outline-danger w-100 rounded-0 mt-3">
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
  )
}

export default NuovoComponente