import React from 'react'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';
import ListaComponenti from '../../Components/dashcomponents/ListaComponenti';
import ScaricaListaCompCSV from '../../Components/dashcomponents/ScaricaListaCompCSV';

function ElencoComponentiPage() {
  return (
    <>
    <Navbar />
    <ListaComponenti />
    <Footer />
    </>
  )
}

export default ElencoComponentiPage

