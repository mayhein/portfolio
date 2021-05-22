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
    <div className="navbar-bright">
      <div className="navbar-container">
        <div className="navbar-logo-bright">
          home
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <p>Close</p> : <p>Hamburger</p>}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <div className="nav-links" onClick={closeMobileMenu}>
            projects
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-links" onClick={closeMobileMenu}>
            contact
            </div>
          </li>
          <li className="nav-btn">
            { button ? (
              <button buttonStyle="btn--outline">resume</button>
            ) : (
              <button buttonStyle="btn--outline" buttonSize="btn--mobile" onClick={closeMobileMenu}>resume</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}

