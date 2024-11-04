import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-magazzino-footer.svg";
import { useSelector } from 'react-redux'
import Uploader from "./Uploader";
import uniqid from 'uniqid';

var unicoID = uniqid()


const NuovoProdotto = () =>{



  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-light" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  var today = new Date().toDateString()

  console.log(today)

  console.log("Im am unique")
  console.log(unicoID)


    // Nuovi usestate
    const [nome, setNome] = useState('')
    const [categoria, setCategoria] = useState('')
    const [tipologia, setTipologia] = useState('')
    const [descrizione, setDescrizione] = useState('')
    const [codice, setCodice] = useState('')
    const [condizione, setCondizione] = useState('')
    const [peso, setPeso] = useState('')
    const [scaffale, setScaffale] = useState('')
    const [campata, setCampata] = useState('')
    const [ripiano, setRipiano] = useState('')
    const [cassetta, setCassetta] = useState('')
    const [marca, setMarca] = useState('')
    const [modello, setModello] = useState('')
    const [versione, setVersione] = useState('')
    const [immagine, setimmagine] = useState('')
    const [date, setToday] = useState('')
    const [codUni, setCodUni] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setemptyFields] = useState([])

    // Use state per immagini
    const [file, setFile ] = useState()



    const handleSubmit = async (e) =>{

        e.preventDefault()


        setToday(today)
        setCodUni(unicoID)
        openModal()
        const prodotto = {nome, categoria, tipologia, descrizione, codice, condizione, peso, scaffale, campata, ripiano, cassetta, marca, modello, versione, immagine, unicoID}

        const response = await fetch('http://localhost:8080/api/prodotti', {

            method: 'POST',
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
            setTipologia('')
            setDescrizione('')
            setCodice('')
            setCondizione('')
            setPeso('')
            setScaffale('')
            setCampata('')
            setRipiano('')
            setCassetta('')
            setMarca('')
            setModello('')
            setVersione('')
            // setAnnoImmatricolazione('')
            setimmagine('')
            setCodUni('')
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
            <h2 className={textType}>Aggiungi nuovo prodotto</h2>
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
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
              <div className="mb-3">
                <label htmlFor="categoria" className="text-primary">
                  <strong>Categoria Prodotto</strong>
                </label>
                <input
                  type="text"
                  placeholder="Inserisci categoria  Prodotto"
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setCategoria(e.target.value)}
                  value={categoria}
                  required={true}
                />
              </div>
               <div className="mb-3">
                <label htmlFor="tipologia" className="text-primary">
                  <strong>Tipologia Prodotto</strong>
                </label>
                <input
                  type="text"
                  placeholder="Inserisci tipologia Prodotto"
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setTipologia(e.target.value)}
                  value={tipologia}
                  required={true}
                />
              </div>
               <div className="mb-3">
                <label htmlFor="descrizione" className="text-primary">
                  <strong>Descrizione Prodotto</strong>
                </label>
                <input
                  type="text"
                  placeholder="Inserisci descrizione Prodotto"
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setDescrizione(e.target.value)}
                  value={descrizione}
                  required={true}
                />
              </div>
               <div className="mb-3">
                <label htmlFor="codice" className="text-primary">
                  <strong>Codice Prodotto</strong>
                </label>
                <input
                  type="text"
                  placeholder="Inserisci codice Prodotto"
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setCodice(e.target.value)}
                  value={codice}
                  required={true}
                />
              </div>
               <div className="mb-3">
                <label htmlFor="condizione" className="text-primary">
                  <strong>Condizione Prodotto</strong>
                </label>
                <input
                  type="text"
                  placeholder="Inserisci condizione Prodotto"
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setCondizione(e.target.value)}
                  value={condizione}
                  required={true}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="peso" className="text-primary">
                  <strong>Peso Prodotto</strong>
                </label>
                <input
                  type="text"
                  placeholder="Inserisci peso Prodotto"
                  autoComplete="off"
                  name="text"
                  className="form-control rounded-0"
                  onChange={(e) => setPeso(e.target.value)}
                  value={peso}
                  required={true}
                />
              </div>
              <div className="mb-3">
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
              <div className="mb-3">
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
              <div className="mb-3">
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
              <div className="mb-3">
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
              <div className="mb-3">
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
              <div className="mb-3">
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
              <div className="mb-3">
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

              <Uploader identificativoImg={unicoID}/>

              <button type="button" className="btn btn-primary" onClick={handleSubmit}>Aggiungi Prodotto
  		      </button>


              {error && <div className="error text-danger fs-4 mt-3">{error}</div>}
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

  );

}

export default NuovoProdotto