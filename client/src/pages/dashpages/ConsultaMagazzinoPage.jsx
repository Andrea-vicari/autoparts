import React from 'react'
import ConsultaMagazzino	 from '../../Components/dashcomponents/ConsultaMagazzino'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';


function ConsultaMagazzinoPage() {
  return (
    <>
    <Navbar />
    <ConsultaMagazzino/>
    <Footer />
    </>
  )
}

export default ConsultaMagazzinoPage

