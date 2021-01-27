import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'


export default class Header extends Component {
render() {
    let resumeData = this.props.resumeData;
    return (
        <React.Fragment>
        <header id="home" className="app-header">
            <div>
            <Fade bottom>
                <div className="app-header-title">
                    <h1>Hi, you can call me {resumeData.shortName}.</h1>
                </div>
                </Fade>
            </div>  
        </header>
        </React.Fragment>
    );
    }
}