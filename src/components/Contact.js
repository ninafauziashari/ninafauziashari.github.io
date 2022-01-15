import React, { Component, useState } from 'react';
import resumeData from '../resumeData';
import Fade from 'react-reveal/Fade'
import emailjs from 'emailjs-com';
import {AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub, AiOutlineMail} from 'react-icons/all'
import { Link } from 'react-scroll'


const Contact = () => {
    const [from_name, setFromName] = useState("");
    const [company_name, setCompanyName] = useState("");
    const [from_email, setFromEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_on78haz', 'template_9neuu3n', e.target, 'user_VF2l2bUQYZAotIDkHzhgp')
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully")
        }, (error) => {
            console.log(error.text);
            alert("Message was not successful. Please try again.")
        });
        e.target.reset();    
    }
    
    return (
        <section id="contact">
            <div className="contact">
            <Fade bottom>
                <h1>Contact</h1>
                <div className="contact-header">
                   
                </div>
            </Fade>
            </div>
            <div className="contact-content" style={{backgroundColor:"#fffcec"}}>
                <div style={{justifyContent:"center"}}>
                <p style={{fontWeight:"bold"}} ><AiOutlineMail size={20}/>&nbsp;:&nbsp; {resumeData.email}</p>
                    <ul className="social-media-contact">
                        <li className="socmedIcon">
                            <a href="https://www.linkedin.com/in/nurul-ahmad-fauzi-74004b134/" target="_blank" rel="noopener noreferrer">
                                <AiOutlineLinkedin size={40} color='black'/>
                            </a>
                        </li>
                       &nbsp;
                        <li className="socmedIcon">
                            <a href="https://github.com/ninafauziashari" target="_blank" rel="noopener noreferrer">
                                <AiOutlineGithub size={40} color='black'/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="contact-outer-border">
                    <p>Feel free to send me an email via the form below for more enquiries</p>
                    <div className="contact-inner-border">
                    <form className="contact-form" onSubmit={sendEmail}>
                        
                        <label>Full Name: </label>
                        <input type="text" name="from_name" onChange={from_name => setFromName(from_name)} required={true}/>
                        
                        <label>Company: </label>
                        <input type="text" name="company_name" onChange={company_name => setCompanyName(company_name)} required={true}/>
                        
                        <label>Email Address: </label>
                        <input type="email" name="from_email" onChange={from_email => setFromEmail(from_email)} required={true}/> 
                        
                        <label>Subject: </label>
                        <input type="text" name="subject" onChange={subject => setSubject(subject)} required={true}/>
                       
                        <label>Message: </label>
                        
                        <textarea name="message" style={{height:"200px"}} onChange={message => setSubject(message)} required={true}/>
                        <br></br>
                        <br></br>
                        
                            <input type="submit" value="SUBMIT" style={{padding:"10px", backgroundColor:"white", fontFamily:"bodyFont", letterSpacing:"1px", fontWeight:"bolder", borderRadius:"5px"}}/>
                        
                    </form>
                    </div>
                </div>
            </div>    
        </section>
    );
}

export default Contact

                               