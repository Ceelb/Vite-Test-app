/*import { useState } from 'react'*/
import React from 'react'
import { Link } from "react-router-dom";

import logoIcon from '/icon-w.svg'
import './Nav.css'

const Nav = () => {
  return (
      <div className="navbar">
        <li>
            <Link to="/">
                <img src={logoIcon} className="logoo" alt="Ceelberg logo" />
            </Link>
        </li>

        <li>
            <a className='link login'>Login</a>
        </li>
      </div>
  )
}

export default Nav
