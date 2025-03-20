import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Lista = ({ componenti, loading }) => {

    const themeType = useSelector((state) => state.counter.value)


    console.log("== &&&& ===0")
    console.log(componenti)



    if (loading) {
        return (
            <h1 className='text-center'>..Caricamento in corso</h1>
        )
    }



    return (
        <>

            {componenti.length ===0 ?
              <h2 className='text-center pt-3 pb-3'>Nessun componente trovato</h2>
            : componenti.map((data, index) => (
                <tr key={index}>
                <td><img src={`http://localhost:8080/images/${data.file}`} style={{ width: 120 }} /></td>
                <td className='pt-3'>
                  <a href={'https://www.google.com/search?q=' + data.codice} target="_blank">{data.codice}</a>

                </td>
                <td className='pt-3'>{data.nome}</td>
                <td className='pt-3'>{data.categoria}</td>
                <td className='pt-3'>{data.condizione}</td>
                <td className='pt-3'>{data.marca}</td>
                <td className='pt-3'>{data.modello}</td>
                <td className='pt-3'>{data.versione}</td>
                <td className='pt-3'>{data.annoImmatricolazione}</td>
                <td className='pt-3'>
                  <p id="modello-componente" className="mb-0">SCAFFALE: {data.scaffale}</p>
                  <p id="modello-componente" className="mb-0 py-0">CAMPATA: {data.campata}</p>
                  <p id="modello-componente" className="mb-0">RIPIANO: {data.ripiano}</p>
                  <p id="modello-componente" className="mb-0">CASSETTA: {data.cassetta}</p>
                </td>
                <td className='pt-3'>{data.peso} Kg</td>
                <td className='pt-3'>
                  <Link to={`/modificacomponente/${data.unicoID}`} state={data.unicoID} type="button" className="btn btn-sm btn-outline-danger mx-1">
                    <i className='bi bi-zoom-in'></i>
                  </Link>
                  <Link to={`/cancellacomponente/${data.unicoID}`} state={data.unicoID} type="button" className="btn btn-sm btn-outline-danger mx-1">
                    <i className='bi bi-trash'></i>
                  </Link>
                  <button type="button" className="btn btn-sm btn-outline-danger mx-1">
                    <i className='bi bi-printer'></i>
                  </button>
                </td>
              </tr>
            ))}
        </>
    )
}

export default Lista