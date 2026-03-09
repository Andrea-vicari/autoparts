import React from 'react'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';
import AggiungiImmagineVeicolo from '../../Components/dashcomponents/AggiungiImmagineVeicolo';


function NuovoVeicoloPage() {
  return (
    <>
    <Navbar />
    <AggiungiImmagineVeicolo />
    <Footer />
    </>
  )
}

export default NuovoVeicoloPage
