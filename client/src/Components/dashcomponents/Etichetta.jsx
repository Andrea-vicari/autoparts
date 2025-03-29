import React from 'react'

function Etichetta({ componenti }) {

      var dataCreazioneEtichetta = new Date().toDateString()
      console.log(dataCreazioneEtichetta)

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

    const esportaCsv = e => {
      e.preventDefault()
      // Headers for each column
      let headers = ['nome, categoria, codice, condizione, peso, scaffale, campata, ripiano, cassetta, marca, modello, versione, anno, unicoID']

      let listaCsv = componenti.reduce((acc, componentiLista) => {

        const { nome, categoria, codice, condizione, peso, scaffale, campata, ripiano, cassetta, marca, modello, versione, anno, unicoID } = componentiLista

        acc.push([nome, categoria, codice, condizione, peso, scaffale, campata, ripiano, cassetta, marca, modello, versione, anno, unicoID].join(','))
        return acc
      }, [])
      downloadFile({
        data: [...headers, ...listaCsv].join('\n'),
        fileName: 'ListaComponenti' + "-" + dataCreazioneEtichetta + '.pdf',
        fileType: 'file/pdf',
      })
    }
  return (
    <>

        <button onClick={esportaCsv} type="button" className="btn btn-outline-success rounded-0">
        <i className="bi bi-file-earmark-arrow-down mx-2">
        </i>Scarica Etichetta
        </button>

    </>
  )
}
export default Etichetta
