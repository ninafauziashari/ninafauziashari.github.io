import React, { Component, useState } from 'react';
import Fade from 'react-reveal/Fade'
import Card from 'react-bootstrap/Card';
import {CgWebsite} from 'react-icons/cg'
import {FiDatabase} from 'react-icons/fi'
import {SiNeo4J, SiMongodb, SiPostman, SiExpo} from 'react-icons/si'
import {FaReact, FaJava, FaNodeJs} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import{AiOutlineCheck, AiOutlineConsoleSql, AiFillHtml5, AiFillWindows, AiFillAndroid} from 'react-icons/ai'
import {BiHappyBeaming, HiOutlineEmojiHappy, RiComputerFill} from 'react-icons/all'
import { Link } from 'react-scroll'


const Expertise = () => {
    const [inWebDevHover, setWebDevHover] = useState(false);
    const [inProgrammingDevHover, setProgrammingHover] = useState(false);
    const [inDBHover, setDBHover] = useState(false);
    const [inTestHover, setTestHover] = useState(false);
    const [inOSHover, setOSHover] = useState(false);

    return (
        <section id="expertise">
            <div className="expertise">
            <Fade bottom>
                <h1>Expertise</h1>
                <div className="expertise-subtitle">
                    <p>Psst...hover over the cards</p>
                    <div className="expertise-subtitle-emoji">
                        <BiHappyBeaming size={30}/> - Good
                        &nbsp;&nbsp;
                        <HiOutlineEmojiHappy size={30}/> - Moderate
                     </div>
                </div>
            </Fade>
            </div>
            <div className="expertise-content">
            <div className="expertise-cards">
            <Fade bottom>  
                <div className="web-dev-expertise" id="web-dev-expertise"> 
                    <Card 
                     onMouseEnter={() => setWebDevHover(true)}
                     onMouseLeave={() => setWebDevHover(false)}
                        >
                        <Card.Body>
                            <Link to="dev-card-content" activeClass="active" spy={true} smooth={true} duration={1250}>
                                <Card.Title className="web-dev-expertise-title"><CgWebsite size={25}/> Web Development</Card.Title>
                            </Link>
                            <Card.Subtitle>
                                <FaReact size={40} color={'#f49ac2'}/>
                                &nbsp; &nbsp;
                                <DiJavascript1 size={40} color={'#f49ac2'}/>
                                &nbsp; &nbsp;
                                <FaNodeJs size={40} color={'#f49ac2'}/>
                                &nbsp; &nbsp;
                                <AiFillHtml5 size={40} color={'#f49ac2'}/>
                            </Card.Subtitle>
                            <Card.Text>
                               <Link to="dev-card-content" activeClass="active" spy={true} smooth={true} duration={1250}>
                                <div className="web-dev-expertise-content" >
                                    {inWebDevHover && 
                                    <Fade clear>
                                        <ul className="card-text" style={{marginLeft:"2rem", textAlign:"justify", justifyContent:"flex-start"}}>
                                            <li><h3>JavaScript{'   '}<HiOutlineEmojiHappy size={25}/></h3></li>
                                            <li><h3>HTML5{'   '}<BiHappyBeaming size={25}/></h3></li>
                                            <li><h3>React Native{'   '}<BiHappyBeaming size={25}/></h3></li>
                                            <li><h3>React.js{'   '}<BiHappyBeaming size={25}/></h3></li>
                                            <li><h3>Node.js{'   '}<HiOutlineEmojiHappy size={25}/></h3></li>
                                            <li><h3>Express.js{'   '}<HiOutlineEmojiHappy size={25}/></h3></li>

                                        </ul>       
                                        </Fade>   
                                        }
                                    </div>
                               </Link>
                            </Card.Text> 
                        </Card.Body>
                    </Card>
                </div> 
                
                <div className="db-expertise" id="db-expertise">
                <Card
                    onMouseEnter={() => setDBHover(true)}
                    onMouseLeave={() => setDBHover(false)}>
                        <Card.Body>
                            <Card.Title className="db-expertise-title"><FiDatabase size={25}/> Database</Card.Title>
                            <Card.Subtitle>
                                <SiNeo4J size={40} color={'#f49ac2'}/>
                                &nbsp; &nbsp;
                                <SiMongodb size={40} color={'#f49ac2'}/>
                                &nbsp; &nbsp;
                                <AiOutlineConsoleSql size={40} color={'#f49ac2'}/>
                            </Card.Subtitle>
                            <Card.Text>
                               <div className="db-expertise-content">
                               {inDBHover && 
                               <Fade clear>
                                   <ul className="card-text" style={{marginLeft:"2rem", textAlign:"justify", justifyContent:"flex-start"}}>
                                       <li><h3>Neo4j{'   '}<BiHappyBeaming size={25}/></h3></li>
                                       <li><h3>MongoDB{'   '}<HiOutlineEmojiHappy size={25}/></h3></li>
                                       <li><h3>SQL{'   '}<BiHappyBeaming size={25}/></h3></li>
                                   </ul>
                                        
                                 </Fade>   
                                }
                                </div>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>
                <div className="testing-expertise" id="testing-expertise">
                <Card
                    onMouseEnter={() => setTestHover(true)}
                    onMouseLeave={() => setTestHover(false)}>
                        <Card.Body>
                            <Card.Title className="testing-expertise-title"><AiOutlineCheck size={25}/> Testing</Card.Title>
                            <Card.Subtitle>
                                <SiPostman size={40} color={'#f49ac2'}/>
                            </Card.Subtitle>
                            <Card.Text>
                               <div className="testing-expertise-content">
                               {inTestHover && 
                               <Fade clear>
                                   <ul className="card-text" style={{marginLeft:"2rem", textAlign:"justify", justifyContent:"flex-start" }}>
                                       <li><h3>Postman{'   '}<BiHappyBeaming size={25}/></h3></li>
                                       <li><h3>Selenium{'   '}<HiOutlineEmojiHappy size={25}/></h3></li>
                                       <li><h3>Gherkin{'   '}<HiOutlineEmojiHappy size={25}/></h3></li>
                                   </ul>
                                        
                                 </Fade>   
                                }
                                </div>
                            </Card.Text>
                          
                            
                            {/** 
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                            */}
                        </Card.Body>
                    </Card>
                </div>

                <div className="programming-expertise" id="programming-expertise"> 
                    <Card 
                     onMouseEnter={() => setProgrammingHover(true)}
                     onMouseLeave={() => setProgrammingHover(false)}
                        >
                        <Card.Body>
                            <Link to="dev-card-content" activeClass="active" spy={true} smooth={true} duration={1250}>
                                <Card.Title className="programming-expertise-title">
                                    <RiComputerFill size={25}/> Programming</Card.Title>
                            </Link>
                            <Card.Subtitle>
                                <FaJava  size={40} color={'#f49ac2'}/>
                                
                                &nbsp; &nbsp;
                            </Card.Subtitle>
                            <Card.Text>
                               <Link to="dev-card-content" activeClass="active" spy={true} smooth={true} duration={1250}>
                                <div className="programming-expertise-content" >
                                    {inProgrammingDevHover && 
                                    <Fade clear>
                                        <ul className="card-text" style={{marginLeft:"2rem", textAlign:"justify", justifyContent:"flex-start"}}>
                                            <li><h3>Java{'   '}<BiHappyBeaming size={25}/></h3></li>
                                            <li><h3>JavaFX{'   '}<BiHappyBeaming size={25}/></h3></li>
                                            <li><h3>VHDL{'   '}<HiOutlineEmojiHappy size={25}/></h3></li>
                                        </ul>       
                                        </Fade>   
                                        }
                                    </div>
                               </Link>
                            </Card.Text> 
                        </Card.Body>
                    </Card>
                </div> 

                <div className="os-expertise" id="os-expertise"> 
                    <Card 
                     onMouseEnter={() => setOSHover(true)}
                     onMouseLeave={() => setOSHover(false)}
                        >
                        <Card.Body>
                            <Link to="dev-card-content" activeClass="active" spy={true} smooth={true} duration={1250}>
                                <Card.Title className="os-expertise-title"><CgWebsite size={25}/> OS</Card.Title>
                            </Link>
                            <Card.Subtitle>
                                <AiFillWindows size={40} color={'#f49ac2'}/>
                                &nbsp; &nbsp;
                                <AiFillAndroid size={40} color={'#f49ac2'}/>
                                &nbsp; &nbsp;
                            </Card.Subtitle>
                            <Card.Text>
                               <Link to="dev-card-content" activeClass="active" spy={true} smooth={true} duration={1250}>
                                <div className="os-expertise-content" >
                                    {inOSHover && 
                                    <Fade clear>
                                        <ul className="card-text" style={{marginLeft:"2rem", textAlign:"justify", justifyContent:"flex-start"}}>
                                            <li><h3>Windows 7{'   '}<BiHappyBeaming size={25}/></h3></li>
                                            <li><h3>Windows 10{'   '}<BiHappyBeaming size={25}/></h3></li>
                                            <li><h3>Android{'   '}<BiHappyBeaming size={25}/></h3></li>
                                        </ul>       
                                        </Fade>   
                                        }
                                    </div>
                               </Link>
                            </Card.Text> 
                        </Card.Body>
                    </Card>
                </div> 
            </Fade>
            </div>
            </div>
            
        </section>
    );
}

export default Expertise
