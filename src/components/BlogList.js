import React from 'react';
// import Blog from './components/Blog';
// var showdown  = require('showdown'),
//     converter = new showdown.Converter()
// var mkdn = converter.makeHtml(props.blog)

const BlogList = props => {
      return (
        <div className='bloglist'>
            {props.blogs.map(blog => 
                <div key={blog.name} className="blog">
                    <h2 className="blog-title">{blog.name.substr(11).replace(/(.markdown)|_/gi," ").replace(/^(.)|\s(.)/g, ($1) => $1.toUpperCase())}</h2>
                    <h3 className="blog-date">{blog.name.substr(0,10)}</h3>
                    <div className="blog-content">{props.blog.content}</div>
                    <a className="blog-url" href={blog.url}>Read This Blog</a>
                </div>
            )}
        </div>
    )
}

export default BlogList