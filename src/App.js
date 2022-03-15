import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga'
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Resume from './components/Resume';
import Expertise from './components/Expertise'
import Project from './components/Project'
import Footer from './components/Footer'
import resumeData from './resumeData'
import Sidebar from './components/Sidebar'
import Contact from './components/Contact'
import Personality from './components/Personality'
import Testimony from './components/Testimony'
import Challenge from './components/Challenge'
import Fade from 'react-reveal/Fade'

import './App.css';
/*import { render } from '@testing-library/react';*/

class App extends Component{
  setGA = () =>{
    ReactGA.initialize('UA-188012026-1');
    ReactGA.pageview(`Nina's Portfolio`);
  }
  componentDidMount(){
    this.setGA();
  }
  render(){
    // const history = createBrowserHistory();

    // history.listen(location =>{
    //   ReactGA.initialize('UA-188012026-1');
    //   ReactGA.set({page: location.pathname}); //update the user's current page
    //   ReactGA.pageview(location.pathname); //Record a pageview for the given page
    // })
    return(
      <Router> 
        <Sidebar/>
        <Switch>
          <div className="App">
            <div>
                <Header resumeData={resumeData}/>
                <Route to ="/about" component={AboutMe} resumeData={resumeData}/>
                <Expertise resumeData={resumeData}/>
                <Resume resumeData={resumeData}/>
                <Project resumeData={resumeData}/>
                <Personality resumeData={resumeData}/>
                <Testimony resumeData={resumeData}/>
                {/* <Challenge resumeData={resumeData}/> */}
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
