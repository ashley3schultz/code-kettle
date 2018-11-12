import React, { Component } from 'react';
import Blog from '../components/Blog';

class BlogContainer extends Component {

  state = {
    blogs: [
      {title: "sample title", 
        body: "sample body with long txt",
        date: "10/28/2018",
        url: ""},
      {title: "2 sample title", 
        body: "2 sample body with long txt",
        date: "10/29/2018",
        url: ""},
      {title: "3 sample title", 
        body: "3 sample body with long txt",
        date: "10/30/2018",
        url: ""}
    ]
  }

  // componentDidMount() {
  //   fetch(URL)
  //       .then(response => response.json())
  //       .then(blogs => this.setState({blogs: blogs})
  //       .catch(error => console.log(error));
  //   }
  // }

  render() {
    
    return (
        <div className="BlogsContainer">
        Blog
        <Blog blogs={this.state.blogs}/>
        </div>
    )
  }
}

export default BlogContainer