import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {/* <li>
              <Link to='/team'>Team</Link>
            </li> */}
            <li>
              <Link to='/courses'>All Programs</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>EXPLORE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default NavBar
