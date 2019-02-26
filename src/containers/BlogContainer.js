import React, { Component } from 'react';
import BlogList from '../components/BlogList';
import Blog from '../components/Blog';
import { connect } from 'react-redux'
import {fetchBlogs, fetchBlog} from "../actions/portfolio";

class BlogContainer extends Component {

  componentDidMount() {
    this.props.fetchBlogs()
  }

  handleLinkClick = (event) => {
    const name = event.target.getAttribute('href').replace('/blog/', '')
    this.props.fetchBlog(name + '.markdown')
  }

  render() {
    return (
        <div className="BlogsContainer">
          {window.location.pathname === "/blog" ?
            <BlogList 
            blogs={this.props.blogs} 
            handleLinkClick={this.handleLinkClick}
            /> : 
            <Blog
              blog={this.props.blog} 
            />
          }
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    blog: state.blog
  }
}

export default connect(mapStateToProps, {fetchBlogs, fetchBlog})(BlogContainer)