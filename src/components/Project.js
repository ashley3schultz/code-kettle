import React from 'react';

const Project = props => {
    const project = props.project
    return (
        <div className='featured-projects'>
            <div key={project.title} className="project">
                <img 
                    className={props.animation}
                    href={project.url} 
                    src={require(`./images/${project.title}.png`)} 
                    alt={project.title}
                />
                <div className="laptop"><img 
                    className={props.animation}
                    href={project.url} 
                    src={require(`./images/Laptop.png`)} 
                    alt="laptop"
                /></div>
                <h2 className={props.animation}>{project.title}</h2>
                <p className={props.animation} id="anchor">{project.info}</p>
            </div>
        </div>
    )
}

export default Project