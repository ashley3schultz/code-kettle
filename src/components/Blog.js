import React from 'react';

const Blog = props => {
    var showdown  = require('showdown'),
        converter = new showdown.Converter(),
        mytext = props.blog.output,
        myhtml = converter.makeHtml(mytext)
        console.log(myhtml)
    return (
        <div className="blog-content">
            <div dangerouslySetInnerHTML={{__html: myhtml}} />
        </div>
)}

export default Blog