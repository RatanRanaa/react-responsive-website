import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <>
     <nav className="navbar">
         <div className="navbar_text">
             <div className="logo">
                 <Link to="header" spy={true} smooth={true} offset={-100} duration={500}><img src="/image/logo.png" alt="logo" /></Link>
             </div>
             <ul className='navbar_ul'>
                 <li><Link to="header" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
                 <li><Link to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link></li>
                 <li><Link to="shop" spy={true} smooth={true} offset={-50} duration={500}>Shop</Link></li>
                 <li><Link to="menu" spy={true} smooth={true} offset={-50} duration={500}>Menu</Link></li>
                 <li><Link to="clients" spy={true} smooth={true} offset={-50} duration={500}>Clients</Link></li>
                 <li><Link to="prices" spy={true} smooth={true} offset={-50} duration={500}>Prices</Link></li>
             </ul>
         </div>
     </nav>
    </>
    
  )
}

export default Navbar