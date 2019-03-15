import React from 'react';

const ProjectsList = props => {
    return (
        <div className="carousel-projects">
            {props.projects.map(proj => {
                return (
                    <div key={proj.title} className="project">
                        <img 
                            className={proj.animation}
                            href={proj.url} 
                            src={require(`./images/${proj.title}.PNG`)} 
                            alt={proj.title}
                            onMouseOver={props.handleProjectHover}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectsList