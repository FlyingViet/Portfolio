import React from 'react';
import { Navbar } from './index';
import '../css/Header.css';

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
                    <a href="mailto: brihoang1995@gmail.com">brihoang1995@gmail.com</a>
                </section>
            </section>
        </section>
    )
}