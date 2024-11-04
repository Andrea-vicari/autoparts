import React from 'react'
import CtaImg from "../assets/images/woman-7200534_1280_cropped.jpg"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CallToAction() {

    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType, buttonType;
    themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-black"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
    themeType == "ligth" ? buttonType = "btn-outline-primary" : buttonType = "btn-outline-primary"
  return (
    <React.Fragment>
        <section className={"light-typo py-5 call-to-action"+ " " + bgType + " " + textType}>

        <div className="container px-5">

            <div className="row d-flex align-items-center">
            <div className="col-sm-6">

            <h1 className='text-primary text-uppercase'>Unisciti al Team!</h1>
            <h5>Registrati oggi stesso al nostro sito. Potrai accedere online alle tue schede, registrarne l'esecuzione, potrai prenotare la tua prossima lezione e consultare gli eventi organizzati dal nostro gruppo</h5>
            <h5>Scopri l'importanza di essere affiancato da un Team di esperti nel fitness</h5>
            <hr></hr>
             <ul className='list-unstyled'>
                <li className='mt-2'><i className="bi bi-chevron-right text-primary"></i> <strong>Trainer Certificati</strong></li>
                <li className='mt-2'><i className="bi bi-chevron-right text-primary"></i> <strong>Nutrizione</strong></li>
                <li className='mt-2'><i className="bi bi-chevron-right text-primary"></i> <strong>Misurazioni antropometriche</strong></li>
                <li className='mt-2'><i className="bi bi-chevron-right text-primary"></i> <strong>Schede di allenamento personalizzate</strong></li>
            </ul>

            <Link className={"btn btn-lg mt-5" + " " + buttonType} to="/login"><i className="bi bi-people"></i> ACCEDI / CREA UN ACCOUNT</Link>

            </div>

                <div className="col-sm-6">
                    <img className="img-fluid rounded-4" src={CtaImg} alt=""/>
                </div>



            </div>

        </div>

    </section>
    </React.Fragment>
  )
}

export default CallToAction