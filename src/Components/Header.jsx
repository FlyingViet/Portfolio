import React from 'react';
import { Navbar } from './index';
import '../css/Header.css';
import {
    Link
  } from "react-router-dom";
export default function Header() {
    return(
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    <a href="/" className="header-logo">{"{ Brian Hoang }"}</a>
                </section>
                <section className="header-top__navbar">
                    <section className="header-top__navigation">
                        <Navbar/>
                    </section>
                    <hr className="header-top__seperator"></hr>
                </section>
            </section>
            <section className="header-bottom">
                <section className="header-bottom__email">
                    <a href="https://www.instagram.com/itzhoang/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </section>
                <section className="header-bottom__email">
                    <a href="https://www.linkedin.com/in/brianthoang/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </section>
                <section className="header-bottom__email">
                    <a href="https://github.com/FlyingViet/" target="_blank" rel="noopener noreferrer">GitHub</a>
                </section>
                <section className="header-bottom__email">
                    <Link to="/BrianResume.pdf" target="_blank" download>Resume</Link>
                </section>
                <section className="header-bottom__email">
                    <a href="mailto: brihoang1995@gmail.com">Email Me</a>
                </section>
            </section>
        </section>
    )
}