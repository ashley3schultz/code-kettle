import React from 'react';

const Blog = props => {
      return (
        <div className='bloglist'>
            {props.blogs.map(blog => 
                <div key={blog.title} className="blog">
                    <h2>{blog.title}</h2>
                    <h3>{blog.date}</h3>
                    <p>{blog.body.substring(0,100)}</p>
                    <a href={blog.url}>Read Blog</a>
                </div>
            )}
        </div>
    )
}

export default Blog