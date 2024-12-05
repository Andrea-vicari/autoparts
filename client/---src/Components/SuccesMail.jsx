import React from 'react'

function SuccesMail() {


    const closeSuccess = () =>{
        document.getElementById('successModal').classList.add("d-none");
      }


  return (
    <>

   {/** MODAL */}
   <div className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog" id="successModal">
            <div className="modal-dialog-centered modal-md bg-dark" role="document">
              <div id='success_modal' className="modal-content rounded-4 shadow bg-success" >
                <div className="modal-header d-flex justify-content-between">

                  <h2 className="modal-title text-white text-center">MESSAGE SENT!</h2>

                </div>
                <div className="modal-body py-3 text-white">

                <h4 className="text-white mt-3 fw-bold">Thanks for contacting!</h4>
                <h5 className="text-white mt-3 fw-bold">I have received your enquiry and will respond to you within 24 hours.  For urgent enquiries please call me on one of the telephone numbers below.</h5>
                  </div>

                <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

                  <div className="modal-footer">
                    <button type="button" onClick={()=>closeSuccess()} className="btn btn-danger align-items-center" data-bs-dismiss="modal" aria-label="Close">
                    <i className='fa fa-times px-2 fs-4'></i>Close
                      </button>
                  </div>
                </div>
            </div>
          </div>
          </div>
          {/** END MODAL */}

    </>
  )
}

export default SuccesMail