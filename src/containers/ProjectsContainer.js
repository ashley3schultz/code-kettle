import React, { Component } from 'react';
import ProjectsList from '../components/ProjectsList';
import Project from '../components/Project';
import { connect } from 'react-redux'
import { fetchProjects, updateStatus, fetchProject, updateAnimation } from "../actions/portfolio";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

class ProjectsContainer extends Component {

  componentDidMount() {
    this.props.fetchProjects()
  }

  componentDidUpdate(prevProps) {
    const project = this.props.project
    const aniDif = this.props.animation !== prevProps.animation
    const loaded = this.props.animation === 'loaded'
    if (aniDif && loaded && !!project) {
      this.delayAnimation()
    }
  }

  delayAnimation = async () => {
    await delay(100);
    this.props.updateAnimation('playing')
    await delay(100);
    const el = document.getElementById('anchor')
    el.scrollIntoView({block: 'start', behavior: 'smooth'})
  }

  handleProjectHover = (event) => {
    const status = event.target.getAttribute('class')
    if (status === "standby"){
      const title = event.target.getAttribute('alt')
      this.props.updateStatus(title)
      this.props.fetchProject(title)
      this.props.updateAnimation('loaded')
    }
  }

  render() {
    return (
        <div className="ProjectsContainer">
            <ProjectsList 
              projects={this.props.projects} 
              handleProjectHover={this.handleProjectHover}
            />
            {this.props.animation ? 
            <Project
              project={this.props.project}
              animation={this.props.animation} 
            /> : <div></div>}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    project: state.project,
    animation: state.animation,
    delay: state.delay
  }
}

export default connect(mapStateToProps, {fetchProjects, updateStatus, fetchProject, updateAnimation})(ProjectsContainer)