import React from 'react';
import { Experience, Intro } from '../Components/index.js'
import '../css/About.css';

export default function Home() {
    return (
        <div>
            <div className="intro">
                <center>
                    <Intro/>
                </center>
            </div>
            <div className="work-space">
                <Experience/>
            </div>
        </div>
    )
}