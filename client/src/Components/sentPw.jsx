import React from 'react'
import LoginImg from "../assets/images/LoginImg.jpg"
import { useSelector } from 'react-redux'


function SentPw() {


    // Dark Theme logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType, buttonType;
    themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-black"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
    themeType == "ligth" ? buttonType = "btn-outline-dark" : buttonType = "btn-outline-light"





  return (
    <React.Fragment>
        <section className={"light-typo py-5 call-to-action"+ " " + bgType + " " + textType}>

        <div className="container-fluid px-5">

            <div className="row d-flex align-items-center">
              <div className="col-sm-6">
                      <img className="img-fluid rounded-4" src={LoginImg} alt=""/>
              </div>
              <div className="col-sm-6">
                <h1 className='text-primary text-uppercase'>Check Your Email</h1>
                <h3>Please check your email.</h3>
                <h3>We sent you a mail with a link to reset your password.</h3>
              </div>
            </div>

        </div>

    </section>
    </React.Fragment>
  )
}

export default SentPw