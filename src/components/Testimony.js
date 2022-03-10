import React, { Component, useState } from 'react';
import Fade from 'react-reveal/Fade'
import Card from 'react-bootstrap/Card';

const Testimony = () => {
    const [hover, setHover] = useState(false);

    return (
        <section id="testimony">
            <div className="testimony-title">
                <Fade bottom>
                    <h1>They Say That...</h1>
                </Fade>
            </div>
            <div className="expertise-content">
            <div className="expertise-cards">
            <Fade bottom>
                <div className="testimonies" id="testimonies" style={{borderRadius:'100px'}}> 
                    <Card style={{margin:'20px', padding:'10px'}}>
                        <Card.Body>
                            <Card.Title>
                                <div style={{textAlign:'left'}}>
                                    <h2>
                                    "Speaks with accent, techie, gritty and have a sweet smile 😄"
                                    </h2>
                                </div>
                            </Card.Title>
                            <Card.Subtitle>
                                <h3 style={{color:'#de5d83'}}>- Terence, former colleague at OnCloud Technologies Sdn Bhd</h3> 
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </div>
                <div className="testimonies" id="testimonies" style={{borderRadius:'100px'}}> 
                    <Card style={{margin:'20px', padding:'10px'}}>
                        <Card.Body>
                            <Card.Title>
                                <div style={{textAlign:'left'}}>
                                    <h2>
                                    "Very passionate about her job and given her best in every single task"
                                    </h2>
                                </div>
                            </Card.Title>
                            <Card.Subtitle>
                                <h3 style={{color:'#de5d83'}}>- Christine, Chief Technology Officer at Evo Tracker Sdn Bhd</h3> 
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </div>
                <div className="testimonies" id="testimonies" style={{borderRadius:'100px'}}> 
                    <Card style={{margin:'20px', padding:'10px'}}>
                        <Card.Body>
                            <Card.Title>
                                <div style={{textAlign:'left'}}>
                                    <h2>
                                    "Incredibly dependable within the company projects she was involved in, taking charge of the testing where needed..."
                                    </h2>
                                </div>
                            </Card.Title>
                            <Card.Subtitle>
                                <h3 style={{color:'#de5d83'}}>- Thomas, former supervisor at Vesuvius UK Pte Ltd</h3> 
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </div>  
                <div className="testimonies" id="testimonies" style={{borderRadius:'100px'}}> 
                    <Card style={{margin:'20px', padding:'10px'}}>
                        <Card.Title>
                            <div style={{textAlign:'left'}}>
                                <h2>
                                Strength: <br/>
                                1.&nbsp; "Self-inspired professional. Strives to complete all assigned duties on schedule" <br/>
                                2.&nbsp;  "Possesses hunger for expertise and knowledge and fast learner" <br/>
                                3.&nbsp;  "Formed good relationships with all members of the team"<br/>
                                <br/>
                                Weakness:<br/>
                                1.&nbsp;  "Frequently disregards low-priority tasks" <br/>
                                2.&nbsp;  “Dependability and reliability can be improved upon”<br/>
                                </h2>
                            </div>
                        </Card.Title>
                        <Card.Subtitle>
                            <h3 style={{color:'#de5d83'}}>- Tony, former senior at OnCloud Technologies Sdn Bhd</h3> 
                        </Card.Subtitle>
                    </Card>
                </div>
            </Fade>
            </div>
            </div>
        </section>
    );
}

export default Testimony
