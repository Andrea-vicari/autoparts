import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from "react";
import { Link } from 'react-router-dom';
import ListaVuotaConsulta from './ListaVuotaConsulta'
import ListaPienaConsulta from './ListaPienaConsulta'

function ConsultaMagazzino() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"



  const [scaffale, setScaffale] = useState('')
  const [campata, setCampata] = useState('')
  const [ripiano, setRipiano] = useState('')
  const [cassetta, setCassetta] = useState('')

  const [componente, setComponente] = useState([]);

  const [lunghezzaLista, setlunghezzaLista] = useState(0)


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('somebody clicked me')
    setCampata(campata)
    setCassetta(cassetta)
    setScaffale(scaffale)
    setRipiano(ripiano)

    makeAPICall()

  }

  const makeAPICall = async () => {
    try {
      //const response = await fetch(`http://localhost:8080/api/componenti/magazzino/${percorsoComp.scaffale}/${percorsoComp.campata}/${percorsoComp.ripiano}/${percorsoComp.cassetta}`, { mode: 'cors' });
      const response = await fetch(`http://localhost:8080/api/componenti/magazzino/${scaffale}/${campata}/${ripiano}/${cassetta}`, { mode: 'cors' });

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
				<ListaPienaConsulta lista={{componente}}/>

			}
			{lunghezzaLista == 0 &&
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


