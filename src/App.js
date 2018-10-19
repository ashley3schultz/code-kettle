import React, { Component } from 'react';
import Header from './componants/Header';
import About from './componants/About';
import Blog from './componants/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <About/>
          <Blog/>
        </header>
      </div>
    );
  }
}

export default App;
