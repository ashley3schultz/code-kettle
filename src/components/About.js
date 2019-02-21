import React from 'react';

const About = props => {
      return (
        <div className='about'>
            <h3>Ashley Schultz</h3>
            <img className='profile-pic'
                src={require('./images/profilepic.jpeg')} 
                alt='profile'
            />
            <div className='about-p'>
                <p>
                I am a passionate Full Stack Software Engineer with an insatiable hunger for learning and I pursue excellence in every area of my life. In both my personal and professional life, I am dedicated to making a positive impact on people and giving them powerful and efficient tools to meet their life goals. I am also ambitious about growing in my craft while working with a collaborative team to build solutions that meet those needs.
                </p>
                <p>
                As an experienced project manager, I wore many hats and worked on multiple projects in any given week. I juggled new product development, business planning and budget creation on a weekly basis. In an effort to help my team successfully meet their goals, I journeyed into programming in order to automate several repetitive tasks and save valuable time. A whole new world opened up and I quickly fell in love with programming. The whole process was an intriguing puzzle reaching areas of my soul that needed a voice. I found I was leveraging my strengths in thinking critically, problem solving, continual learning, and building practical solutions. These discoveries lead me to change the direction of my career and I enrolled in a coding boot camp where I learned the programming fundamentals along with Ruby on Rails and React/Redux. During my time in school I built several applications and since graduating, I have continued to learn and put my skills to use both personally and as a freelance developer. 
                </p>
                <p>
                As a developer, I like to put myself in the client’s shoes and develop a product that excites and empowers them. I find a great deal of gratification knowing my code and engineering solutions are out there making a difference in people’s lives.
                </p>
            </div>
        </div>
    )
}

export default About