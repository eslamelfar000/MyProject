import React from 'react'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom'


function Nav() {
    return (
        <div className='nav'>
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <h1>React_App</h1>
                    </div>

                    <div className="links">
                        <Link className='link' to="/"> Home </Link>
                        <Link className='link' to="/contact"> Contact </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;
