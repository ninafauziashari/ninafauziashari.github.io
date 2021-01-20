import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Resume from './components/Resume';
import Expertise from './components/Expertise'
import Project from './components/Project'
import Footer from './components/Footer'
import resumeData from './resumeData'
import Sidebar from './components/Sidebar'
import Contact from './components/Contact'
import Fade from 'react-reveal/Fade'

import './App.css';
/*import { render } from '@testing-library/react';*/

class App extends Component{
  render(){
    return(
      <Router>
        <Sidebar/>
        <Switch>
          <div className="App">
            <div>
                <Header resumeData={resumeData}/>
                <AboutMe resumeData={resumeData}/>
                <Expertise resumeData={resumeData}/>
                <Resume resumeData={resumeData}/>
                <Project resumeData={resumeData}/>
                <Contact resumeDate={resumeData}/>
                <Footer resumeData={resumeData}/> 
            </div>
          </div> 
        </Switch>
      </Router>
      
    );
  }
}

export default App;
