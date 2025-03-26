
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLogin } from "../hooks/useLogin";
import { useState } from "react";

function Login() {
    // Dark Theme logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType;
    themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-dark"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"


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
        <section className="py-5 bg-login mt-5 pb-5">

        <div className="container-fluid px-5 pb-5 mb-5">
          <div className='w-100 mx-auto'>
            <div className="row">

              <div className={"mt-5 rounded-3 col-sm-10 mx-auto pt-5 pb-5" + " " + bgType}>
                <h1 className='text-primary text-uppercase'>Benvenuto!</h1>
                <p>Accedi per inserire o consultare articoli nel magazzino virtuale</p>
                <div className={"mx-auto" + textType}>
                  <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                      <label htmlFor="email">
                        <strong>Email *</strong>
                      </label>
                      <input
                        type="email"
                        placeholder="Inserisci email"
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
                        placeholder="Inserisci Password"
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

