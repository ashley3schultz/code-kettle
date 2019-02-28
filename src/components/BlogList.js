import React from 'react';
import { NavLink } from "react-router-dom"

const BlogList = props => {
      return (
        <div className='bloglist'>
            {props.blogs.map(blog => 
                <div key={blog.title} className="blog-preview">
                    <h2 className="blog-title">
                        <NavLink 
                            onClick={props.handleLinkClick} 
                            to={blog.path}>
                            {blog.title}
                        </NavLink>
                    </h2>
                    <p className="blog-date">{blog.date}</p>
                </div>
            )}
        </div>
    )
}

export default BlogList