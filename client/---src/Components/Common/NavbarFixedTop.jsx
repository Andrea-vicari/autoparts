import React from 'react'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import DarkSelector from '../Common/SwitchDark'
import SocialMenu from '../Common/SocialMenu';
import LogMenu from '../Common/LogMenu';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import logo from "../../assets/images/pulseFit_logo.svg"



function NavbarFixedTop() {
  // Dark theme logics
  const count = useSelector((state) => state.counter.value)


  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

   //Javascript split method to get the name of the path in array
   // Ex. splitLocation: ['', 'aboutus']
   const splitLocation = pathname.split("/");

   const {user} = UseAuthContext()

  const role = useSelector((state) => state.setRole.value)


console.log("role FROM THE NAVBAR")
console.log(role)

  return (
    <>
        <div className='container'>
        <nav className="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme={count}>
        <div className="container">
            <Link className="navbar-brand d-flex" to={'/'}>
            {role == "admin" &&
            <img src={logo} style={{width:200}}/>
            }
            </Link>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse pt-2" id="navbarCollapse">
            <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">

              <li className="nav-item">
                <Link className="nav-link fs-4" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] == "chisiamo" ? "active nav-link fs-4" : "nav-link fs-4"} to={'/chisiamo'} >Chi siamo</Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] == "servizi" ? "active nav-link fs-4" : "nav-link fs-4"} to={'/servizi'}>Servizi</Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] == "nutrizione" ? "active nav-link fs-4" : "nav-link fs-4"} to={'/nutrizione'}>Nutrizione</Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] == "blogpage" ? "active nav-link fs-4" : "nav-link fs-4"} to={'/blogpage'}>Blog</Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] == "contatti" ? "active nav-link fs-4" : "nav-link fs-4"} to={'/contatti'}>Contatti</Link>
              </li>

              {user && <li className="nav-item">
                <Link className="nav-link fs-4" to={'/dashboardpage'}>DashBoard</Link>
              </li>}

            </ul>
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
