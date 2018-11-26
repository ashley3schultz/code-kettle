import React from 'react';

const About = props => {
      return (
        <div className='about'>
            <h3>About</h3>
            <img className='profile-pic'
                src={require('./images/profilepic.jpeg')} 
                alt='profile'
            />
            <p className='about-p'>
                Ashley is a passionate Full Stack Web Developer with an insatiable passion for learning and the pursuit of excellence in every area of my life and I was excited to see your posting for a Full Stack Web Developer. I live in beautiful Montana and I love being outdoors in the mountains and I am also one of those nerds that enjoys spreadsheet, and geeking out over anything programming.
                I have a dynamic background in product research and development and a few years ago I realized how much easier my work-life would be if I automated several tasks. Along the way I accidentally fell in love with programming. I realized I love every bit of the process from problem solving, learning new skills, and especially building practical solutions.
            </p>
        </div>
    )
}

export default About