import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar_text">
            <div className="logo">
                <img src="/image/logo.png" alt="logo" />
            </div>
            <ul className='navbar_ul'>
                <li><a href="">Home</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar