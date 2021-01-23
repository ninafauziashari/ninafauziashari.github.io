import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

export default class AboutMe extends Component {
render() {
    let resumeData = this.props.resumeData;
    
    return (
        <section id="about">
            <div className="row">
                <div className="about-me" style={{padding:"2px"}}>
                        {/*<div>
                            <img src={profilePic} width="350" height="480" style={{borderRadius:200, justifyContent:"left"}}/>
                            
                        </div>*/ }
                         <Fade bottom>
                        <h1 className="about-me-content">
                            Masters in Software Engineering graduate
                            <br></br>
                            An aspiring Full Stack Web Developer
                            <br></br>
                            Experienced Software Tester
                        </h1>
                        </Fade>
                    
                </div>
                
            </div>
        </section>
    );
}
}

