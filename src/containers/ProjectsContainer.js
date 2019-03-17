import React, { Component } from 'react';
import ProjectsList from '../components/ProjectsList';
import Project from '../components/Project';
import { connect } from 'react-redux'
import { updateProjects, updateStatus, updateProject, updateAnimation } from "../actions/portfolio";
import { projects } from '../components/Data'

const delay = (ms) => new Promise(res => setTimeout(res, ms));

class ProjectsContainer extends Component {

  componentDidMount() {
    this.props.updateProjects(projects)
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
  }

  handleProjectHover = (event) => {
    const status = event.target.getAttribute('class')
    if (status === "standby"){
      const title = event.target.getAttribute('alt')
      const project = this.props.projects.find(p => p.title === title)
      this.props.updateStatus(title)
      this.props.updateProject(project)
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

export default connect(mapStateToProps, {updateProjects, updateStatus, updateProject, updateAnimation})(ProjectsContainer)