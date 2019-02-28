import React from 'react';

const Blog = props => {
    var showdown  = require('showdown'),
        converter = new showdown.Converter(),
        mytext = props.blog.content,
        myhtml = converter.makeHtml(mytext)
    return (
        <div className="blog-content">
            <h2 className="blog-title">{props.blog.title}</h2>
            <p className="blog-date">{props.blog.date}</p>
            <div dangerouslySetInnerHTML={{__html: myhtml}} />
        </div>
)}

export default Blog