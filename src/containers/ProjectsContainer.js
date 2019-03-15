import React, { Component } from 'react';
import ProjectsList from '../components/ProjectsList';
import Project from '../components/Project';
import { connect } from 'react-redux'
import { fetchProjects, updateProjects, updateAnimation } from "../actions/portfolio";
import { projects } from '../components/Data'

class ProjectsContainer extends Component {

  state = {
    project: [],
    animation: "",
    delay: 0
  }

  componentDidMount() {
    this.props.updateProjects(projects)
  }

  componentDidUpdate(prevProps) {
    const pDif = this.state.project !== prevProps.project
    const pSet = this.state.project.length
    const dDif = this.state.delay !== prevProps.delay
    const dSet = this.state.delays
    if (pDif && dDif && pSet && dSet) {
      this.handleAnimation()
    }
  }

  handleAnimation = () => {
    console.log(this.state.delay)
    if (this.state.delay > 0) {
      this.setState(prevState => {
        return { delay: prevState.delay - 1}
      });
      setTimeout(this.handleAnimation(),1000)
    } else {
      this.setState({animation: 'playing'})
    }
  }

  handleProjectHover = (event) => {
    const a = event.target.getAttribute('class')
    const t = event.target.getAttribute('alt')
    if (a === "standby"){
      this.props.updateAnimation(t)
      const proj = this.props.projects.find(p => p.title === t)
      this.setState({project: [proj], animation: 'loaded', delay: 5}) 
    }
  }

  render() {
    console.log(this.state)
    return (
        <div className="ProjectsContainer">
            <ProjectsList 
              projects={this.props.projects} 
              handleProjectHover={this.handleProjectHover}
            />
            {this.state.animation ? 
            <Project
              project={this.state.project}
              animation={this.state.animation} 
            /> : <div></div>}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, {fetchProjects, updateProjects, updateAnimation})(ProjectsContainer)