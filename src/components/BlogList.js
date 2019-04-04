import React from 'react';
import { NavLink } from "react-router-dom"

const BlogList = props => {
      return (
        <div className='bloglist'>
            {props.blogs.map(blog => 
                <NavLink 
                key={blog.title}
                onClick={props.handleLinkClick} 
                to={blog.path}
                className="blog-preview">
                <div href={blog.path} className="blog-preview">
                    <h2 href={blog.path} className="blog-title">{blog.title}</h2>
                    <p href={blog.path} className="blog-date">{blog.date}</p>
                </div>
                </NavLink>
            )}
        </div>
    )
}

export default BlogList