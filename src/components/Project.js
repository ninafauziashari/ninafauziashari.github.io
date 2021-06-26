import React, { Component, useState } from 'react';
import resumeData from '../resumeData';
import Fade from 'react-reveal/Fade'
import Card from 'react-bootstrap/Card';
import {SiNeo4J, SiMongodb, SiPostman, SiExpo} from 'react-icons/si'
import {FaReact, FaJava, FaNodeJs} from 'react-icons/fa'
import {AiFillPlusSquare, AiOutlinePlus, AiFillCloseCircle, AiOutlineMinus} from 'react-icons/ai'
import fyp from '../images/fyp/1.png'
import fyp2 from '../images/fyp/2.png'
import { Link } from 'react-scroll'


const Project = () => {
    const [isDOpen, setIsDOpen] = useState(false)
    const [isDClick, setIsDClick] = useState(false)

    const [isMOpen, setIsMOpen] = useState(false) 
    const [isMClick, setIsMClick] = useState(false)

    const showMClick = () => setIsMClick(!isMClick)
    const showMOpen = () => setIsMOpen(!isMOpen)

    const showDClick = () => setIsDClick(!isDClick)
    const showDOpen = () => setIsDOpen(!isDOpen)

    /*let resumeData = this.props.resumeData;*/
    return (
        <section id="project">
            <div className="project" style={{padding:"2px"}}>
            <Fade bottom>
                <h1>Project(s)</h1>
            </Fade>
            </div>
            <div className="project-content" style={{padding:"20px"}}>
                <ul style={{listStyle:"none",justifyContent:"center", marginLeft:"-20px"}}>
                    <li>
                    <Fade bottom>
                        <div className="project-title-1">
                            <h3 style={{fontFamily:'bodyFont', color:"#563561", textAlign:"justify"}}>Hill Recommendation System Application (Masters Dissertation Topic, 2020)</h3>
                                
                                <div className="scroll-down-project">
                                    <Link to="project-content" activeClass="active" spy={true} smooth={true} duration={1250} onClick={showMOpen}>
                                    {
                                        isMClick
                                        ? 
                                            <Link to="project-content" activeClass="active" spy={true} smooth={true} duration={1000} onClick={showMOpen}>
                                                <AiOutlineMinus size={30} onClick={showMClick} className="project-logo"/>
                                            </Link> 
                                        : 
                                            <AiOutlinePlus size={30} onClick={showMClick} className="project-logo-click"/>           
                                    }
                                    </Link>
                                </div> 
                            
                        </div>
                        <div className ="scroll-here-project">
                            {isMOpen &&
                                <div className="project-inner-content">                                   
                                    <Fade bottom>
                                    <div className="project-icon">
                                        <SiExpo size={40}/>
                                        &nbsp;&nbsp;&nbsp;
                                        <AiOutlinePlus size={20} />
                                        &nbsp;&nbsp;&nbsp;
                                        <FaReact size={40}/>
                                        &nbsp;&nbsp;&nbsp;
                                        <AiOutlinePlus size={20} />
                                        &nbsp;&nbsp;&nbsp;
                                        <FaNodeJs size={40}/>
                                        &nbsp;&nbsp;&nbsp;
                                        <AiOutlinePlus size={20} />
                                        &nbsp;&nbsp;&nbsp;
                                        <SiNeo4J size={40}/>
                                        &nbsp;&nbsp;&nbsp;
                                        <AiOutlinePlus size={20} />
                                        &nbsp;&nbsp;&nbsp;
                                        <SiPostman size={40}/>
                                    </div>
                                    </Fade>
                                    <div className="project-explanation">
                                        <Fade clear>
                                            <p>{resumeData.mastersProject}</p>
                                            <p>Grade: {resumeData.mastersGrade}</p>
                                            <p>Source code available at <a href="https://github.com/ninafauziashari/mastersdissertation">Github</a></p>
                                        </Fade> 
                                        {/* <Fade right>
                                            <img src={fyp} alt="Test" width={200}/>
                                        </Fade> */}
                                    </div>
                                    
                                </div>
                            }
                            </div>
                    </Fade> 
                    </li>

                    <li>
                        <Fade bottom>
                        <div className="project-title-2">
                            <h3 style={{fontFamily:'bodyFont', color:"#563561", textAlign:"justify"}}>Mobile Application for Hotel Room Attendant (Degree's Dissertation Topic, 2019)</h3>
                            &nbsp;&nbsp;
                            <div className="scroll-down-project">
                                <Link to="project-title-2" activeClass="active" spy={true} smooth={true} duration={1250} onClick={showDOpen}>
                                {
                                        isDClick
                                        ? 
                                            <Link to="project-title-2" activeClass="active" spy={true} smooth={true} duration={1000} onClick={showDOpen}>
                                                <AiOutlineMinus size={30} onClick={showDClick} className="project-logo"/>
                                            </Link> 
                                        : 
                                            <AiOutlinePlus size={30} onClick={showDClick} className="project-logo-click"/>           
                                }
                                </Link>
                            </div>  
                        </div>
                        <div className="scroll-here-project-2">
                            {isDOpen &&
                                <div className="project-inner-content" style={{flexDirection:"column"}}>                                   
                                <Fade bottom>
                                <div className="project-icon">
                                    <SiExpo size={40}/>
                                    &nbsp;&nbsp;&nbsp;
                                    <AiOutlinePlus size={20} />
                                     &nbsp;&nbsp;&nbsp;
                                    <FaReact size={40}/>
                                    &nbsp;&nbsp;&nbsp;
                                    <AiOutlinePlus size={20}/>
                                    &nbsp;&nbsp;&nbsp;
                                    <SiMongodb size={40}/>
                                </div>
                                </Fade>
                                <div className="project-explanation">
                                    <Fade clear>
                                        <p>{resumeData.degreeProject}</p>
                                        <p>Grade: {resumeData.degreeGrade}</p>
                                    </Fade> 
                                </div>
                            </div>
                                }
                            </div> 
                        </Fade>   
                    </li>
                </ul>  
            </div>   
        </section>
    );
}

export default Project

