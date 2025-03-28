import React from 'react'



function Downloader({ componenti }) {

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
    <>

        <button onClick={exportToCsv} type="button" className="btn btn-outline-success rounded-0">
        <i className="bi bi-file-earmark-arrow-down mx-2">
        </i>Esporta Lista CSV
        </button>

    </>
  )
}
export default Downloader
