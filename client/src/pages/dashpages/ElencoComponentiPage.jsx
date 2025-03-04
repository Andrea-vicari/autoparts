import React from 'react'
//import ElencoComponenti from '../../Components/dashcomponents/ElencoComponenti'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';
import ListaComponenti from '../../Components/dashcomponents/ListaComponenti';
import Filtro from '../../Components/dashcomponents/Filtro';


function ElencoComponentiPage() {
  return (
    <>
    <Navbar />
    <Filtro />
    <Footer />
    </>
  )
}

export default ElencoComponentiPage

