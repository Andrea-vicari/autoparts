import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ModificaComponente from './ModificaComponente';


var prodSingle

const ModificaImmagine = () => {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-light" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  let clicked = useLocation();
  prodSingle = clicked.state

  console.log(prodSingle)

  const [error, setError] = useState(null)
  const [prodottoSingolo, setProdottoSingolo] = useState([]);

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({});
  const [immagineUrl, setImmagineUrl] = useState()


  // Chiamata API al singolo prodotto
  const makeAPICall = async () => {
    try {
      const response = await fetch(`https://autoparts-flame.vercel.app/api/componenti/${prodSingle}`, { mode: 'cors' });
      const prodottoSingolo = await response.json();
      setProdottoSingolo(prodottoSingolo)
      console.log("======")
      console.log(prodottoSingolo[0].urlImmagine)
      setImmagineUrl(prodottoSingolo[0].urlImmagine)
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    makeAPICall();
  }, [])

  const handleSelectFile = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    try {
      setLoading(true);
      const data = new FormData();
      data.append("my_file", file);
      const res = await axios.post("https://autoparts-flame.vercel.app/api/componenti/upload", data);
      setRes(res.data);
      var urlImmagine = res.data.secure_url
      setImmagineUrl(urlImmagine)
      console.log("@@@@@@@")
      console.log(immagineUrl)


    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };



  return (
    <>
      <div className={"container-fluid pt-0 " + bgType}>

        <div className={"container pt-5 " + bgType}>
        <h2 className={textType}>Visualizza/  Modifica componente</h2>
          <div className="d-flex justify-content-center align-items-center pt-0">
            <div className={"p-3 rounded w-100 " + bgType + textType}>

              {prodottoSingolo.map((e) => {
                return (
                  <div className="row g-3">
                    <div className="mb-3 col-md-3">

                      <img src={`${e.urlImmagine}`} style={{ width: 320 }} />
                    </div>
                    <div className="mb-3 col-md-9 px-sm-5">
                      <h3>Carica nuova immagine</h3>

                      <input type="file" className="file mb-3 d-block" placeholder="Select File"
                        onChange={handleSelectFile} />
                      <button onClick={handleUpload} className="btn-green">
                        {loading ? "uploading..." : "Carica Immagine"}
                      </button>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </div>
      <ModificaComponente immagine={immagineUrl} />
    </>
  );

}

export default ModificaImmagine



