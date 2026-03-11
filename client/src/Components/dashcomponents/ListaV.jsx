import React from 'react'
import { Link } from 'react-router-dom';
import LigthBox from './LigthBox';


const ListaV = ({ veicoli, loading }) => {

    console.log("== &&&& ===0")
    console.log(veicoli)


    if (loading) {
        return (
            <h1 className='text-center'>..Caricamento in corso</h1>
        )
    }


    return (
        <>

            {veicoli.length ===0 ?
              <h2 className='text-center pt-3 pb-3'>Nessun componente trovato</h2>
            : veicoli.map((data, index) => (
                <tr key={index}>
                <td><LigthBox immagine={data.urlImmagine}/></td>

                <td className='pt-3'>{data.marca}</td>
                <td className='pt-3'>{data.modello}</td>
                <td className='pt-3'>{data.versione}</td>
                <td className='pt-3'>{data.annoImmatricolazione}</td>

                <td className='pt-3'>
                  <Link to={`/modificacomponente/${data._id}`} state={data._id} type="button" className="btn btn-sm btn-outline-danger mx-1">
                    <i className='bi bi-zoom-in'></i>
                  </Link>
                  <Link to={`/cancellacomponente/${data._id}`} state={data._id} type="button" className="btn btn-sm btn-outline-danger mx-1">
                    <i className='bi bi-trash'></i>
                  </Link>

                </td>



              </tr>

            ))}

        </>
    )
}

export default ListaV
