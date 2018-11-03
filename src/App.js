import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import BlogContainer from './containers/BlogContainer';
import Projects from './components/Projects';
import './App.css';

class App extends Component {

  state = {
    blogs: [
      {title: "sample title", 
        body: "sample body with long txt",
        date: "10/28/2018"},
      {title: "2 sample title", 
        body: "2 sample body with long txt",
        date: "10/29/2018"},
      {title: "3 sample title", 
        body: "3 sample body with long txt",
        date: "10/30/2018"}
    ]
  }

  // componentDidMount() {
  //   fetch(URL)
  //       .then(response => response.json())
  //       .then(blogs => this.setState({blogs: blogs})
  //       .catch(error => console.log(error));
  //   }
  // }

  render() {
    
    return (
        <BrowserRouter>
          <div className="App">
            <Header/>
            <Navbar/>
            <Switch>
              <Route path="/" component={About} exact/>
              <Route path="/projects" component={Projects}/>
              <Route path="/blog" component={BlogContainer}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     blogs: state.blogs,
//     projects: state.projects
//   }
// }

export default App