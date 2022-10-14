import React from 'react'
import "../navbar/navbar.css"
import logo from '../assets/logo.svg'
function Navbar() {
  return (

    <nav>
        <div className="upper-nav">
            <div className="logo">
                <img className='logo-img' src={logo} alt="" srcset="" />
            </div>
        </div>
        <div className="leftnav">

        </div>
   
    </nav>
  )
}


export default Navbar