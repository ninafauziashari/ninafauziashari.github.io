import React, { Component, useState } from 'react';
import Fade from 'react-reveal/Fade'

const Personality = () => {
   
    return (
        <section id="personality">
            <div className="expertise">
                <Fade bottom>
                    <h1>Personality</h1>
                    <div className="expertise-subtitle" style={{padding:'10px', justifyContent:'center', alignSelf:'center', display:'flex', flex:1}}>
                        <p>The other side of me...</p>
                    </div>
                </Fade>
            </div>
            <div className="expertise-content">
                {/* <div className="expertise-cards"> */}
                <Fade bottom> 
                <div style={{border: '2px solid black', borderRadius:'10px', justifyContent:'center',textAlign:'left', padding:'20px', paddingLeft:'40px', paddingTop:'50px'}}>
                    <div style={{paddingBottom:'20px'}}>
                        <b>Who am I after working hours?&nbsp;</b>
                        <p>Fatally sarcastic, sassy and a drama queen 👸🏼</p>
                    </div>
                    <div style={{paddingBottom:'20px'}}>
                        <b>What is the most Malaysian thing about you?&nbsp;</b>
                        <p>I know good food when I see one...</p>
                    </div>
                    <div style={{paddingBottom:'20px'}}>
                        <b>Favourite music genre?&nbsp;</b>
                        <p>Japanese rock (specifically, RADWIMPS) and 80's rock (specifically Tina Turner)</p>
                    </div>
                    <div style={{paddingBottom:'20px'}}>
                        <b>Favourite movie of all time?&nbsp;</b>
                        <p>Peter Jackson's Lord of The Rings trilogy 🧙🏼‍♂️</p>
                    </div>
                    <div style={{paddingBottom:'20px'}}>
                        <b>TV heroes growing up?&nbsp;</b>
                        <p>The late Steve Irwin, The late Robin Williams, Jackie Chan and The Power Rangers</p>
                    </div>
                    <div style={{paddingBottom:'20px'}}>
                        <b>Favourite Disney film?&nbsp;</b>
                        <p>The early 2000's (Emperor's New Groove, Treasure Planet, Atlantis, Brother Bear etc)</p>
                    </div>
                    <div style={{paddingBottom:'20px'}}>
                        <b>Favourite Disney character?&nbsp;</b>
                        <p>Yzma (Emperor's New Groove), Genie (Aladdin) and Hades (Hercules)</p>
                    </div>
                    <div style={{paddingBottom:'20px'}}>
                        <b>Heroine?&nbsp;</b>
                        <p>My mother ❤️❤️❤️</p>
                    </div>
                    <div style={{paddingBottom:'20px'}}>
                        <b>If you were an animal, what would you be?&nbsp;</b>
                        <p>Meow 😼</p>
                    </div>
                </div>
                </Fade>
                {/* </div> */}
            </div>
        </section>
    );
}

export default Personality
