import React from 'react'
import { useSelector } from 'react-redux'

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function ConsultaCategorie() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"


  const [listaComponenti, setListaComponenti] = useState([]);

  const makeAPICall = async () => {
    try {
      const response = await fetch(`https://autoparts-flame.vercel.app/api/componenti`, { mode: 'cors' });
      const listaComponenti = await response.json();
      setListaComponenti(listaComponenti)

      console.log({ listaComponenti })
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {

      makeAPICall();


  }, [])

  // Clona array listaComponenti
  var listaComponentiCopy = [...listaComponenti];
  console.log("listaComponentiCopy")
  console.log(listaComponentiCopy)

  var arrayCategorie = []



   //Looppa in listaComponentiCopy e se prop == categoria pusha in arrayCategorie
   for (let i = 0; i < listaComponentiCopy.length; i++) {

    for (let keyprodotto in listaComponentiCopy[i]) {

      keyprodotto == "categoria" ? arrayCategorie.push(listaComponentiCopy[i][keyprodotto]) : true

      }
    }

	console.log(arrayCategorie)
	var arraySingoleCat = [];

	function eliminateDuplicates(arr) {
    const arrayClone = [...arr];

    let supportObject = {};


    for (let i = 0; i < arrayClone.length; i++) {
      supportObject[arrayClone[i]] = 0;
    }
    for (let i in supportObject) {
      arraySingoleCat.push((i));
    }

    return arraySingoleCat;
}

	// Chiamata alla funzione elimina duplic dall array
	eliminateDuplicates(arrayCategorie)
	console.log("****")
	console.log(arraySingoleCat)



  return (
    <React.Fragment>
      <div className='container-fluid pt-1 mt-5 bg-login'>

        <div className='container text-center mt-5 pb-1'>
          <h1 className='display-5 text-white text-uppercase'>Consulta Categorie</h1>
          <h5 className='text-white'>Consulta i componenti divisi per categorie</h5>

        </div>
      </div>

      <section className={"py-3" + " " + bgType + " " + textType}>

        <div className="container mt-0 pt-0">
            <div className="row mb-3 text-center py-5">
			{arraySingoleCat.map((e) => {
                return (
			  <Link className="col-sm-2 border mx-1 pt-3 mb-3"  key={e} to={`/singolacategoria/${e}`} state={e}>
			  <i className="fs-1 bi bi-arrow-right-circle"></i>
			  <p className="pt-3">{e}</p>

			  </Link>
			  )
              })}

			</div>
          </div>
      </section>

    </React.Fragment>
  )
}

export default ConsultaCategorie


