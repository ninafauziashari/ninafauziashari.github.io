import React, {useState, Component} from 'react';
import resumeData from '../resumeData';
import { AiOutlinePlus, AiFillCloseCircle, AiOutlineMinus} from 'react-icons/ai'
import {IoSchoolOutline} from 'react-icons/all'
import { Link } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import Card from 'react-bootstrap/Card'

const EducationalBackground = ({}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isClick, setIsClik] = useState(false)

    const showOpen = () => setIsOpen(!isOpen)
    const showClick = () => setIsClik(!isClick)

    return (
        <section id="education">
            <div>
                <div className="education">
                    <IoSchoolOutline size={30}/>
                    &nbsp;&nbsp;&nbsp;
                    <h2>Educational Background</h2>
                    &nbsp; &nbsp;
                    <div className="scroll-down-resume">
                    <Link to="education" activeClass="active" spy={true} smooth={true} duration={1200} onClick={showOpen} >
                        {
                            isClick
                            ? 
                                <Link to="biodata" activeClass="active" spy={true} smooth={true} duration={1000} onClick={showOpen}>
                                    <AiOutlineMinus size={30} onClick={showClick} className="resume-logo"/>
                                </Link> 
                            : 
                                 <AiOutlinePlus size={30} onClick={showClick} className="resume-logo-click"/>           
                        }
                    </Link>
                    </div> 
                </div>
                <div className="scroll-here-eduBack">
                {
                    isOpen &&
                    <div className="resumeBackground">
                        <div className="education-content" style={{paddingLeft:"100px", paddingRight:"100px"}}>
                        {
                            resumeData.education.map((item)=>{
                                return(
                                    <Fade bottom>
                                    <Card className="row item">
                                        <div className="education-inner-content">
                                       
                                            <h3>{item.degree}, {item.university} </h3>
                                            <h4>({item.startDate} - {item.endDate}) </h4>
                                            <p>Grade: {item.grade}</p>
                                            <div className="edu-exp-content-inner" style={{textAlign:"justify", fontSize:"15px"}}>
                                                <p><b>Modules include:</b></p>
                                                {
                                                    item.modules.map((itemOne)=>{
                                                        return(
                                                            <ul style={{marginTop:"-9px"}}>
                                                                <li key={itemOne.id}>{itemOne.name}</li>
                                                            </ul>  
                                                    )}
                                                )}
                                                
                                                <div style={{padding:"10px"}}>
                                                    <b>Dissertation Topic</b>
                                                    <p style={{marginTop:"5px"}}>{item.dissertationTopic}</p>
                                                
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </Card>
                                    </Fade>
                                )
                            })
                        }
                        </div>
                    </div>
                }
                    
                </div>
                    
            </div>
        </section>
    )
}

export default EducationalBackground
