import React from 'react'
//import ElencoComponenti from '../../Components/dashcomponents/ElencoComponenti'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';
import ListaComponenti from '../../Components/dashcomponents/ListaComponenti';


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

