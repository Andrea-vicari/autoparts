import React from 'react'
import { useDispatch } from 'react-redux'
import { dark, ligth } from '../../redux/DarkSlice'



function SwitchDark() {

  const dispatchTheme = useDispatch()


  return (
    <>

    <div id='ligth_dark_button' className="dropdown">
	<p className="mb-0 text-small">Dark/Ligth</p>
          <button className="btn dropdown-toggle px-2 mt-0 py-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
			
            <i className='bi bi-sun-fill fs-4 text-primary py-0'></i>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" onClick={()=>dispatchTheme(dark())}>Dark</a></li>
            <li><a className="dropdown-item" onClick={()=>dispatchTheme(ligth())}>Light</a></li>

          </ul>

        </div>

    </>
  )
}

export default SwitchDark