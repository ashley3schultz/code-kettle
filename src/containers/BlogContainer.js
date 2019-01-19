import React, { Component } from 'react';
import Blog from '../components/Blog';
import { connect } from 'react-redux'
import {fetchBlogs} from "../actions/portfolio";

class BlogContainer extends Component {

  componentDidMount() {
    this.props.fetchBlogs()
  }

  render() {
    
    return (
        <div className="BlogsContainer">
          <Blog blogs={this.props.blogs}/>
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

// const mapDispatchToProps = dispatch => {
//   return { actions: bindActionCreators(actions, dispatch) };
// };

export default connect(mapStateToProps, {fetchBlogs})(BlogContainer)