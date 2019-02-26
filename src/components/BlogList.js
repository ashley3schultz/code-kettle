import React from 'react';
import { NavLink } from "react-router-dom"

const BlogList = props => {
      return (
        <div className='bloglist'>
            {props.blogs.map(blog => 
                <div key={blog.name} className="blog-preview">
                    <h2 className="blog-title">{blog.name.substr(11).replace(/(.markdown)|_/gi," ").replace(/^(.)|\s(.)/gi, ($1) => $1.toUpperCase())}</h2>
                    <h3 className="blog-date">{blog.name.substr(0,10)}</h3>
                    <NavLink 
                        onClick={props.handleLinkClick} 
                        to={'/blog/' + blog.name.replace(/(.markdown)/gi,"")}>
                        Read Blog
                    </NavLink>
                </div>
            )}
        </div>
    )
}

export default BlogList