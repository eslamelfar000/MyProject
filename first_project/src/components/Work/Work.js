import React, { Component } from 'react'
import './Work.css'
import axios from 'axios'

class Work extends Component {

    state = {
        works: []
    }

    componentDidMount = () => {
        axios.get('Data/Data.json').then(res => {
            this.setState({ works: res.data.works })
        })
    }



    render() {
        const { works } = this.state;
        const Items = works.map((item) => {
            return (
                <div className="part" key={item.id}>
                    <i className={item.icon_name}></i>
                    <h4 className="part-title">{item.title}</h4>
                    <hr className="line" />
                    <p className="part-desc">
                        {item.body}
                    </p>
                </div>
            )
        })
        return (
            <div>
                <div className="work">
                    <div className="container">
                        <div className="work-info">
                            <h2 className="work-title">My Work</h2>
                            <span>____________</span>
                        </div>
                        <div className="colom">
                            {Items}
                        </div>

                    </div>
                </div>
            </div>
        )
    }



}

export default Work
