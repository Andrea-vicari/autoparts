import React from 'react'
import { useState, useEffect } from 'react'


function Downloader() {

        const [componenti, setComponenti] = useState([])
        // initialize the loading state as true
        const [loading, setLoading] = useState(true)
        // initialize the error state as null
        const [error, setError] = useState(null)

        useEffect(() => {
       fetch('https://autoparts-flame.vercel.app/api/componenti')
      .then(response => response.json())
      .then(componentiDalServer => {
        console.log("*****")
        console.log(componentiDalServer)
        setComponenti(componentiDalServer)
        })
      .catch(err => {
        console.log(err)
        // update the error state
        setError(err)
      })
      .finally(() => {
        // wether we sucessfully get the users or not,
        // we update the loading state
        setLoading(false)
      })
  }, [])

      const downloadFile = ({ data, fileName, fileType }) => {
      const blob = new Blob([data], { type: fileType })
      const a = document.createElement('a')
      a.download = fileName
      a.href = window.URL.createObjectURL(blob)
      const clickEvt = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
      })
      a.dispatchEvent(clickEvt)
      a.remove()
    }

    const exportToCsv = e => {
      e.preventDefault()
      // Headers for each column
      let headers = ['Nome']
      // Convert users data to a csv
      let usersCsv = componenti.reduce((acc, user) => {
        const { nome } = user
        acc.push([nome].join(','))
        return acc
      }, [])
      downloadFile({
        data: [...headers, ...usersCsv].join('\n'),
        fileName: 'users.csv',
        fileType: 'text/csv',
      })
    }




  return (
    <div className='App'>
      <h1>How to download CSV and JSON files in React</h1>
      <table className={"table table-striped table-hover"}>
      <thead className='text-uppercase'>
                <tr>
                  <th scope="col">Immagine</th>
                  <th scope="col">Codice</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Cat</th>
                  <th scope="col">Condizione</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Modello</th>
                  <th scope="col">Versione</th>
                  <th scope="col">Anno</th>
                  <th scope="col">Ubicazione</th>
                  <th scope="col">Peso</th>
                  <th scope="col">Gestisci</th>
                </tr>
              </thead>
        <tbody>
          {componenti.map(user => {
            const { nome } = user
            return (
              <tr key={user._id}>
                <td>{user.nome}</td>

              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='actionBtns'>
        <button type='button' onClick={exportToCsv}>
          Export to CSV
        </button>
      </div>
    </div>
  )
}
export default Downloader
