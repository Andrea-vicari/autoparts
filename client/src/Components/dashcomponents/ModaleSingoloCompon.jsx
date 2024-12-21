import React from 'react'
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo-autoparts-footer.svg";


function ModaleSingoloCompon({singoloComp}) {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"


  const { user } = UseAuthContext()

  const [componente, setComponente] = useState([]);
  
  const navigate = useNavigate();
  
  console.log(singoloComp)


  const makeAPICall = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/componenti`, { mode: 'cors' });
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

	function closeModal(){
	  document.getElementById('modale_prodotto').classList.remove("d-block")
	  navigate("/elencocomponenti");
	}

  return (
    <React.Fragment>


      <section className={"py-3" + " " + bgType + " " + textType}>





        <div className="container-fluid  mt-3 pt-0">
          <div className="row mb-3">
				 {/** MODALE */}
            <div className="modal modal-sheet bg-dark px-4 py-md-5 d-block" tabIndex="-1" role="dialog" id="modale_prodotto">
              <div className="modal-dialog-centered modal-xl bg-dark" role="document">
                <div className="modal-content rounded-4 shadow bg-dark" >
                  <div className="modal-header d-flex justify-content-between">
                  <img src={logo} style={{width:200}} className='img-fluid'></img>
                    <h2 className="modal-title text-white text-center">COMPONENTE CANCELLATO</h2>

                  </div>
                  <div className="modal-body py-3 text-white">

                  <h4 className="text-white mt-3 fw-bold">Componente cancellato correttamente!</h4>
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


      </section>

    </React.Fragment>
  )
}

export default ModaleSingoloCompon


