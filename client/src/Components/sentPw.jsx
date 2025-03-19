import React from 'react'
import { useSelector } from 'react-redux'


function SentPw() {


    // Dark Theme logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType;
    themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-black"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"


  return (
    <React.Fragment>
        <section className={"light-typo py-5 call-to-action"+ " " + bgType + " " + textType}>

        <div className="container-fluid px-5 mt-5 pt-5">

            <div className="container">


             <div className="card mx-auto w-75">
			  <div className="card-body">
			    <h5 className="card-title">Controlla la tua email</h5>
			    <p className="card-text">Ti è stato inviato via mail un link attraverso il quale potrai cambiare la tua password</p>

			  </div>


              </div>
            </div>

        </div>

    </section>
    </React.Fragment>
  )
}

export default SentPw