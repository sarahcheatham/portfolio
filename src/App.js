import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import HeaderContent from './headercontent.js';
import Projects from './projects.js';
import ProjectsHeader from './projectsheader.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <HeaderContent/>
        <ProjectsHeader/>
        <Projects/>
      </div>
    );
  }
}

export default App;
