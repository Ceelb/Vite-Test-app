//import { useState } from 'react'
import React from 'react'
import ReactDom from 'react-dom'
import { Link, Outlet } from "react-router-dom";

import Footer from '/src/assets/Footer.jsx'
import Nav from '/src/assets/Nav.jsx'
import './HomePage.css'

function Profiless() {
    const profiles = [11, 22, 33, 44, 55];

    return (
    <>
        <Nav />

        <Outlet />
  
        <main className="divSpace">
            <h1>Profiles</h1>

            {profiles.map((profile) => (
                <Link key={profile} to={`/profiles/${profile}`}>
                    {profile}
                </Link>
            ))}
            
        </main>

        <Link to="/">Go Back</Link>

        <Footer />
    </>
    )
  }
  
export default Profiless
