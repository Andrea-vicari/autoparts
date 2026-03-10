import React from 'react'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';
import ListaVeicoli from '../../Components/dashcomponents/ListaVeicoli';
import ScaricaListaCompCSV from '../../Components/dashcomponents/ScaricaListaCompCSV';

function ElencoVeicoliPage() {
  return (
    <>
    <Navbar />
    <ListaVeicoli />
    <Footer />
    </>
  )
}

export default ElencoVeicoliPage
