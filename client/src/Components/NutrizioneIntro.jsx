import React from 'react'
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

function NutrizioneIntro() {
    const themeType = useSelector((state) => state.counter.value)

    let bgType, textType;

    themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-black"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  return (
    <React.Fragment>
        <div className={"container-fluid pb-5"+ " " + bgType + " " + textType} id='pricing'>
        <h1 className="section-title pt-5">NUTRIZIONE & diet planS</h1>
        <div className='container'>
        <p className='mb-5 text-center fs-3'>Un'idea nata dalla collaborazione tra il nostro Fitness Center e la dott.ssa Claudia, esperta nutrizionista. Abbiamo selezionato materie prime di altissima qualità, per garantirti la migliore integrazione tra sport e vita</p>
        </div>

        <div className={"container col-xxl-8 px-4 py-5" + " " + bgType + " " + textType}>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src={'https://placehold.co/700x500'} className="d-block mx-lg-auto img-fluid" alt="Nutrizione e diete personalizzati" width="700" height="500" loading="lazy"/>
            </div>
            <div className="col-lg-6">
                <h1 className={"mb-1" + " " + textType}>B-COMPLEX Bio Active</h1>
                <h2 className="lead">PER AVERE PIU' ENERGIA E CONCENTRAZIONE</h2>
                <p className="lead">Integratore vitaminico del complesso B, vitamina C e ed estratto di Vitis Vinifera. Utile per avere un validio supporto nei periodi di stress psico-fisico</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link to={'/nutrizione'} type="button" className="btn btn-primary btn-lg px-4 me-md-2">Altri integratori</Link>

                </div>
            </div>
            </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default NutrizioneIntro