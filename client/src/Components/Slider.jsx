
import React from 'react'
import slide1 from "../assets/images/AiGenWoman_bg.jpg"
import slide2 from "../assets/images/AiGenMan_bg.jpg"
import { Link } from 'react-router-dom'

function Slider() {
  return (
    <React.Fragment>
        <div id="myCarousel" className="carousel carousel-fade slide mb-6" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>

    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={slide1} />
        <div className="container">
          <div className="carousel-caption text-center">
            <h1 className='display-1 text-body-emphasis'>pulseFit</h1>
            <p className="display-5 text-body-emphasis">Fitness Center</p>
            <p><Link className="btn btn-lg btn-primary" to="/aboutus">Benvenuto</Link></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src={slide2} />
        <div className="container">
          <div className="carousel-caption text-center">
          <h1 className='display-1 text-body-emphasis'>pulseFit</h1>
            <p className="display-5 text-body-emphasis">Inizia con noi il tuo nuovo progetto di Fitness</p>
            <p><Link className="btn btn-lg btn-primary" to="/services">Our services</Link></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </React.Fragment>
  )
}

export default Slider