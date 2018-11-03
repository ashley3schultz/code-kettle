import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  render() {
    
    return (
        <BrowserRouter>
          <div className="App">
            <Header/>
            <Navbar/>
            <Switch>
              <Route path="/" component={About} exact/>
              <Route path="/projects" component={Projects}/>
              <Route path="/blog" component={Blog}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;