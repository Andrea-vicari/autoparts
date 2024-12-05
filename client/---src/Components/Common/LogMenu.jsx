import React from 'react'
import { Link } from 'react-router-dom'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import { useLogout } from "../../hooks/useLogout";


function LogMenu() {

  const { logout } = useLogout()

  const {user} = UseAuthContext()

  console.log(user)

  const handleLogout = () =>{
    logout()

  }

  return (
    <div className="dropdown text-center pt-1">
          <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <i className='bi bi-person-circle'></i>
          </a>
          <ul className="dropdown-menu text-small px-4">
            {user && <li><span className='small'>{user.email}</span> </li>}
            <li><Link className="dropdown-item" to="/login">Login</Link></li>
            <li><Link className="dropdown-item" to="/register">Register</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/" onClick={()=>handleLogout()}>Sign out</Link></li>
          </ul>
    </div>
  )
}

export default LogMenu