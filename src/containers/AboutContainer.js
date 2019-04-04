import React, { Component } from 'react';
import About from '../components/About';
import { connect } from 'react-redux'
import { fetchAbout  } from "../actions/portfolio";

class AboutContainer extends Component {

  componentDidMount() {
    this.props.fetchAbout()
  }

  render() {
    return (
        <div className="AboutContainer">
            <About about={this.props.about}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    about: state.about
  }
}

export default connect(mapStateToProps, {fetchAbout})(AboutContainer)