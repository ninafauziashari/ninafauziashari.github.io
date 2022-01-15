import React, { Component } from 'react';


export default class Footer extends Component {
render() {
    let resumeData = this.props.resumeData;
    
    return (
        <section id="footer">
            <div className="row">
                <div className="footer">
                            <p>Be present. It's a gift</p>
                    <div className="row" style={{fontFamily:'bodyFont', fontSize:"15px"}}>
                        <p class="text-center text-muted">© Copyright 2021 Nina's Portfolio</p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
}