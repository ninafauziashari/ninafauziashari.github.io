import React, {useState, Component} from 'react';
import resumeData from '../resumeData';
import Card from 'react-bootstrap/Card';
import {AiOutlinePlus, AiFillCloseCircle, AiOutlineMinus} from 'react-icons/ai'
import {ImBooks} from 'react-icons/im'
import {IoBookSharp, SiCoffeescript, FiMusic, FaHiking, FaMountain, BsPeopleFill} from 'react-icons/all'
import {GiBookmarklet, GiDoubleDragon, GiCrossedSwords, GiTrail} from 'react-icons/gi'
import {MdComputer} from 'react-icons/md'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'

const Interests = ({}) => {
    const [isReadingHover, setReadingHover] = useState(false);
    const [isProgramHover, setProgramHover] = useState(false);
    const [isHikeHover, setHikeHover] = useState(false);

    const [isOpen, setIsOpen] = useState(false)
    const [isClick, setIsClik] = useState(false)

    const showOpen = () => setIsOpen(!isOpen)
    const showClick = () => setIsClik(!isClick)

    return (
        <section id="interests">
            <div>
                <div className="interests">
                    <BsPeopleFill size={30}/>
                    &nbsp;&nbsp;&nbsp;
                    <h2>References</h2>
                    &nbsp; &nbsp;
                    <div className="scroll-down-resume">
                    <Link to="interests" activeClass="active" spy={true} smooth={true} duration={1200} onClick={showOpen}>
                        {
                            isClick
                            ? 
                                <Link to="work-experience" activeClass="active" spy={true} smooth={true} duration={1000} onClick={showOpen}>
                                    <AiOutlineMinus size={30} onClick={showClick} className="resume-logo"/>
                                </Link> 
                            : 
                                 <AiOutlinePlus size={30} onClick={showClick} className="resume-logo-click"/>           
                        }
                    </Link>
                    </div> 
                </div>
                <div className="scroll-here-interests">
                {
                    isOpen && 
                    <div className="resumeBackground">
                    <div className="interests-content nine columns main-col">
                        <div className="outer-interest" >
                            <div className="inner-interest" >
                                <Card className="interest-reading">
                                        <Card.Text 
                                            onMouseEnter={() => setReadingHover(true)}
                                            onMouseLeave={() => setReadingHover(false)}>
                                            <Fade bottom>
                                            <div className="inner-interest-reading" >
                                                <GiBookmarklet size={100} color="white"/>
                                                &nbsp;&nbsp;&nbsp;
                                                <AiOutlinePlus size={30} color="white"/>
                                                &nbsp;&nbsp;&nbsp;
                                                < GiDoubleDragon size={100} color="white"/>
                                                &nbsp;&nbsp;&nbsp;
                                                < GiCrossedSwords size={100} color="white"/>
                                                &nbsp;&nbsp;&nbsp;
                                                <AiOutlinePlus size={30} color="white"/>
                                                &nbsp;&nbsp;&nbsp;
                                                <SiCoffeescript size={90} color="white"/>
                                                    {
                                                        isReadingHover && 
                                                        <Fade clear>
                                                            <h2 className="interest-text">
                                                                Reading high fantasy books with a good cup of coffee</h2>
                                                        </Fade>
                                                    }  
                                            </div>
                                            </Fade>
                                        </Card.Text> 

                                         <Card.Text onMouseEnter={() => setHikeHover(true)}
                                            onMouseLeave={() => setHikeHover(false)}> 
                                        <Fade bottom>
                                        <div className="inner-interest-hiking" 
                                            >
                                                <FaHiking size={100} color="white"/>
                                                &nbsp;&nbsp;&nbsp;
                                                <AiOutlinePlus size={30} color="white"/>
                                                &nbsp;&nbsp;&nbsp;
                                                <GiTrail size={100} color="white"/>
                                                &nbsp;&nbsp;&nbsp;
                                                <AiOutlinePlus size={30} color="white"/>
                                                &nbsp;&nbsp;
                                                <FaMountain size={100} color="white"/>
                                                {
                                                    isHikeHover && 
                                                    <Fade clear>
                                                    <h2 className="interest-text">
                                                        Hiking and trailing on a mountainous trail</h2>
                                                    </Fade>
                                                } 
                                        </div>
                                        </Fade>
                                        </Card.Text>
                                                
                                        <Card.Text onMouseEnter={() => setProgramHover(true)}
                                            onMouseLeave={() => setProgramHover(false)}> 
                                        <Fade bottom>
                                        <div className="inner-interest-programming"
                                             >
                                                <MdComputer size={100} color="white"/>
                                                &nbsp;&nbsp;&nbsp;
                                                <AiOutlinePlus size={30} color="white"/>
                                                &nbsp;&nbsp;&nbsp;
                                                <SiCoffeescript size={90} color="white"/>
                                                &nbsp;&nbsp;&nbsp;
                                                <AiOutlinePlus size={30} color="white"/>
                                                <FiMusic size={100} color="white"/>
                                                {
                                                    isProgramHover && 
                                                    <Fade clear>
                                                    <h2 className="interest-text">
                                                        Programming freely with a good cup of coffee 
                                                    and good music</h2>
                                                    </Fade>
                                                } 
                                        </div>
                                        </Fade>
                                        </Card.Text>





                                </Card>
                               
                            </div>
                        </div>   
                    </div>
                    </div>
                }                    
                </div>
                    
            </div>
        </section>
    )
}

export default Interests
