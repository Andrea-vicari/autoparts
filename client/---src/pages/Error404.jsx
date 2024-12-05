import React from 'react'
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import Footer from '../Components/Common/Footer';
import Menu from '../Components/Common/DashNav';

function Error404() {

  const themeType = useSelector((state) => state.counter.value)
  let bgType, textType, textColor;
  themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
  themeType == "ligth" ? textColor = "" : textColor = "text-body-secondary"

  return (
    <>
    <Menu />
    <div className='container-fluid pt-5 mt-5 bg-login'>
      <div className='container text-center mt-5 pb-5'>
        <h1 className='display-2 text-white text-uppercase'>404</h1>
      </div>
    </div>
    <section className={"pt-2 pb-2" + " " + bgType + " " + textType}>

      <div className="container">
          <div className='col-lg-12 pb-5'>
            <div className="text-center py-5 vh-75">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-primary">Opps!</span> Pagina non trovata.</p>
                <p className="lead">
                    La pagina richiesta non è al momento raggiungibile.
                  </p>
                <Link to="/" className="btn btn-primary">Torna alla Homepage</Link>
            </div>

          </div>
      </div>

    </section>
    <Footer />
    </>
  )
}

export default Error404