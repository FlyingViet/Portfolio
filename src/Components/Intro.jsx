import React from 'react';
import { brian } from '../Images/index';
import '../css/Intro.css';
import Experience from './Experience';

export default function Intro() {
    return(
        <div className="about">
            <div className="intro">
                <div className="image">
                    <center>
                        <img className='img' src={brian} alt="Brian"/>
                        <div>
                            <h2>Brian Hoang</h2>
                            <p>Software Engineer</p>
                        </div>
                    </center>
                </div>
                <div className="description">
                    <h2>Hi! I'm Brian.</h2>
                    I am a Software Engineer working at Amazon<br/>
                    I graduated from UW-Milwaukee in 2020<br/><br/>
                    I love coding, eating, taking pictures, and traveling. I hope that someday I will be able to capture all the great moments in my life.
                </div>
                
            </div>
        </div>
    )
}