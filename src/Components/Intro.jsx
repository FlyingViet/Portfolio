import React from 'react';
import { brian } from '../Images/index';
import '../css/Intro.css';

export default function Intro() {
    return(
        <div className="about">
            <div className="intro">
                <div className="image">
                    <center>
                        <img src={brian} alt="Brian"/>
                        <div>
                            <h2>Brian Hoang</h2>
                            <p>Software Engineer</p>
                        </div>
                    </center>
                </div>
                <div className="description">
                    <h2>Hi! I'm Brian.</h2>
                    I'm from Wisconsin and I graduated from University of Wisconsin - Milwaukee. <br/>
                    I am majoring in Computer Science. <br/><br/>
                    I love coding, eating, taking pictures, and traveling. I hope that someday I will be able to capture all the great moments in my life.
                </div>
            </div>
        </div>
    )
}