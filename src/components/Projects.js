import React from 'react';
import {projects} from './Data'

const Projects = props => {
      return (
        <div className='projects'>
            {projects.map(proj => {
                return (
                    <div key={proj.title} className="project">
                        <a href={proj.url}>
                        <img href={proj.url} src={require(`./images/${proj.title}.PNG`)} alt='pic'/>
                        <div className="overlay">
                            <h2>{proj.title}</h2>
                            <p>{proj.info}</p>
                        </div>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects