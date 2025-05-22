import React, { useState } from 'react'
import axios from 'axios'
import  {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from "../../assets/images/logo-autoparts-footer.svg";
import AggiungiComponente from './AggiungiComponente';


const AggiungiImmagine = () => {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-light" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({});
  const [immagineUrl, setImmagineUrl] = useState('')
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


  function closeModal(){
    document.getElementById('modale_Componente').classList.remove("d-block")
  }

  return (
    <div className={"container-fluid py-5 " + bgType}>
    <div className={"container py-5 " + bgType}>

      <div className="d-flex justify-content-center align-items-center py-5">
        <div className={"p-3 rounded w-100 " + bgType + textType}>
          <h2 className={textType}>Aggiungi nuovo componente</h2>
          <div className="mb-3 col-md-4">
            <label htmlFor="immagine" className="text-primary">
               <strong>Carica Immagine</strong>
            </label>
               <input type="file" className="file mb-3" placeholder="Select File"
          		onChange={handleSelectFile}/>
             <button onClick={handleUpload} className="btn-green">
            {loading ? "uploading..." : "Carica Immagine"}
          </button>


    </div>
    <img src={`${immagineUrl}`} className='img-fluid'/>
    <AggiungiComponente urlImmagine ={immagineUrl}/>
        <div className="mb-3 col-md-4">
          <Link to={`/dashboardpage`} type="submit" className="btn btn-outline-danger w-100 rounded-0 mt-3">
              Torna alla Dashboard
            </Link>
	      </div>
          {/** MODALE */}
          <div className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog" id="modale_Componente">
            <div className="modal-dialog-centered modal-fullscreen-md-down bg-dark" role="document">
              <div className="modal-content rounded-4 shadow bg-dark" >
                <div className="modal-header d-flex justify-content-between">
                <img src={logo} className='img-fluid'></img>
                  <h2 className="modal-title text-white text-center">Componente AGGIUNTO</h2>

                </div>
                <div className="modal-body py-3 text-white">

                <h4 className="text-white mt-3 fw-bold">Componente inserito correttamente!</h4>
                  </div>

                <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

                  <div className="modal-footer">
                    <button type="button" onClick={()=>closeModal()} className="btn btn-danger align-items-center" data-bs-dismiss="modal" aria-label="Close">
                    <i className='bi bi-x-circle px-2 fs-4'></i>Chiudi
                      </button>
                  </div>
                </div>
            </div>
          </div>
          </div>
          {/** FINE MODALE */}

        </div>
      </div>
    </div>
    </div>
  )
}

export default AggiungiImmagine
