import React from 'react';

const Project = props => {
    return (
        <div className='featured-projects'>
            {props.project.map(proj => {
                return (
                    <div key={proj.title} className="project">
                        <img 
                            className={props.animation}
                            href={proj.url} 
                            src={require(`./images/${proj.title}.PNG`)} 
                            alt={proj.title}
                        />
                        <h2 className={proj.animation}>{proj.title}</h2>
                        <p className={proj.animation}>{proj.info}</p>
                    </div>
                )
            })}     
        </div>
    )
}

export default Project