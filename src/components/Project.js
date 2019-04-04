import React from 'react';

const Project = props => {
    const gh = 'https://raw.githubusercontent.com/ashley3schultz/ashley3schultz/'
    const imgPath = `${gh}master/images/L-${props.project.title}.png`
    return (
        <div className='featured-projects'>
            <div key={props.project.title} className="project">
                <img 
                    className={props.animation}
                    href={props.project.url} 
                    src={imgPath} 
                    alt={props.project.title}
                />
                <div className="laptop"><img 
                    className={props.animation}
                    href={props.project.url} 
                    src={require(`./images/Laptop.png`)} 
                    alt="laptop"
                /></div>
                <p className={props.animation} id="anchor">{props.project.info}</p>
            </div>
        </div>
    )
}

export default Project