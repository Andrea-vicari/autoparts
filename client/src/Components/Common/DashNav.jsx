import React from 'react'
import DarkSelector from '../Common/SwitchDark'
import MenuWare from '../Common/MenuWare'
import LogMenu from '../Common/LogMenu';
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo-autoparts.svg"



function NavbarFixedTop() {
  // Dark theme logics
  const count = useSelector((state) => state.counter.value)


  return (
    <>
        <div className='container'>
        <nav className="navbar bg-body-tertiary fixed-top border-bottom border-2" data-bs-theme={count}>
        <div className="container">
            <Link className="navbar-brand d-flex" to={'/'}>
            <img src={logo} style={{width:200}}/>
            </Link>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse pt-2" id="navbarCollapse">
            <MenuWare />
            <LogMenu />
            <DarkSelector />
            </div>
        </div>
        </nav>
        </div>
    </>
  )
}

export default NavbarFixedTop
