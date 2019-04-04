import React from 'react';

const ProjectsList = props => {
    const imgPath = "https://raw.githubusercontent.com/ashley3schultz/ashley3schultz/master/images/"
    return (
        <div className="carousel-projects">
            {props.projects.map(project => {
                return (
                    <div key={project.title} className="project">
                        <img 
                            className={project.status}
                            href={project.url} 
                            src={`${imgPath}${project.title}.PNG`} 
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