import React, { useState } from "react"
import "./navbar.css"
import { NavLink } from 'react-router-dom';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import UserInfo from "../userinfo/UserInfo";
import UploadFile from "../uploadfile/UploadFile";
import Billing from "../billing/Billing";

const NavBar = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <header>
        <nav className='flexSB'>
        <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
    <li>
      <NavLink exact to='/user-info' activeClassName='active-link'>
        Personal Info
      </NavLink>
    </li>
    <li>
      <NavLink exact to='/upload-file' activeClassName='active-link'>
        Upload File
      </NavLink>
    </li>
    <li>
      <NavLink exact to='/user-billing' activeClassName='active-link'>
        Billing
      </NavLink>
    </li>
  </ul>
          <div className='start'>
            {/* Will say Hello, UserName later */}
            <div className='button'>EXPLORE</div> 
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
        {/* <Switch>
          <Route path="/user-info">
            <UserInfo />
          </Route>
          <Route path="/upload-file">
            <UploadFile />
          </Route>
          <Route path="/user-billing">
            <Billing />
          </Route>
        </Switch> */}
      </header>
    </>
  )
}

export default NavBar
