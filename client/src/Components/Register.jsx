import React from 'react'
import RegisterImg from "../assets/images/sfondo-magazzino.jpg"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useSignup } from "../hooks/useSignup";
import { useState } from "react";

function Register() {
    // Dark Theme logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType;
    themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-black"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

    // Submit functions
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async (e) => {
      e.preventDefault()

      await signup(email, password, username)
    }


  return (
    <React.Fragment>
        <section className={"light-typo py-5 call-to-action"+ " " + bgType + " " + textType}>

        <div className="container-fluid px-5">

            <div className="row d-flex align-items-center">
              <div className="col-sm-6">
                      <img className="img-fluid rounded-4" src={RegisterImg} alt=""/>
              </div>
              <div className="col-sm-6">
                <h1 className='text-primary text-uppercase'>Crea un accoun t</h1>
                <p>Potrai accedere online ed inserire o consultare articoli nel magazzino virtuale</p>
                <div className={"w-75" + textType}>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                      <strong>Nome utente *</strong>
                    </label>
                    <input
                      type="text"
                      placeholder="Inserisci nome utente"
                      autoComplete="off"
                      name="username"
                      className="form-control rounded-0"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email">
                      <strong>Email *</strong>
                    </label>
                    <input
                      type="email"
                      placeholder="Inserisci Email"
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
                      placeholder="Scegli Password"
                      name="password"
                      className="form-control rounded-0"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <button type="submit" className="btn btn-warning w-100 rounded-0 mt-3" disabled={isLoading}>
                    Registrati
                  </button>
                  {error && <div className="error text-danger fs-4 mt-3">{error}</div>}
                      </form>
                      <p className="mt-5">Gia registrato?</p>
                  <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Accedi
                  </Link>

                </div>
              </div>
            </div>

        </div>

    </section>
    </React.Fragment>
  )
}

export default Register
