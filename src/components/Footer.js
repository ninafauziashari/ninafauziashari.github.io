import React, { Component } from 'react';


export default class Footer extends Component {
render() {
    let resumeData = this.props.resumeData;
    
    return (
        <section id="footer">
            <div className="row">
                <div className="footer">
                            <h2>"Get back up and go..."</h2>
                    <div className="row" style={{fontFamily:'bodyFont', fontSize:"15px"}}>
                        <p class="text-center text-muted">© Copyright 2021 Nina's Portfolio</p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
}