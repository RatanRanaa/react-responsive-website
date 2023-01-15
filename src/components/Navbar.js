import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
     <nav className="navbar">
         <div className="navbar_text">
             <div className="logo">
                 <Link to="/"><img src="/image/logo.png" alt="logo" /></Link>
             </div>
             <ul className='navbar_ul'>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/about">About</Link></li>
                 <li><Link to="/shop">Shop</Link></li>
                 <li><Link to="/menu">Menu</Link></li>
                 <li><Link to="/clients">Clients</Link></li>
                 <li><Link to="/prices">Prices</Link></li>
             </ul>
         </div>
     </nav>
    </>
    
  )
}

export default Navbar