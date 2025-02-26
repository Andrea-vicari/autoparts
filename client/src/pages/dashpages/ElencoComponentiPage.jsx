import React from 'react'
//import ElencoComponenti from '../../Components/dashcomponents/ElencoComponenti'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';
import ListaComponenti from '../../Components/dashcomponents/ListaComponenti';
import AppFilt from '../../Components/dashcomponents/AppFilt';


function ElencoComponentiPage() {
  return (
    <>
    <Navbar />
    <AppFilt />
    <Footer />
    </>
  )
}

export default ElencoComponentiPage

