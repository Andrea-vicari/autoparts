import React from 'react'
import Resume from "../assets/pdf/Resume.pdf"
import { Link } from 'react-router-dom'

function CallToActionSmall() {
    return (
        <section className="bg-network py-5">

            <div className="container py-5">

                <div className="row d-flex align-items-center">
                    <div className="col-md-8">

                    </div>
                    <div className="col-md-4 mt-3">
                    <div className="card">
                        <div className="card-body">
                                <h2 className='text-primary text-uppercase'>perche sceglierci</h2>
                    <p>I nostri istruttori di fitness motivano e supportano i propri clienti nel raggiungimento dei loro obiettivi di fitness, fornendo indicazioni sulle tecniche di esercizio corrette e modificando gli esercizi secondo necessità.</p>
                    <ul className='list-unstyled'>
                        <li className='mt-2'><i className="bi bi-chevron-right text-primary"></i> <strong>Trainers certificati</strong></li>
                        <li className='mt-2'><i className="bi bi-chevron-right text-primary"></i> <strong>Small group training</strong></li>
                        <li className='mt-2'><i className="bi bi-chevron-right text-primary"></i> <strong>Misurazioni antropometriche</strong></li>

                    </ul>

                    <Link className={"btn btn-lg mt-5 btn-primary"} to="/contatti"><i className="bi bi-arrow-right-circle-fill"></i> Richiedi info!</Link>

                        </div>
                    </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default CallToActionSmall