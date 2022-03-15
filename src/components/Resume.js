import React, { Component } from 'react';
import {AiOutlineDownload} from 'react-icons/all'
import EducationalBackground from '../resume/EducationalBackground';
import WorkExperience from '../resume/WorkExperience';
import Interests from '../resume/Interests'
import Biodata  from '../resume/Biodata';
import References from '../resume/References'
import resumeData from '../resumeData'
import Fade from 'react-reveal/Fade'
import FileSaver from 'file-saver';


const Resume = () =>{
    const saveFile = () =>{
        FileSaver.saveAs(
            process.env.PUBLIC_URL + "/resource/nina-resume-new.docx", "Nina's Resume.docx"
        );
    }
    /*let resumeData = this.props.resumeData;*/
    return (
        <section id="resume">
            <div className="row">
                <div className="resume">
                    <Fade bottom>
                        <h1>Resume</h1>
                    </Fade>
                </div>
                <div className="resume-content">
                    <Fade bottom>
                        <Biodata resumeData={resumeData}/> 
                        <EducationalBackground resumeData={resumeData}/>  
                        <WorkExperience resumeData={resumeData}/> 
                        <Interests resumeData={resumeData}/> 
                        <References/>
                        
                    </Fade>
                    <div className="download-cv">
                        <AiOutlineDownload size={27} onClick={saveFile} style={{marginTop:"1rem", cursor:"pointer"}}/>
                        &nbsp; &nbsp;
                        <p className="download-cv-button" onClick={saveFile}>Download CV here</p>
                    </div>
                </div>
                
            </div>
        </section>
    );

}

export default Resume
