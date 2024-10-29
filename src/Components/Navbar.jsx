import React from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <section className='navbar'>
            <Link to='/' className='navbar-item'>Home</Link>
            <Link to='/Projects' className='navbar-item'>Projects</Link>
            <Link to='/Photography' className='navbar-item'>Photography</Link>
            <Link to='/Blog' className='navbar-item'>Blog</Link>
            <Link to='/Test' className='navbar-item'>Test</Link>
        </section>
    )
}