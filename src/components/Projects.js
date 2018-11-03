import React from 'react';
import {projects} from './Data'

const Projects = props => {
      return (
        <div className='projects'>
            {projects.map(proj => {
                return (
                    <div>
                        <h2>{proj.title}</h2>
                        <p>{proj.description}</p>
                        <a href={proj.url}>View Project</a>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects