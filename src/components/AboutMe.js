import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

const AboutMe =() => {    
    return (
        <section id="/about">
            <div className="row">
                <div className="about-me" style={{padding:"2px"}}>
                        {/*<div>
                            <img src={profilePic} width="350" height="480" style={{borderRadius:200, justifyContent:"left"}}/>
                            https://www.pinterest.co.uk/pin/349662358579929201/
                        </div>*/ }
                        
                        <div className="about-me-content">
                            <Fade duration={3000}>
                                <h1 style={{padding:"30px"}}>
                                    Masters in Software Engineering holder
                                </h1>
                            </Fade>
                            <Fade duration={5000}>
                                <h1  style={{padding:"30px"}}> 
                                    An aspiring Web Developer
                                </h1 >
                            </Fade>
                            <Fade duration={7000}>
                                <h1  style={{padding:"30px"}}> 
                                    An experienced Software Tester
                                </h1 >
                            </Fade>
                        </div>
                        {/* <iframe src="https://open.spotify.com/embed/playlist/0hpVq3KnSXEryOuRrnC03B" 
                            style={{borderRadius:4, paddingBottom:15}} width="70%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
                </div>
            </div>
        </section>
    );
// }
}
export default AboutMe

