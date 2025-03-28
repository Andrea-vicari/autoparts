import React from 'react'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';
import ListaComponenti from '../../Components/dashcomponents/ListaComponenti';
// import Downloader from '../../Components/dashcomponents/Downloader';

function ElencoComponentiPage() {
  return (
    <>
    <Navbar />
    <ListaComponenti/>
    <Footer />
    </>
  )
}

export default ElencoComponentiPage

