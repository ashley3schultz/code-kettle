import React from 'react';

const Project = props => {
    const project = props.project
    return (
        <div className='featured-projects'>
            <div key={project.title} className="project">
                <img 
                    className={props.animation}
                    href={project.url} 
                    src={require(`./images/${project.title}.PNG`)} 
                    alt={project.title}
                />
                <h2 className={project.animation}>{project.title}</h2>
                <p className={project.animation}>{project.info}</p>
            </div>
        </div>
    )
}

export default Project