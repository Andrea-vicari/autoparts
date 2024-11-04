import React from 'react'
import { useDispatch } from 'react-redux'
import { dark, ligth } from '../../redux/DarkSlice'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function SwitchDarkDash() {

    const [toggle, setToggle] = useState(true);

  const handleClick = () =>{
    setToggle(!toggle);

    toggle ? dispatchTheme(dark()) : dispatchTheme(ligth())

  }
  const dispatchTheme = useDispatch()

  return (
    <>
        <li className="nav-item">
            <Link className="nav-link d-flex align-items-center gap-2" onClick={()=>handleClick()}>
            <i className="bi bi-toggle-off"></i>
                                    Dark / Ligth
            </Link>
        </li>

    </>
  )
}

export default SwitchDarkDash