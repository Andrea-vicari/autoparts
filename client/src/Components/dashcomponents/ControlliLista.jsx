import React, { useState } from 'react'
import  { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from "../../assets/images/logo-autoparts-footer.svg";



const ControlliLista = () => {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-light" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

 


  return (
    
    <div className={"container-fluid border" + bgType}>
	  
		<div className="row mb-3">
		<div className="col-sm-2 border border-success">.col-sm-4</div>
		<div className="col-sm-2 border border-success">.col-sm-4</div>
		  <div className="col-sm-2 border border-warning">col-sm-4</div>
		  <div className="col-sm-2 border border-secondary">cs-sm-4</div>

		  <div className="col-sm-2 border border-primary">
		  	<form className="d-flex" role="search" onSubmit={handleSubmit}>
		        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setNome(e.target.value)}
                  value={termineRicerca}
                  required={true}
/>
		        <button className="btn btn-outline-success" type="submit">Search</button>
		      </form>
		  </div>
		  </div>
	
      
    </div>
   
  )
}

export default ControlliLista
