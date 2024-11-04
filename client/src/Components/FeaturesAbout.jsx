import React from 'react'
import { useSelector } from 'react-redux'
import dumb from '../../src/assets/images/DumbBell-Small.jpg'
import coach from '../../src/assets/images/Coaching-Small.jpg'
import cardio from '../../src/assets/images/Cardio.jpg'
import fitboxe from '../../src/assets/images/Fitboxing.jpg'
import crossfit from '../../src/assets/images/Crossfit.jpg'
import yoga from '../../src/assets/images/Yoga.jpg'


function FeaturesAbout() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"

  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  return (
    <>
      <section id="features" className={"features" + " " + bgType + " " + textType}>
        <div id='features_container' className="container">
          <h1 className="section-title pt-5">Chi siamo</h1>
          <p className='mb-5 text-center fs-3'>Esperienza, Competenza e Passione ci accompagnano dal primo giorno</p>
          <h4 className='text-center mb-3'>Da noi troverai varie attrezzature e corsi per l'esercizio fisico e il benessere. Pesi, macchine cardio, lezioni di gruppo e allenamento personale. I nostri trainer certificati possono aiutarti a raggiungere i tuoi obiettivi di salute e fitness, come aumentare la forza, migliorare la salute cardiovascolare e aumentare la flessibilità.</h4>
          <div className="row pt-3 pb-5 mt-3">
            <div className="col-lg-4 col-md-6 icon-box mb-5 mt-5">
              <div className="icon">
                <img src={crossfit} style={{width:130}} className='rounded-circle px-2'/>
              </div>
              <h4 className="title px-4">Cross-Fit</h4>
              <p className="description px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box mb-5 mt-5">
              <div className="icon">
                <img src={coach} style={{width:130}} className='rounded-circle px-2'/>
              </div>
              <h4 className="title px-4">Gymnastic</h4>
              <p className="description px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box mb-5 mt-5">
              <div className="icon">
                <img src={cardio} style={{width:130}} className='rounded-circle px-2'/>
              </div>
              <h4 className="title px-4">Cardio</h4>
              <p className="description px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box mb-5 mt-5">
              <div className="icon">
                <img src={fitboxe} style={{width:130}} className='rounded-circle px-2'/>
              </div>
              <h4 className="title px-4">Fit-Boxe</h4>
              <p className="description px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box mb-5 mt-5">
              <div className="icon">
                <img src={dumb} style={{width:130}} className='rounded-circle px-2'/>
              </div>
              <h4 className="title px-4">Body Building</h4>
              <p className="description px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box mb-5 mt-5">
              <div className="icon">
                <img src={yoga} style={{width:130}} className='rounded-circle px-2'/>
              </div>
              <h4 className="title px-4">Yoga</h4>
              <p className="description px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default FeaturesAbout