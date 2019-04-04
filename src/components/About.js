import React from 'react';

const About = props => {
    const imgPath = "https://raw.githubusercontent.com/ashley3schultz/ashley3schultz/master/images/About.jpeg"
    return (
        <div className='about'>
            <img className='profile-pic'
                src={imgPath} 
                alt='profile'
            />
            <div className='about-p'>
                <p>{props.about}</p>
            </div>
        </div>
    )
}

export default About