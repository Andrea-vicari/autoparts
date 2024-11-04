import React from 'react'
import LoginImg from "../assets/images/sfondo-magazzino.jpg"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLogin } from "../hooks/useLogin";
import { useState } from "react";

function Login() {
    // Dark Theme logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType, buttonType;
    themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-black"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
    themeType == "ligth" ? buttonType = "btn-outline-dark" : buttonType = "btn-outline-light"

    // Submit functions
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, isLoading, error} = useLogin()

    const handleSubmit = async (e) => {
      e.preventDefault()
      await login(email,password)
    }


  return (
    <React.Fragment>
        <section className={"light-typo py-5 call-to-action"+ " " + bgType + " " + textType}>

        <div className="container-fluid px-5">
          <div className='container py-5'>
            <div className="row d-flex align-items-center">
              <div className="col-sm-6">
                      <img className="img-fluid rounded-4" src={LoginImg} alt=""/>
              </div>
              <div className="col-sm-6">
                <h1 className='text-primary text-uppercase'>Benvenuto!</h1>
                <p>Accedi per inserire o consultare articoli nel magazzino virtuale</p>
                <div className={"w-75" + textType}>
                  <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                      <label htmlFor="email">
                        <strong>Email *</strong>
                      </label>
                      <input
                        type="email"
                        placeholder="Insert Email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email">
                        <strong>Password *</strong>
                      </label>
                      <input
                        type="password"
                        placeholder="Insert Password"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </div>
                    <button type="submit" className="btn btn-warning w-100 rounded-0 mt-3" disabled={isLoading}>
                      Accedi
                    </button>
                    {error && <div className="error text-danger fs-4 mt-3">{error}</div>}
                  </form>
                  <p className="mt-5">Non hai in account?</p>
                  <Link to="/register" className="btn btn-warning border w-100 bg-light rounded-0 text-decoration-none">
                    Registrati
                  </Link>
                  <p className="mt-5">Password dimenticata?</p>
                  <Link to="/resetpassword" className="btn btn-warning border w-100 bg-light rounded-0 text-decoration-none">
                    Resetta password
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>

    </section>
    </React.Fragment>
  )
}

export default Login
