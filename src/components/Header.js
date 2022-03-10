import React, { Component, Fragment} from 'react';
import Fade from 'react-reveal/Fade'
import {Link} from 'react-scroll'
import resumeData from '../resumeData';

const Header = ()=>{
    return (
        <Fragment>
            <header id="/" className="app-header" duration={1400}>
                <div>
                    <div className="app-header-title">
                        <Fade bottom duration={2000}>
                        <h1 style={{marginBottom:"10px", justifyContent:'center', alignItems:'center'}}>Hi, you can call me {resumeData.shortName}...</h1>
                        </Fade>
                        <Link activeClass="active" to="/about" spy={true} smooth={true} duration={1400}>
                            <Fade duration={8000}>
                                <button className="app-header-button">
                                    AND I'M A...
                                </button>
                            </Fade>
                        </Link>
                    </div>
                </div>  
            </header>
        </Fragment>
    );
}

export default Header

/*export default class Header extends Component {
render() {
    let resumeData = this.props.resumeData;
    return (
        <Fragment>
            <header id="home" className="app-header">
                <div>
                    <Fade bottom>
                        <div className="app-header-title">
                            <h1>Hi, you can call me {resumeData.shortName}.</h1>
                            
                        </div>
                    </Fade>
                </div>  
            </header>
        </Fragment>
    );
    }
}*/