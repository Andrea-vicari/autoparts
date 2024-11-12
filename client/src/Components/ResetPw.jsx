import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

function ResetPw() {

  const navigate = useNavigate()
    // Dark Theme logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType, buttonType;
    themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-black"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
    themeType == "ligth" ? buttonType = "btn-outline-dark" : buttonType = "btn-outline-light"

    // Submit functions
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)


    const handleSubmit = async (e) =>{

      e.preventDefault()

      setEmail(email)
      const user = {email}

      const response = await fetch('http://localhost:8080/api/users/forgot-password', {

          method: 'POST',
          body: JSON.stringify(user),
          headers:{
              'Content-Type': 'application/json'
            }
      })


      const json = await response.json()

      if(!response.ok){
          setError(json.error)
      }

      if(response.ok){
          console.log('Aggiunto', json)
          navigate('/sentpassword')

      }


  }


  return (
    <React.Fragment>
        <section className="py-5 bg-login pt-5 pb-5">

        <div className="container-fluid h-100 px-5 pt-5">
          <div className='w-50 mx-auto h-100'>
            <div className="row pt-5">

              <div className="bg-body-secondary mt-5 rounded-3 col-sm-10 mx-auto pt-5 pb-5 mt-5 mb-5">
                <h1 className='text-primary text-uppercase'>Reset Password</h1>
                <p>Insert Your email, click "send" to change your password</p>
                <div className={"mx-auto" + textType}>
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

                    <button type="submit" className="btn btn-danger w-100 rounded-0 mt-3">
                      Send
                    </button>
                    {error && <div className="error text-danger fs-4 mt-3">{error}</div>}
                  </form>


                </div>
              </div>
            </div>
          </div>
        </div>

    </section>
    </React.Fragment>
  )
}

export default ResetPw