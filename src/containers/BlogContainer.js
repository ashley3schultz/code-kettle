import React, { Component } from 'react';
import Blog from '../components/Blog';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as actions from "../actions/portfolio";

class BlogContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchBlogs()
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
    blogs: state
  }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer)