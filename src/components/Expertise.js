import React, { Component, useState } from 'react';
import Fade from 'react-reveal/Fade'
import Card from 'react-bootstrap/Card';
import {SiNeo4J, SiMongodb, SiPostman, SiExpo} from 'react-icons/si'
import {FaReact, FaJava, FaNodeJs} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import{AiOutlineConsoleSql, AiFillGithub, AiFillGitlab, AiFillHtml5, AiFillWindows, AiFillAndroid, AiFillApple} from 'react-icons/ai'
import {BiHappyBeaming, HiOutlineEmojiHappy, FaSourcetree, SiCss3, SiRedux} from 'react-icons/all'
import { Link } from 'react-scroll'


const Expertise = () => {
    const [inWebDevHover, setWebDevHover] = useState(false);
    const [inProgrammingDevHover, setProgrammingHover] = useState(false);
    const [inDBHover, setDBHover] = useState(false);
    const [inTestHover, setTestHover] = useState(false);
    const [inOSHover, setOSHover] = useState(false);
    const [inVCHover, setVCHover] = useState(false);

    return (
        <section id="expertise">
            <div className="expertise">
            <Fade bottom>
                <h1>Expertise</h1>
                <div className="expertise-subtitle">
                    <p>Psst...hover/tap over the cards</p>
                    <div className="expertise-subtitle-emoji">
                        <BiHappyBeaming size={30}/> - Very good
                        &nbsp;&nbsp;
                        <HiOutlineEmojiHappy size={30}/> - Good
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
                                <Card.Title className="web-dev-expertise-title">Web Development</Card.Title>
                            </Link>
                            <Card.Subtitle>
                                <FaReact size={40} color={'#f49ac2'} className={inWebDevHover ? 'expertise-logo-hover ': 'expertise-logo'}/>
                                &nbsp; &nbsp;
                                <DiJavascript1 size={40} color={'#f49ac2'} className={inWebDevHover ? 'expertise-logo-hover ': 'expertise-logo'}/>
                                &nbsp; &nbsp;
                                <FaNodeJs size={40} color={'#f49ac2'} className={inWebDevHover ? 'expertise-logo-hover ': 'expertise-logo'}/>
                                &nbsp; &nbsp;
                                <AiFillHtml5 size={40} color={'#f49ac2'} className={inWebDevHover ? 'expertise-logo-hover ': 'expertise-logo'}/>
                                &nbsp; &nbsp;
                                <SiRedux  size={35} color={'#f49ac2'} className={inWebDevHover ? 'expertise-logo-hover ': 'expertise-logo'}/>
                            </Card.Subtitle>
                            <Card.Text>
                               <Link to="dev-card-content" activeClass="active" spy={true} smooth={true} duration={1250}>
                                <div className="web-dev-expertise-content" >
                                    {inWebDevHover && 
                                    <Fade clear>
                                        <ul className="card-text" style={{marginLeft:"2rem", textAlign:"justify", justifyContent:"flex-start", alignContent:"center"}}>
                                            <li><h3>JavaScript{'   '}<HiOutlineEmojiHappy size={25}/></h3></li>
                                            <li><h3>HTML5{'   '}<BiHappyBeaming size={25}/></h3></li>
                                            <li><h3>CSS3{'   '}<BiHappyBeaming size={25}/></h3></li>
                                            <li><h3>React Native{'   '}<BiHappyBeaming size={25}/></h3></li>
                                            <li><h3>React.js{'   '}<BiHappyBeaming size={25}/></h3></li>
                                            <li><h3>Node.js (+ Express.js){'   '}<HiOutlineEmojiHappy size={25}/></h3></li>
                                            <li><h3>Redux{'   '}<HiOutlineEmojiHappy size={25}/></h3></li>
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
                            <Card.Title className="db-expertise-title"> Database</Card.Title>
                            <Card.Subtitle>
                                <SiNeo4J size={40} color={'#f49ac2'} className={inDBHover ? 'expertise-logo-hover ': 'expertise-logo'}/>
                                &nbsp; &nbsp;
                                <SiMongodb size={40} color={'#f49ac2'} className={inDBHover ? 'expertise-logo-hover ': 'expertise-logo'}/>
                                &nbsp; &nbsp;
                                <AiOutlineConsoleSql size={40} color={'#f49ac2'} className={inDBHover ? 'expertise-logo-hover ': 'expertise-logo'}/>
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
                            <Card.Title className="testing-expertise-title">Testing</Card.Title>
                            <Card.Subtitle>
                                <SiPostman size={40} color={'#f49ac2'} className={inTestHover ? 'expertise-logo-hover ': 'expertise-logo'}/>
                            </Card.Subtitle>
                            <Card.Text>
                               <div className="testing-expertise-content">
                               {inTestHover && 
                               <Fade clear>
                                   <ul className="card-text" style={{marginLeft:"2rem", textAlign:"justify", justifyContent:"flex-start" }}>
                                       <li><h3>Postman (API Testing){'   '}<BiHappyBeaming size={25}/></h3></li>
                                       <li><h3>Selenium (Automation){'   '}<HiOutlineEmojiHappy size={25}/></h3></li>
                                       <li><h3>Gherkin (BDD Testing) {'   '}<HiOutlineEmojiHappy size={25}/></h3></li>
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
                                    Programming</Card.Title>
                            </Link>
                            <Card.Subtitle>
                                <FaJava  size={40} color={'#f49ac2'} className={inProgrammingDevHover ? 'expertise-logo-hover ': 'expertise-logo'}/>
                                &nbsp; &nbsp;
                            </Card.Subtitle>
                            <Card.Text>
                               <Link to="dev-card-content" activeClass="active" spy={true} smooth={true} duration={1250}>
                                <div className="programming-expertise-content" >
                                    {inProgrammingDevHover && 
                                    <Fade clear>
                                        <ul className="card-text" style={{marginLeft:"2rem", textAlign:"justify", justifyContent:"flex-start"}}>
                                            <li><h3>Java 8{'   '}<BiHappyBeaming size={25}/></h3></li>
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
                                <Card.Title className="os-expertise-title"> OS</Card.Title>
                            </Link>
                            <Card.Subtitle>
                                <AiFillWindows size={40} color={'#f49ac2'} className={inOSHover ? 'expertise-logo-hover ': 'expertise-logo'}/>
                                &nbsp; &nbsp;
                                <AiFillAndroid size={40} color={'#f49ac2'} className={inOSHover ? 'expertise-logo-hover ': 'expertise-logo'}/>
                                &nbsp; &nbsp;
                                <AiFillApple size={40} color={'#f49ac2'} className={inOSHover ? 'expertise-logo-hover ': 'expertise-logo'}/>
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
                                            <li><h3>MacOS{'   '}<BiHappyBeaming size={25}/></h3></li>
                                        </ul>       
                                        </Fade>   
                                        }
                                    </div>
                               </Link>
                            </Card.Text> 
                        </Card.Body>
                    </Card>
                </div> 
                <div className="vc-expertise" id="vc-expertise"> 
                    <Card 
                     onMouseEnter={() => setVCHover(true)}
                     onMouseLeave={() => setVCHover(false)}
                        >
                        <Card.Body>
                            <Link to="dev-card-content" activeClass="active" spy={true} smooth={true} duration={1250}>
                                <Card.Title className="vc-expertise-title"> Version Control</Card.Title>
                            </Link>
                            <Card.Subtitle>
                                <FaSourcetree size={40} color={'#f49ac2'} className={inVCHover ? 'expertise-logo-hover ': 'expertise-logo'}/>
                                &nbsp; &nbsp;
                                <AiFillGithub size={40} color={'#f49ac2'} className={inVCHover ? 'expertise-logo-hover ': 'expertise-logo'}/>
                                &nbsp; &nbsp;
                                <AiFillGitlab size={40} color={'#f49ac2'} className={inVCHover ? 'expertise-logo-hover ': 'expertise-logo'}/>
                                &nbsp; &nbsp;
                            </Card.Subtitle>
                            <Card.Text>
                               <Link to="dev-card-content" activeClass="active" spy={true} smooth={true} duration={1250}>
                                <div className="vc-expertise-content" >
                                    {inVCHover && 
                                    <Fade clear>
                                        <ul className="card-text" style={{marginLeft:"2rem", textAlign:"justify", justifyContent:"flex-start"}}>
                                            <li><h3>Sourcetree (Git GUI){'   '}<BiHappyBeaming size={25}/></h3></li>
                                            <li><h3>Git Command{'   '}<HiOutlineEmojiHappy size={25}/></h3></li>
                                            <li><h3>Gitlab{'   '}<HiOutlineEmojiHappy size={25}/></h3></li>
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
