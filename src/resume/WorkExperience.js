import React, {useState} from 'react';
import resumeData from '../resumeData';
import {MdWork} from 'react-icons/md'
import {AiOutlinePlus, AiFillCloseCircle, AiOutlineMinus} from 'react-icons/ai'
import Fade from 'react-reveal'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-scroll'
import work_logo from '../images/work_logo.png'

const WorkExperience = ({}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isClick, setIsClik] = useState(false)

    const showOpen = () => setIsOpen(!isOpen)
    const showClick = () => setIsClik(!isClick)

    return (
        <section id="work-experience">
            <div>
                <div className="work-experience">
                    <MdWork size={30}/>
                    <div className="scroll-down-resume">
                    <Link to="work-experience" activeClass="active" spy={true} smooth={true} duration={1200} onClick={showOpen}>
                        {
                            isClick
                            ? 
                                <Link to="education" activeClass="active" spy={true} smooth={true} duration={1000} onClick={showOpen}>
                                    <AiOutlineMinus size={30} onClick={showClick} className="resume-logo"/>
                                </Link> 
                            : 
                                 <AiOutlinePlus size={30} onClick={showClick} className="resume-logo-click"/>           
                        }
                    </Link>
                    </div> 
                </div>
                <div className="scroll-here-workExp">
                {
                    isOpen &&
                    <div className="work-experience-background">
                        
                        <div className="work-experience-content" style={{padding: "10px"}}>
                       
                        {
                            resumeData.work.map((item)=>{
                                return(
                                    <div className="row item" style={{opacity:"0.95"}}>
                                        <Fade bottom>
                                            <div className="work-exp-card">
                                                <div className='work-exp-inner-card'>
                                                    
                                                    <p className="work-exp-title">{item.companyName}</p>
                                                    <div className="work-exp-date">
                                                        <h2>{item.position}</h2>
                                                    </div>
         
                                                </div>
                                                
                                                   {/**?  <div className="work-exp-content">*/}
                                                        <Card className="work-exp-content-inner">
                                                            <Card.Text style={{justifyContent:"left", flex:"1"}}>
                                                            <h4>{item.intro}</h4> 
                                                            <div style={{textAlign:"justify"}}>
                                                            {
                                                             item.responsibilities.map((item)=>{
                                                                return(
                                                                    <ul>
                                                                       <li>{item.r}</li>
                                                                   </ul>                                                                   
                                                                 )
                                                                })
                                                            }
                                                            </div>
                                                             
                                                             <h4>{item.intro_learn}</h4>
                                                             <div style={{textAlign:"justify"}}>
                                                             {/*Surely there's a way to loop this :pp */
                                                             item.learned.map((item)=>{
                                                                return(
                                                                    <ul>
                                                                       <li>{item.l}</li>  
                                                                   </ul>
                                                                    
                                                                )

                                                            })
 
                                                            }
                                                            </div>
                                                            <div className="work-exp-date">
                                                                <p><b>{item.startDate}-{item.endDate}</b></p>
                                                            </div>
                                                            </Card.Text>
                                                            
                                                        </Card>
                                                        
                                                    </div> 
                                                
                                           {/** </div>*/}
                                        </Fade>
                                    </div>    
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

export default WorkExperience
