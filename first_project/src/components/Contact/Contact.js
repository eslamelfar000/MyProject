import React from 'react'
import './Contact.css'
import Home from '../Home/Home'

function Contact() {
    return (
        <div>
            <Home />
            <div className="contact">
                <div className="container">
                    <div className="cover">
                        <div className="info">
                            <h1>Contact Us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
                            <i className="icon fa fa-facebook fa-lg"></i>
                            <i className="icon fa fa-twitter fa-lg"></i>
                            <i className="icon fa fa-pinterest fa-lg"></i>
                        </div>
                        <div className="in">
                            <input type="text" placeholder='Enter Your Name' />
                            <input type="text" placeholder='Enter Your Email' />
                            <input type="text" placeholder='Enter Your  Subject' />
                            <textarea name="" placeholder='Enter Your Message'></textarea>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
