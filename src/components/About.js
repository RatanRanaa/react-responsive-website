import React from 'react'

const About = () => {
  return (
    <div className="about">
        <div className="container">
            <div className="row">
                <div className="col_6 p_25">
                    <h3>About Us</h3>
                    <h1>WELCOME TO MAESTRO PIZZINI</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat veritatis nemo nesciunt beatae, error numquam quos dolore praesentium explicabo architecto tempora vitae commodi, odio consectetur excepturi maxime! Pariatur, quae cumque.</p>
                    <div className="about_btn">
                        <a href="/" className="btn btn_smart">READ MORE</a>
                    </div>
                </div>
                <div className="col_6">
                    <div className="about_img">
                        <img src="/image/pizza.jpg" alt="Pizza" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
