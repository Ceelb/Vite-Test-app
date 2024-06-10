//import { useState } from 'react'
import React from 'react'
import ReactDom from 'react-dom'

import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

import Footer from '/src/assets/Footer.jsx'
import Nav from '/src/assets/Nav.jsx'
import CountBtn from '/src/assets/CountBtn.jsx'
import './HomePage.css'

function aProfile() {
    const params = useParams();
    //console.log(params);

    return (
    <>
  
        <div className="div">
            <h1>User Id: {params.profileId}</h1>
        </div>
    </>
    )
  }
  
export default aProfile
