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
<<<<<<< HEAD
                        <p class="text-center text-muted">© Copyright 2021 Nina's Portfolio</p>
=======
                        <p class="text-center text-muted">© Copyright 2022 Nina's Portfolio</p>
>>>>>>> main
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
}