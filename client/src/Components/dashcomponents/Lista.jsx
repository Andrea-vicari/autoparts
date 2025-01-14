import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Lista = ({ componenti, loading }) => {

    const themeType = useSelector((state) => state.counter.value)

    let bgType, textType, tableType;

    themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
    themeType == "ligth" ? tableType = "table-ligth" : tableType = "table-dark"

    if (loading) {
        return (
            <h1>Loading.....</h1>
        )
    }



    return (
        <>

            {componenti.map((data, index) => (
                <tr key={index}>
                <td><img src={`http://localhost:8080/images/${data.file}`} style={{ width: 120 }} /></td>
                <td className='pt-3'>{data.codice}</td>
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