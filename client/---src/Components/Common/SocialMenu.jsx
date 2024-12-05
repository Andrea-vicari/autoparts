import React from 'react'

function SocialMenu() {
  return (
    <ul className="nav align-items-center justify-content-lg-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-primary" href="#">

        <i className='bi bi-facebook fs-5'></i>
        </a>
      </li>
      <li className="ms-3"><a className="text-primary" href="#">
          <i className='bi bi-linkedin fs-5'></i>
        </a>
      </li><li className="ms-3"><a className="text-primary" href="#">
      <i className='bi bi-instagram fs-5'></i>
        </a>
      </li>
    </ul>
  )
}

export default SocialMenu