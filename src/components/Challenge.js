import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom'
import { Checkbox, Row, Col } from 'antd'
import Tony from '../images/tony.jpg'
import resumeData from '../resumeData';
import challengeData from '../challengeData'
import Fade from 'react-reveal/Fade'
import emailjs from 'emailjs-com';
import {AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub, AiOutlineMail} from 'react-icons/all'
import { Link } from 'react-scroll'


const Challenge = () => {
    const [checkedItems, setCheckedItems] = useState(
        new Array(challengeData.topping.length).fill(false)
    );
    const [limit, setLimit] = useState(6)
    const [title, setTitle] = useState('')



    return (
        <section id="challenge">
            <div className="challenge">
            <Fade bottom>
                <h1>Coding Challenge</h1>
            </Fade>
            </div>
            <div className="contact-content">
                <div className="contact-outer-border">
                   <h2>Tony's Test, 11/06/2021</h2>
                   <p>Question:</p>
                    <img src={Tony} alt="Tony"/>
                   <p>Answer: </p>
                   <div className="contact-inner-border" style={{backgroundColor:"white"}}>
                         <p>Please Choose Any 6:</p>
                        {
                           challengeData.topping.map((item)=>{
                               return(
                                   <div style={{textAlign:"justify"}}>
                                     <input
                                         type="checkbox"
                                         name={item.item}
                                         value={item.item}/>
                                          <label>{item.item}</label>
                                   </div>   
                               )
                           })    
                        }
                   </div>
                </div>
            </div>    
        </section>
    );
}

export default Challenge

                               