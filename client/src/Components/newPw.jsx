import React from 'react'
import LoginImg from "../assets/images/LoginImg.jpg"
import { useSelector } from 'react-redux'
import { Link,useNavigate,useParams } from 'react-router-dom'
import { useState } from "react";

function NewPw() {

  const { token } = useParams();


  console.log(token)

  const navigate = useNavigate()
    // Dark Theme logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType, buttonType;
    themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-black"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
    themeType == "ligth" ? buttonType = "btn-outline-dark" : buttonType = "btn-outline-light"

    // Submit functions
    const [password, setPassword] = useState('')

    const [error, setError] = useState(null)


    const handleSubmit = async (e) =>{

      e.preventDefault()

      setPassword(password)

      const pw = {password, token}

      const response = await fetch('https://autoparts-flame.vercel.app/api/users/reset-password/:' + token, {

          method: 'POST',
          body: JSON.stringify(pw),
          headers:{
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
      })


      const json = await response.json()

      if(!response.ok){
          setError(json.error)
      }

      if(response.ok){
          console.log('Aggiunto', json)
          navigate('/login')

      }


  }


  return (
    <React.Fragment>
        <section className={"light-typo py-5 call-to-action"+ " " + bgType + " " + textType}>

        <div className="container-fluid px-5">

            <div className="row d-flex align-items-center">
              <div className="col-sm-6">
                      <img className="img-fluid rounded-4" src={LoginImg} alt=""/>
              </div>
              <div className="col-sm-6">
                <h1 className='text-primary text-uppercase'>Insert New Password</h1>
                <p>Insert Your new password, click "Change" to change your password</p>
                <div className={"w-75" + textType}>
                  <form onSubmit={handleSubmit}>

                  <div className="mb-3">
                      <label htmlFor="password">
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

                    <button type="submit" className="btn btn-danger w-100 rounded-0 mt-3">
                      Change
                    </button>
                    {error && <div className="error text-danger fs-4 mt-3">{error}</div>}
                  </form>

                </div>
              </div>
            </div>

        </div>

    </section>
    </React.Fragment>
  )
}

export default NewPw