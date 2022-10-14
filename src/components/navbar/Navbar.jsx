import React, { useState } from 'react'
import "./navbar.css"
import logo from '../assets/Logo_Smaller Clearspace.svg'
function Navbar() {
    const [classnames, setClassnames] = useState({a:'', b:''})
  return (

      <nav className={classnames.b} 
      onClick={()=>setClassnames({a:'login-success', b:''})} 
      onDoubleClick={()=>{setClassnames({a:'after-login', b:'after-login'})}} >
        {/* <div className="upper-nav after-login"> */}
        <div className={"upper-nav " + classnames.a} >
        {/* <div className="upper-nav"> */}
            <div className="logo">
                <img className='logo-img' src={logo} alt="" srcset="" />
        <div className="leftnav">

        </div>
            </div>
        </div>

    </nav>
  )
}


export default Navbar