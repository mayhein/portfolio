import React, { useState } from 'react'
import '../App.css'

export default function Navbar() {

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-logo">
          may hein | portfolio
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <div className="nav-links" onClick={closeMobileMenu}>
            projects
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-links" onClick={closeMobileMenu}>
            resume
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-links" onClick={closeMobileMenu}>
            contact
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

