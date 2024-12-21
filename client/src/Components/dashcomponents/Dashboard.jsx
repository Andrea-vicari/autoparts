import React from 'react'
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import { Link } from 'react-router-dom';
import nuovoProdImg from '../../assets/images/elenco-prodotti.jpg'
import addProdImg from '../../assets/images/aggiungi-prodotto.jpg'
import consultaImg from '../../assets/images/consultaMagazzino.jpg'
import consultaCat from '../../assets/images/login_bg.jpg'

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

    <div className={"container-fluid pb-5 pt-5"+ " " + bgType + " " + textType} id='pricing'>
        <div className='w-75 mx-auto'>
        <h1 className="section-title pt-5">Dashboard</h1>
        <p className='mb-5 text-center fs-3 lh-1'>Pagina principale dove accedere alle sezioni del gestionale, peer consultare i componenti, aggiungere componenti, consultare il magazzino ed i componenti divisi per categoria</p>
        </div>


        <div className='container'>
            <div className="row row-cols-1 row-cols-md-2 mb-3 text-center">
                <div className="col">
                <div className={"card mb-4 rounded-3 shadow-sm border-primary" + " " + bgType + " " + textType}>
                <div className="card-header py-3 text-bg-primary">
                        <h4 className="my-0 fw-normal">Elenco componenti</h4>
                    </div>
                    <div className="card-body">
                    <img src={nuovoProdImg} className="img-fluid rounded mb-2"/>
                        <p>Accedi alla lista completa dei componenti presenti nel magazzino</p>
                        <Link to="/elencocomponenti" type="button" className="w-100 btn btn-lg btn-primary text-uppercase">Vai all'elenco</Link>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className={"card mb-4 rounded-3 shadow-sm border-primary" + " " + bgType + " " + textType}>
                    <div className="card-header py-3 text-bg-primary">
                        <h4 className="my-0 fw-normal">Aggiungi Componente</h4>
                    </div>
                    <div className="card-body">
                    <img src={addProdImg} className="img-fluid rounded mb-2"/>
                        <p>Sezione dove inserire un nuovo componente nel magazzino</p>
                        <Link to="/nuovocomponente" type="button" className="w-100 btn btn-lg btn-primary text-uppercase">AGGIUNGI COMPONENTE</Link>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className={"card mb-4 rounded-3 shadow-sm border-primary" + " " + bgType + " " + textType}>
                    <div className="card-header py-3 text-bg-primary">
                        <h4 className="my-0 fw-normal">Consulta Magazzino</h4>
                    </div>
                    <div className="card-body">
                    <img src={consultaImg} className="img-fluid rounded mb-2"/>
                        <p>Sezione dove ricercare un componente inserendone ubicazione</p>
                        <Link to="/consultamagazzino" type="button" className="w-100 btn btn-lg btn-primary text-uppercase">CONSULTA MAGAZZINO</Link>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className={"card mb-4 rounded-3 shadow-sm border-primary" + " " + bgType + " " + textType}>
                    <div className="card-header py-3 text-bg-primary">
                        <h4 className="my-0 fw-normal">Consulta Categorie</h4>
                    </div>
                    <div className="card-body">
                    <img src={consultaCat} className="img-fluid rounded mb-2"/>
                        <p>Sezione dove ricercare un componente secondo la categoria</p>
                        <Link to="/consultacategorie" type="button" className="w-100 btn btn-lg btn-primary text-uppercase">CONSULTA CATEGORIE</Link>
                        
                    </div>
                    </div>
                </div>

            </div>
        </div>
        </div>

        </React.Fragment>
    )
}

export default Dashboard

