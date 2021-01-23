import React, { Component, useState } from 'react';
import resumeData from '../resumeData';
import Fade from 'react-reveal/Fade'
import Card from 'react-bootstrap/Card';
import {SiNeo4J, SiMongodb, SiPostman, SiExpo} from 'react-icons/si'
import {FaReact, FaJava, FaNodeJs} from 'react-icons/fa'
import {AiFillPlusSquare, AiOutlinePlus, AiFillCloseCircle} from 'react-icons/ai'
import { Link } from 'react-scroll'


const Project = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isDOpen, setDIsOpen] = useState(false)

    /*let resumeData = this.props.resumeData;*/
    return (
        <section id="project">
            <div className="project" style={{padding:"2px"}}>
            <Fade bottom>
                <h1>Project(s)</h1>
            </Fade>
            </div>
            <div className="project-content">
                <ul style={{listStyle:"none"}}>
                    <li>
                    <Fade bottom>
                        <div className="project-title-1">
                            <h2>Hill Recommendation System Application (Master's dissertation topic, 2020)
                                &nbsp;&nbsp;
                                <Link to="project-content" activeClass="active" spy={true} smooth={true} duration={1250}>
                                    <AiFillPlusSquare onClick={()=> setIsOpen(!isOpen)} style={{cursor:"pointer", alignItems:"baseline"}}size={40} color="white"/>
                                </Link>
                            </h2>
                        </div>
                        <div className ="scroll-here-project">
                            {isOpen &&
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
                                    </div>
                                </div>
                            }
                            </div>
                    </Fade> 
                    </li>

                    <li>
                        <Fade bottom>
                        <div className="project-title-2">
                            <h2>Mobile Application for Hotel Room Attendant (Degree's dissertation topic, 2019)
                            &nbsp;&nbsp;
                            <Link to="project-title-2" activeClass="active" spy={true} smooth={true} duration={1250}>
                                <AiFillPlusSquare onClick={()=> setDIsOpen(!isDOpen)} style={{cursor:"pointer", alignItems:"baseline"}}size={40} color="white"/>
                            </Link>
                            </h2>
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

