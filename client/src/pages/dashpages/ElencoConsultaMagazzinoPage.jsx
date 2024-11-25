import React from 'react'
import ElencoConsultaMagazzino	 from '../../Components/dashcomponents/ElencoConsultaMagazzino'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';


function ElencoConsultaMagazzinoPage() {
  return (
    <>
    <Navbar />
    <ElencoConsultaMagazzino/>
    <Footer />
    </>
  )
}

export default ElencoConsultaMagazzinoPage

