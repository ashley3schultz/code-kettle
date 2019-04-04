import React from 'react';

const About = props => {
    const imgPath = "https://raw.githubusercontent.com/ashley3schultz/ashley3schultz/master/images/About.jpeg"
    var showdown  = require('showdown'),
            converter = new showdown.Converter(),
            mytext = props.about,
            myhtml = converter.makeHtml(mytext)
    return (
        <div className='about'>
            <img className='profile-pic'
                src={imgPath} 
                alt='profile'
            />
            <div className='about-p'>
                <div dangerouslySetInnerHTML={{__html: myhtml}} />
            </div>
        </div>
    )
}

export default About