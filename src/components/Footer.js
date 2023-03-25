import React, { Component } from 'react';


export default class Footer extends Component {
render() {
    let resumeData = this.props.resumeData;
    
    return (
        <section id="footer">
            <div className="row">
                <div className="footer">
                            <p>"I never look back, darling, it distracts from the now," - Edna Mode</p>
                    <div className="row" style={{fontFamily:'bodyFont', fontSize:"15px"}}>
                        <p class="text-center text-muted">© Copyright 2023 Nina's Portfolio</p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
}