import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Portofolio.css'

function Portofolio() {

    const [port, setPort] = useState([])

    useEffect(() => {
        axios.get('Data/Data.json').then(res => {
            setPort(res.data.portfolio)
        })
    }, [])

    const Iamges = port.map((item) => {
        return (
            <div className='card' key={item.id}>
                <img src={item.image} alt="" />
                <span>
                    Show Image
                </span>
            </div>
        )
    })

    return (
        <div>
            <div className="portfolio">
                <div className="container">
                    <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
                    <hr className='line' />
                    <ul className="portfolio-list">
                        <li className="portfolio-item active">All</li>
                        <li className="portfolio-item">HTML</li>
                        <li className="portfolio-item">Photoshop</li>
                        <li className="portfolio-item">Wordpress</li>
                        <li className="portfolio-item">Mobile</li>
                    </ul>

                    <div className="box">
                        {Iamges}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Portofolio
