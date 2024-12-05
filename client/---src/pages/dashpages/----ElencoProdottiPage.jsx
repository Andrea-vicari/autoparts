import React from 'react'
import ElencoProdotti from '../../Components/dashcomponents/ElencoProdotti'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';


function ElencoProdottiPage() {
  return (
    <>
    <Navbar />
    <ElencoProdotti />
    <Footer />
    </>
  )
}

export default ElencoProdottiPage
