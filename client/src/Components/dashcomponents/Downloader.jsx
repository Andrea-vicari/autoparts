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
    
    // Cambia UserData
    const exportToJson = e => {
      e.preventDefault()
      downloadFile({
        data: JSON.stringify(componenti.nome),
        fileName: 'users.json',
        fileType: 'text/json',
      })
    }
    const exportToCsv = e => {
      e.preventDefault()
      // Headers for each column
      let headers = ['Nome']
      // Convert users data to a csv
      let usersCsv = componenti.users.reduce((acc, user) => {
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
      <table className='usersTable'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {componenti.users.map(user => {
            const { id, name, surname, age } = user
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{age}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='actionBtns'>
        <button type='button' onClick={exportToJson}>
          Export to JSON
        </button>
        <button type='button' onClick={exportToCsv}>
          Export to CSV
        </button>
      </div>
    </div>
  )
}
export default Downloader
