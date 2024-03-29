import React, {useState} from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {FaHamburger} from 'react-icons/fa'
import {IoIosArrowDropupCircle} from 'react-icons/io'
import { Link } from 'react-scroll'

const Sidebar = ({}) => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <aside className="aside">
            <div className='navbar'>
              {/* <Link to='/' > */}
              <FaHamburger className='menu-bars-open' style={{cursor:"pointer"}} onClick={showSidebar} size={35} color="#f4c430"/>
              <p style={{fontFamily:'contentFont', color:"#f4c430" }}>Click The Burger!</p>
              {/* </Link> */}
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} onClick={showSidebar}  size={35} color="white">
                <ul className='nav-menu-items' >
                    <li className='navbar-toggle'>
                        {/* <Link to='/' > */}
                      <AiOutlineCloseCircle className='menu-bars-close' style={{cursor:"pointer"}} onClick={showSidebar}  size={40} color="white"/>
                        {/* </Link>    */}
                    </li>
                    <br></br>
                    <br></br>
                  
                    
                    {/* <li className="nav-text-biodata" style={{fontWeight:"bold"}}>{resumeData.email}</li>
                    <li className="nav-text-biodata" style={{fontWeight:"bold"}}>{resumeData.contactNo} </li>
                    <li className="nav-text-biodata" style={{fontWeight:"bold"}}>{resumeData.linkedinId} </li>

                    <p className="nav-text-biodata" style={{fontWeight:"bold"}} ><AiOutlineMail/>: {resumeData.email}</p>*/}
                    {/* 
                    <ul className="social-media" style={{flexDirection:'row', marginTop:"-15px", marginBottom:"5px"}}>
                        <li className="socmedIcon">
                            <a href="https://www.linkedin.com/in/nurul-ahmad-fauzi-74004b134/" target="_blank" rel="noopener noreferrer">
                                <AiOutlineLinkedin size={40} color='white'/>
                            </a>
                        </li>
                        
                        <li className="socmedIcon">
                            <a href="https://github.com/ninafauziashari" target="_blank" rel="noopener noreferrer">
                                < AiOutlineGithub size={40} color='white'/>
                            </a>
                        </li>
                    </ul> 
                    */}

                   <Link activeClass="active" to="/" spy={true} smooth={true} duration={1400} onClick={showSidebar}>
                      <li className="nav-text"><a href="#home" data-nav-section="home" style={{height:"35px"}}>Home</a></li>
                    </Link>

                    <Link activeClass="active" to="/about" spy={true} smooth={true} duration={1400} onClick={showSidebar}>
                      <li className="nav-text"><a href="#about" data-nav-section="about" style={{height:"35px"}}>Intro...</a></li>
                    </Link>

                    <Link activeClass="active" to="expertise" spy={true} smooth={true} duration={1400} onClick={showSidebar}>
                      <li className="nav-text"><a href="#expertise" data-nav-section="expertise" style={{height:"35px"}}>Expertise</a></li>
                    </Link>
                    <Link activeClass="active" to="resume" spy={true} smooth={true} duration={1400} onClick={showSidebar}>
                       <li className="nav-text"><a href="#resume" data-nav-section="resume" style={{height:"35px"}}>Resume</a></li>
                    </Link>
                    <Link activeClass="active" to="project" spy={true} smooth={true} duration={1400} onClick={showSidebar}>
                       <li className="nav-text"><a href="#project" data-nav-section="project" style={{height:"35px"}}>Project(s)</a></li>
                    </Link>
                    <Link activeClass="active" to="personality" spy={true} smooth={true} duration={1400} onClick={showSidebar}>
                       <li className="nav-text"><a href="#project" data-nav-section="project" style={{height:"35px"}}>Personality</a></li>
                    </Link>
                    <Link activeClass="active" to="testimony" spy={true} smooth={true} duration={1400} onClick={showSidebar}>
                       <li className="nav-text"><a href="#project" data-nav-section="project" style={{height:"35px"}}>They Say That...</a></li>
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1400} onClick={showSidebar}>
                       <li className="nav-text"><a href="#contact" data-nav-section="contact" style={{height:"35px"}}>Contact</a></li>
                    </Link>
                </ul> 
            </nav>
            <div className='navbar'>
              <Link className="scroll-to-top" activeClass="active" to="/" spy={true} smooth={true} duration={1400}>
                    <IoIosArrowDropupCircle size={35} style={{cursor:"pointer"}}/>
              </Link>
            </div>
        </aside>
    </>
    )
}

export default Sidebar

/*

        <div>
        <div className="sidenav">
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <div className="sidenavContent">
          <aside id="colorlib-aside" >
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: profilePic}} />
              <h1 id="colorlib-logo"><a href="index.html">{resumeData.fullName}</a></h1>
              <span className="email"><i className="icon-mail"></i> {resumeData.email}</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                  <li><a href="#about" data-nav-section="about">About Me</a></li>
                  <li><a href="#resume" data-nav-section="resume">Resume</a></li>
                </ul>
              </div>
            </nav>
          </aside>

          </div>
          
        </div>
      </div>
*/


/*export default class Sidebar extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(./profilepic.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">{resumeData.shortName}</a></h1>
              <span className="email"><i className="icon-mail"></i> {resumeData.email}</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                  <li><a href="#about" data-nav-section="about">About Me</a></li>
                  <li><a href="#resume" data-nav-section="resume">Resume</a></li>
                </ul>
              </div>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p>
              <p><small>
                Something coming soon !!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}*/

