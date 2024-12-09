import React from 'react'
import { useSelector } from 'react-redux'

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function ListaVuotaConsulta () {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType, tableType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
  themeType == "ligth" ? tableType = "table-ligth" : tableType = "table-dark"




  return (
    <React.Fragment>


      <section className={"py-3" + " " + bgType + " " + textType}>


        <div className="container-fluid  mt-0 pt-0">
          <div className="row mb-3">


			<h2>Nessun componenet</h2>

          </div>
        </div>


      </section>

    </React.Fragment>
  )
}

export default ListaVuotaConsulta



