import React from 'react';

const ProjectsList = props => {
    return (
        <div className="carousel-projects">
            {props.projects.map(project => {
                return (
                    <div key={project.title} className="project">
                        <img 
                            className={project.status}
                            href={project.url} 
                            src={require(`./images/${project.title}.PNG`)} 
                            alt={project.title}
                            onMouseOver={props.handleProjectHover}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectsList