import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    const current = new Date();
    const year = current.getFullYear();
    return (
        <div>
            <footer>
                <div className='d-flex justify-content-center text-decoration-none'>
                    <Nav.Link as={Link} to="/" className='text-light'>Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" className='text-light'>About</Nav.Link>
                    <Nav.Link as={Link} to="/blog" className='text-light'>Blog</Nav.Link>
                    <Nav.Link as={Link} to="/privacy" className='text-light'>Privacy Policy</Nav.Link>
                </div>
                <p className='text-light text-center mb-1'>Copyright <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> {year}. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;