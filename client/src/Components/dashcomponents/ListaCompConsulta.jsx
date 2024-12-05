import React from 'react'
import { useState, useEffect } from 'react';
import { UseAuthContext } from "../../hooks/UseAuthContext";

function ListaCompConsulta({percorsoComp}) {

  const [componente, setComponente] = useState([]);

  const { user } = UseAuthContext()


  const makeAPICall = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/componenti/magazzino/${percorsoComp.scaffale}/${percorsoComp.campata}/${percorsoComp.ripiano}/${percorsoComp.cassetta}`, { mode: 'cors' });
      const componente = await response.json();
      setComponente(componente)

      console.log({ componente })
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (user) {
      makeAPICall();
    }

  }, [user])


  return (
    <div>
        <h1>{percorsoComp.scaffale}</h1>
        <h1>{percorsoComp.campata}</h1>
        <h1>{percorsoComp.ripiano}</h1>
        <h1>{percorsoComp.cassetta}</h1>
    </div>
  )
}

export default ListaCompConsulta