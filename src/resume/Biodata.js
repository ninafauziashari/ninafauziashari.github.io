import React, {useState, Component} from 'react';
import resumeData from '../resumeData';
import { AiOutlinePlus, AiOutlineHome, AiFillCloseCircle} from 'react-icons/ai'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {FaCat, FaBabyCarriage} from 'react-icons/fa'
import {FiMoon} from 'react-icons/fi'
import {CgProfile, CgGenderFemale} from 'react-icons/cg'
import Fade from 'react-reveal'
import { Link } from 'react-scroll'
import Card from 'react-bootstrap/Card';

const Biodata = ({}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isClick, setIsClik] = useState(false)

    const showOpen = () => setIsOpen(!isOpen)
    const showClick = () => setIsClik(!isClick)

    return (
        <section id="biodata">
            <div>
                <div className="biodata">
                    <FaCat size={30}/>
                    &nbsp;&nbsp;&nbsp;
                    <h2>Biodata</h2>
                    &nbsp; &nbsp;
                    <div className="scroll-down-resume" >
                    <Link to="resume-content" activeClass="active" spy={true} smooth={true} duration={1200} onClick={showOpen}>
                        <AiOutlinePlus className={isClick ? 'resume-logo-click ': 'resume-logo'} size={30} onClick={showClick}/>   
                    </Link>
                    </div> 
                </div>
                <div className="scroll-here-biodata">
                {
                    isOpen && 
                    <div className="resumeBackground">
                        <div className="biodata-content">
                        <div className="biodata-close-icon">
                                <Link to="resume-content" activeClass="active" spy={true} smooth={true} duration={1000} onClick={showOpen}>
                                    <AiFillCloseCircle size={30} style={{color:"red"}}/>
                                </Link>
                            </div> 
                            <div className="biodata-inner-content">
                           
                                <div className="biodata-list">                  
                                
                                <div id="name" className="biodata-section">
                                    <Card className="biodata-card"> 
                                        <Fade bottom>
                                            <Card.Title>
                                                <CgProfile className="biodata-icon" size={50}/> 
                                            </Card.Title>
                                            &nbsp; &nbsp;
                                            <div>
                                                <p className="biodata-card-title">Full Name:</p>
                                                <p>
                                                {resumeData.fullName}, {resumeData.age}
                                                </p>
                                            </div>
                                        </Fade>
                                    </Card> 
                                </div>
                                     

                                <div id="from" className="biodata-section">
                                    <Card className="biodata-card"> 
                                        <Fade bottom>
                                            <Card.Title>
                                                <AiOutlineHome className="biodata-icon" size={50}/>
                                            </Card.Title>
                                            &nbsp; &nbsp;
                                            <div>
                                                <p className="biodata-card-title">From:</p>
                                                <p>{resumeData.from}</p>         
                                            </div>
                                        </Fade>
                                    </Card>  
                                </div>

                                <div id="dob" className="biodata-section">
                                    <Card className="biodata-card">
                                        <Fade bottom>
                                            <Card.Title>
                                                <FaBabyCarriage size={50} className="biodata-icon"/>
                                            </Card.Title>
                                            &nbsp; &nbsp;
                                            <div>
                                                <p className="biodata-card-title">Date of Birth:</p>
                                                <p>3rd August 1995</p> 
                                            </div>
                                        </Fade>
                                    </Card>
                                </div>
                                    
                                <div id="religion" className="biodata-section">
                                    <Card className="biodata-card">
                                        <Fade bottom>
                                            <Card.Title>
                                                <FiMoon size={50} className="biodata-icon"/>
                                            </Card.Title>
                                            &nbsp; &nbsp;
                                            <div>
                                                <p className="biodata-card-title">Religion:</p>
                                                <p>Muslim</p> 
                                            </div>
                                        </Fade>
                                    </Card>
                                </div>
                                    
                                <div id="gender" className="biodata-section">
                                    <Card className="biodata-card">
                                        <Fade bottom>
                                            <Card.Title>
                                                <CgGenderFemale size={50} className="biodata-icon"/>
                                            </Card.Title>
                                            &nbsp; &nbsp;
                                            <div>
                                                <p className="biodata-card-title">Gender:</p>
                                                <p>Female</p> 
                                            </div>
                                        </Fade>
                                    </Card>
                                </div>
                                </div>      
                        </div>
                    </div>
                    <p style={{fontSize:"10px", color:"gray"}}>Background image credit : Black Cats art by Rozenn Grosjean.</p>
                    </div>
                }                    
                </div>
                    
            </div>
        </section>
    )
}

export default Biodata
