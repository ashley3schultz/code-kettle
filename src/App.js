import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutContainer from './containers/AboutContainer';
import BlogContainer from './containers/BlogContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import './App.css';

class App extends Component {

  render() {
    
    return (
        <BrowserRouter>
          <div className="App">
            <Header/>
            <Navbar/>
            <Switch>
              <Route path="/" component={ProjectsContainer} exact/>
              <Route path="/about" component={AboutContainer}/>
              <Route path="/projects" component={ProjectsContainer}/>
              <Route path="/blog" component={BlogContainer}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App