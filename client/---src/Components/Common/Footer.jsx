import React from 'react'
import {useState} from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-autoparts-footer.svg"
import DarkSelector from '../Common/SwitchDark'

function Footer() {

  // Scroll to top function
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    }
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className='container-fluid bg-dark py-4'>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center">
          

          <Link className="navbar-brand d-flex" to={'/'}>
            <img src={logo} style={{width:150}}/>
          </Link>
		
          <DarkSelector />
          <button id="myBtn" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className='btn btn-sm btn-outline-secondary'>
            <i className="bi bi-arrow-bar-up"></i>
          </button>
        </footer>
      </div>

    </div>
  )
}

export default Footer
