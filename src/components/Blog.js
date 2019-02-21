import React from 'react';
// var showdown  = require('showdown'),
//     converter = new showdown.Converter()
// var mkdn = converter.makeHtml(props.blog)

const Blog = props => {
      return (
        <div className='bloglist'>
            {props.blogs.map(blog => 
                <div key={blog.name} className="blog">
                    <h2>{blog.name.substr(11).replace(/(.markdown)|_/gi," ").replace(/^(.)|\s(.)/g, ($1) => $1.toUpperCase())}</h2>
                    <h3>{blog.name.substr(0,10)}</h3>
                    <div className="bogcontent">{props.blog}</div>
                    <a href={blog.url}>Read This Blog</a>
                </div>
            )}
        </div>
    )
}

export default Blog