import React from 'react';
import {projects} from './Data'

const Projects = props => {
      return (
        <div className='projects'>
            {projects.map(proj => {
                return (
                    <div className="project">
                        <h2>{proj.title}</h2>
                        <img src={require(`./images/${proj.title}.PNG`)} alt='pic'/>
                        <p>{proj.info}</p>
                        <a className="proj-link" href={proj.url} target="_blank" rel="noopener noreferrer">
                        View Project</a>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects