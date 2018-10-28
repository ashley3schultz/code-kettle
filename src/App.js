import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import Header from './componants/Header';
import About from './componants/About';
import Blog from './componants/Blog';
import Projects from './componants/Projects';
import './App.css';

class App extends Component {
  render() {
    
    return (
        <BrowserRouter>
          <div className="App">
            <Header/>
            <NavBar/>
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