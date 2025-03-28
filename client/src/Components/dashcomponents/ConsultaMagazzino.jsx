import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from "react";
import { Link } from 'react-router-dom';
import ListaVuotaConsulta from './ListaVuotaConsulta'
import LigthBox from './LigthBox';


function ConsultaMagazzino() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType, tableType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
  themeType == "ligth" ? tableType = "table-ligth" : tableType = "table-dark"


  const [scaffale, setScaffale] = useState('')
  const [campata, setCampata] = useState('')
  const [ripiano, setRipiano] = useState('')
  const [cassetta, setCassetta] = useState('')
  const [consultaCliccata, setConsultaCliccata] = useState(false)


  const [componente, setComponente] = useState([]);

  const [lunghezzaLista, setlunghezzaLista] = useState(0)


  const handleSubmit = (e) => {
    e.preventDefault()
    setConsultaCliccata(true)
    setCampata(campata)
    setCassetta(cassetta)
    setScaffale(scaffale)
    setRipiano(ripiano)

    makeAPICall()

  }

  const makeAPICall = async () => {
    try {
          const response = await fetch(`https://autoparts-flame.vercel.app/api/componenti/magazzino/${scaffale}/${campata}/${ripiano}/${cassetta}`, { mode: 'cors' });

      const componente = await response.json();
      setComponente(componente)

      console.log({ componente })
      setlunghezzaLista(componente.length)

    }
    catch (e) {
      console.log(e)
    }
  }

  console.log(lunghezzaLista)

  return (
    <React.Fragment>


      <section className={"py-3" + " " + bgType + " " + textType}>

        <div className="container mt-0 pt-0">
          <div className="d-flex justify-content-center align-items-center py-5">
            <div className={"p-3 rounded w-100 " + bgType + textType}>
              <h2 className={textType}>Inserisci Scaffale, Campata, Ripiano e cassetta e poi clicca Consulta</h2>
              <form validate onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="mb-3 col-md-2">
                    <label htmlFor="scaffale" className="text-primary">
                      <strong>Scaffale</strong>
                    </label>
                    <input
                      type="text"
                      required={true}
                      placeholder="Inserisci scaffale"
                      autoComplete="off"
                      name="text"
                      className="form-control rounded-0"
                      onChange={(e) => setScaffale(e.target.value)}
                      value={scaffale}

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
                      required={true}
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
                      required={true}
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
                      required={true}
                    />
                  </div>

                  <button onSubmit={handleSubmit} className='btn btn-outline-success mt-3 px-2'>
                    <i className="bi bi-zoom-in mx-3"></i>
                    Consulta
                  </button>


                </div>

              </form>
              <Link to={`/dashboardpage/`} className='btn btn-outline-warning mt-3 px-2'>
                <i className="bi bi-arrow-left mx-3"></i>
                Torna alla dashboard senza consultare
              </Link>

			{lunghezzaLista !== 0 &&
				<div className="container-fluid mt-0 pt-0">
        <div className="row mb-3">


          <div className='table-responsive-lg'>
            <table className={"table table-striped table-hover" + " " + tableType}>
              <thead className='text-uppercase'>
                <tr>
                  <th scope="col">Immagine</th>
                  <th scope="col">Codice</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Cat</th>
                  <th scope="col">Condizione</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Modello</th>
                  <th scope="col">Versione</th>
                  <th scope="col">Anno</th>
                  <th scope="col">Ubicazione</th>
                  <th scope="col">Peso</th>
                  <th scope="col">Gestisci</th>
                </tr>
              </thead>
              <tbody>
                {componente.map((e) => {
                  return (
                    <tr key={e._id}>
                      <td><LigthBox immagine={e.file}/></td>
		      {/* <td><img src={`https://autoparts-flame.vercel.app/images/${e.file}`} style={{ width: 120 }} /></td> */}
                      <td className='pt-3'>{e.codice}</td>
                      <td className='pt-3'>{e.nome}</td>
                      <td className='pt-3'>{e.categoria}</td>
                      <td className='pt-3'>{e.condizione}</td>
                      <td className='pt-3'>{e.marca}</td>
                      <td className='pt-3'>{e.modello}</td>
                      <td className='pt-3'>{e.versione}</td>
                      <td className='pt-3'>{e.annoImmatricolazione}</td>
                      <td className='pt-3'>
                        <p id="modello-componente" className="mb-0">SCAFFALE: {e.scaffale}</p>
                        <p id="modello-componente" className="mb-0 py-0">CAMPATA: {e.campata}</p>
                        <p id="modello-componente" className="mb-0">RIPIANO: {e.ripiano}</p>
                        <p id="modello-componente" className="mb-0">CASSETTA: {e.cassetta}</p>
                      </td>
                      <td className='pt-3'>{e.peso} Kg</td>
                      <td className='pt-3'>
                        <Link to={`/modificacomponente/${e.unicoID}`} state={e.unicoID} type="button" className="btn btn-sm btn-outline-danger mx-1">
                          <i className='bi bi-zoom-in'></i>
                        </Link>
                        <Link to={`/cancellacomponente/${e.unicoID}`} state={e.unicoID} type="button" className="btn btn-sm btn-outline-danger mx-1">
                          <i className='bi bi-trash'></i>
                        </Link>
                        <button type="button" className="btn btn-sm btn-outline-danger mx-1">
                          <i className='bi bi-printer'></i>
                        </button>
                      </td>
                    </tr>
                  )
                })}


              </tbody>



            </table>
          </div>

        </div>

      </div>


			}
			{lunghezzaLista == 0 && consultaCliccata == true &&
				<ListaVuotaConsulta />

			}



            </div>

          </div>

        </div>

      </section>

    </React.Fragment>
  )
}

export default ConsultaMagazzino


