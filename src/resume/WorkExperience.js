import React, {useState} from 'react';
import resumeData from '../resumeData';
import {MdWork} from 'react-icons/md'
import {AiOutlinePlus, AiFillCloseCircle} from 'react-icons/ai'
import Fade from 'react-reveal'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-scroll'
import work_logo from '../images/work_logo.png'

const WorkExperience = ({}) => {
    const [isOpen, setIsOpen] = useState(false)

    const showOpen = () => setIsOpen(!isOpen)

    return (
        <section id="work-experience">
            <div>
                <div className="work-experience">
                    <MdWork size={30}/>
                    &nbsp;&nbsp;&nbsp;
                    <h2>Work Experience</h2>
                    &nbsp; &nbsp;
                    <div className="scroll-down-resume">
                    <Link to="work-experience" activeClass="active" spy={true} smooth={true} duration={1250} onClick={showOpen}>
                        <AiOutlinePlus size={30}/>
                    </Link>
                    </div> 
                </div>
                <div className="scroll-here-workExp">
                {
                    isOpen &&
                    <div className="work-experience-background">
                        
                        <div className="work-experience-content" style={{padding: "10px"}}>
                        <div className="biodata-close-icon" style={{color:"black"}}>
                            <Link to="education" activeClass="active" spy={true} smooth={true} duration={1000} onClick={showOpen}>
                                <AiFillCloseCircle size={38}/>
                            </Link>
                        </div>
                        {
                            resumeData.work.map((item)=>{
                                return(
                                    <div className="row item" style={{opacity:"0.95"}}>
                                        <Fade bottom>
                                            <div className="work-exp-card">
                                                <div className='work-exp-inner-card'>
                                                    <img src={work_logo} alt="Logo" width={150} height={110} style={{paddingTop:"25px", paddingRight:"40px", alignItems:"center"}}/>
                                                    <p className="work-exp-title">{item.position}</p>
                                                    <div className="work-exp-date">
                                                        <p>{item.startDate} - {item.endDate}</p>
                                                    </div>
         
                                                </div>
                                                
                                                   {/**?  <div className="work-exp-content">*/}
                                                        <Card className="work-exp-content-inner">
                                                            <Card.Text style={{justifyContent:"left", flex:"1"}}>
                                                            <h4>{item.intro}</h4> 
                                                            <div style={{textAlign:"justify"}}>
                                                            {
                                                             item.responsibilities.map((itemOne)=>{
                                                                return(
                                                                    <ul>
                                                                       <li>{itemOne.one}</li>
                                                                       <li>{itemOne.two}</li>
                                                                       <li>{itemOne.three}</li>
                                                                       <li>{itemOne.four}</li>
                                                                       <li>{itemOne.five}</li>
                                                                       <li>{itemOne.six}</li>
                                                                   </ul>                                                                   
                                                                 )
                                                                })
                                                            }
                                                            </div>
                                                             
                                                             <h4>{item.intro_learn}</h4>
                                                             <div style={{textAlign:"justify"}}>
                                                             {/*Surely there's a way to loop this :pp */
                                                             item.learned.map((itemOne)=>{
                                                                return(
                                                                    <ul>
                                                                       <li>{itemOne.l1}</li>
                                                                       <li>{itemOne.l2}</li>
                                                                       <li>{itemOne.l3}</li>
                                                                       
                                                                   </ul>
                                                                    
                                                                )

                                                            })
 
                                                            }
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
