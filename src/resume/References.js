import React, {useState, Component} from 'react';
import resumeData from '../resumeData';
import Card from 'react-bootstrap/Card';
import {AiOutlinePlus, AiOutlineDownload, AiFillCloseCircle, AiOutlineMinus, ImOffice, HiOutlineMail, BsFillPersonFill} from 'react-icons/all'
import {BsPeopleFill} from 'react-icons/all'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'
import FileSaver from 'file-saver';

const References = ({}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isClick, setIsClik] = useState(false)

    const showOpen = () => setIsOpen(!isOpen)
    const showClick = () => setIsClik(!isClick)

    const saveFile = () =>{
        FileSaver.saveAs(
            process.env.PUBLIC_URL + "/resource/ref-letter.docx", "Nina's Reference Letter.docx"
        );
    }

    return (
        <section id="reference">
            <div>
                <div className="reference">
                    <BsPeopleFill size={30}/>
<<<<<<< HEAD
                    &nbsp;&nbsp;&nbsp;
                    <h2>References</h2>
                    &nbsp; &nbsp;
=======
>>>>>>> main
                    <div className="scroll-down-resume">
                    <Link to="reference" activeClass="active" spy={true} smooth={true} duration={1200} onClick={showOpen}>
                    {
                        isClick
                        ? 
                            <Link to="interests" activeClass="active" spy={true} smooth={true} duration={1000} onClick={showOpen}>
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
                        <div className="ref-bground">
                            <div className="ref" id="ref"> 
                            {
                                resumeData.references.map((item)=>{
                                    return(
                                    <Fade bottom>
                                    <Card>
                                        <div className="ref-card">
                                            <Card.Body >
                                                <Card.Title className="ref-card-title">{item.ref_name}</Card.Title>
                                                    <Card.Text>

                                                        <div className="ref-card-content" >
                                                                <ul className="card-text" style={{marginLeft:"2rem", textAlign:"justify", justifyContent:"flex-start", alignContent:"center"}}>
                                                                    <li><h3><ImOffice style={{color:"#978e7d"}}/>&nbsp;&nbsp;&nbsp;{item.company}</h3></li>
                                                                    <li><h3><HiOutlineMail style={{color:"#978e7d"}}/>&nbsp;&nbsp;&nbsp;{item.email}</h3></li>
                                                                    <li><h3><BsFillPersonFill style={{color:"#978e7d"}}/>&nbsp;&nbsp;&nbsp;{item.occupation}</h3></li>
                                                                </ul>             
                                                        </div>
                                                    </Card.Text> 
                                            </Card.Body>
                                        </div>
                                    </Card>
                                    </Fade>
                                    )
                                })
                            }
                            </div>
                            {/* <div className="download-cv">
                                <AiOutlineDownload size={27} onClick={saveFile} style={{marginTop:"1rem", cursor:"pointer"}}/>
                                &nbsp; &nbsp;
                                <p className="download-cv-button" onClick={saveFile}>Download Reference Letter here</p>
                            </div>          */}
                        </div>
                    </div>      
                    }                    
                    </div>              
                </div>
            </section>
        )
    }

export default References
