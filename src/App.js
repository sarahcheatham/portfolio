import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Projects from './projects.js';
import ProjectsHeader from './projectsheader.js';
import Images from './images.js'

class App extends Component {
  state = {
    links: ""
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <ProjectsHeader/>
        <Images/>
      </div>
    );
  }
}

export default App;
