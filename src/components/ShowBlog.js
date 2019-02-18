import React from 'react';

const ShowBlog = props => {
      return (
        <div className='bloglist'> 
            <div key={blog.name} className="blog">
                <h2>{blog.name}</h2>
                <h3>{blog.date}</h3>
                <div className="bogcontent">{props.content}</div>
            </div>
        </div>
    )
}

export default ShowBlog