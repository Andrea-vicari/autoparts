import React from 'react'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';
import AggiungiImmagine from '../../Components/dashcomponents/AggiungiImmagine';


function NuovoComponentePage() {
  return (
    <>
    <Navbar />
    <AggiungiImmagine />
    <Footer />
    </>
  )
}

export default NuovoComponentePage
