import React from 'react'
import { useSelector } from 'react-redux'
import dumb from '../../src/assets/images/DumbBell-Small.jpg'
import coach from '../../src/assets/images/Coaching-Small.jpg'
import personaltraining from '../../src/assets/images/personaltraining.jpg'
import coaching from '../../src/assets/images/Coaching.jpg'
function Services() {

    const themeType = useSelector((state) => state.counter.value)

    let bgType, textType;

    themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

    return (
        <React.Fragment>
            <section id="services" className={"py-3" + " " + bgType + " " + textType}>

                <div className="container">

                <h1 className="section-title pt-5">Benvenuto!</h1>
          <p className='mb-5 text-center fs-3'>Inizia con noi il tuo nuovo progetto di Fitness</p>

                    <div className="row services">
                        <div className="col-sm-3 item text-center">
                            <div className="icon">
                            <img src={coach} style={{width:230}} className='rounded-circle'/>
                            </div>
                            <h3 className='mt-3 text-primary'>SMALL-GROUP TRAINING</h3>
                        </div>
                        <div className="col-sm-3 item text-center">
                            <div className="icon">
                            <img src={dumb} style={{width:230}} className='rounded-circle'/>
                            </div>
                            <h3 className='mt-3 text-primary'>CROSS-FIT</h3>
                        </div>
                        <div className="col-sm-3 item text-center">
                            <div className="icon">
                            <img src={personaltraining} style={{width:230}} className='rounded-circle'/>
                            </div>
                            <h3 className='mt-3 text-primary'>PERSONAL TRAINING</h3>
                        </div>
                        <div className="col-sm-3 item text-center">
                            <div className="icon">
                            <img src={coaching} style={{width:230}} className='rounded-circle'/>
                            </div>
                            <h3 className='mt-3 text-primary'>COACHING</h3>
                        </div>

                    </div>
                    <h1 className="subsection-title">Pulse FIT</h1>
                    <p className="subsection-description fs-5">offre varie attrezzature e corsi per l'esercizio fisico e il benessere. Pesi, macchine cardio, lezioni di gruppo e allenamento personale. I nostri trainer certificati possono aiutarti a raggiungere i tuoi obiettivi di salute e fitness, come aumentare la forza, migliorare la salute cardiovascolare e aumentare la flessibilità. Scopri l'importanza di essere affiancato da un Team di esperti nel fitness</p>

                    <div className="process-box">

                        <ul className="process-list">
                            <li>
                                <p className="icon mb-3 bg-primary"><i className="bi bi-award-fill"></i></p>
                                <h4>Trainer Certificati</h4>
                            </li>
                            <li>
                                <p className="icon mb-3 bg-primary"><i className="bi bi-card-list"></i></p>
                                <h4>Personal Workouts</h4>
                            </li>
                            <li>
                                <p className="icon mb-3 bg-primary"><i className="bi bi-tv"></i></p>
                                <h4>Allenati a casa</h4>
                            </li>
                            <li className="colored">
                                <p className="icon mb-3 bg-primary"><i className="bi bi-cake-fill fa-fw"></i></p>
                                <h4>Nutrizione</h4>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>

        </React.Fragment>
    )
}

export default Services