import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Projects from './projects.js';
import ProjectsHeader from './projectsheader.js';
import Images from './images.js'

class App extends Component {
  state = {
    image: []
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <ProjectsHeader/>
        <Projects/>
        <Images/>
      </div>
    );
  }
}

export default App;
