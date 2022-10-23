import React from 'react'
import img from './user-img.png'
import './About.css'

function About() {
    return (
        <div>
            <div className="container">
                <div className="content">
                    <div className="info">
                        <h2>About Us</h2>
                        <p>Iam a professional UX Designer and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.</p>
                        <button>Contact Us</button>
                    </div>

                    <div className="img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
