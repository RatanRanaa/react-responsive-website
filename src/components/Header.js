import React from 'react'
import About from './About'
import Clients from './Clients'
import Menu from './Menu'
import Prices from './Prices'
import Shop from './Shop'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
    <div className='banner'>
        <Navbar/>
        <div className="banner_content">
            <div className="container">
                <div className="banner_text">
                <h3>Pizza Devlivery</h3>
                <h1>MAESTRO PIZINNI</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="banner_btn">
                    <a href="/" className="btn btn_smart">DEVLERY NOW</a>
                </div>
                </div>
            </div>
        </div>
    </div>
    <About/>
    <Shop/>
    <Menu/>
    <Clients/>
    <Prices/>
    </>
  )
}

export default Header
