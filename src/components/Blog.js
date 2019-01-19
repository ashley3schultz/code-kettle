import React from 'react';

const Blog = props => {
      return (
        <div className='bloglist'>
            {props.blogs.map(blog => 
                <div key={blog.name} className="blog">
                    <h2>{blog.name}</h2>
                    <h3>Date</h3>
                    <a href={blog.url}>Read Blog</a>
                </div>
            )}
        </div>
    )
}

export default Blog