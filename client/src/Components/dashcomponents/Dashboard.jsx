import React from 'react'
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import { Link } from 'react-router-dom';
import nuovoProdImg from '../../assets/images/elenco-prodotti.jpg'
import addProdImg from '../../assets/images/aggiungi-prodotto.jpg'

function Dashboard() {

    const themeType = useSelector((state) => state.counter.value)

    let bgType, textType;

    themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

    const role = useSelector((state) => state.setRole.value)

    const {user} = UseAuthContext()

    console.log(role)

    return (
        <React.Fragment>

            <section className={"py-3" + " " + bgType + " " + textType}>

                <div className="container">
                    <h1 className="section-title pt-5 mt-5">Dashboard</h1>

                    <div className="container">
                        <div className="row mb-3">



                            {/** Below only for USERS */}
                            {role == "user" &&
                            <div className="col-md-12 mt-5">
                             <div className="p-3 bg-body-tertiary border rounded-3 mb-2">
                                    <div className='row'>
                                        <div className="col-md-3">
                                            <img src={nuovoProdImg} className="img-fluid rounded mb-2"/>
                                            </div>
                                            <div className="col-md-6">
                                                <h2 className="text-primary">Elenco componenti</h2>
                                                <p className="text-secondary">Clicca per visualizzare l'elenco componenti</p>
                                                <Link to="/elencocomponenti" type="button" className="btn btn-sm btn-outline-primary text-uppercase">VAI ALL'ELENCO</Link>
                                            </div>
                                    </div>

                                </div>

                                <div className="p-3 bg-body-tertiary border rounded-3 mb-2">
                                    <div className='row'>
                                        <div className="col-md-3">
                                            <img src={addProdImg} className="img-fluid rounded mb-2"/>
                                            </div>
                                            <div className="col-md-6">
                                                <h2 className="text-primary">Aggiungi Prodotto</h2>
                                                <p className="text-secondary">Clicca per aggiungere un nuovo prodotto</p>
                                                <Link to="/nuovocomponente" type="button" className="btn btn-sm btn-outline-primary text-uppercase">Aggiungi prodotto</Link>
                                            </div>
                                    </div>

                                </div>



                            </div>

                            }

                        </div>
                    </div>
                </div>

            </section>

        </React.Fragment>
    )
}

export default Dashboard

