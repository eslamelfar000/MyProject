import React from 'react'
import './Profile.css'

function Profile() {
    return (
        <div>
            <div className="profile_skills">
                <div className="skills">
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <p className="skills-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                    <div className="bar">
                        <span className="title">Bootstrap</span>
                        <span className="perc">100%</span>
                        <div className="parent">
                            <progress value="100" max="100"></progress>
                        </div>
                    </div>

                    <div className="bar">
                        <span className="title">CSS3</span>
                        <span className="perc">90%</span>
                        <div className="parent">
                            <progress value="90" max="100"></progress>
                        </div>
                    </div>

                    <div className="bar">
                        <span className="title">Photoshop</span>
                        <span className="perc">80%</span>
                        <div className="parent">
                            <progress value="80" max="100"></progress>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile
