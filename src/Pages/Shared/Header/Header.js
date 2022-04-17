import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerLogo from '../../../images/header-logo/gym.png'


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height="30" src={headerLogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='fw-bold px-3'>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home" className='text-white'>Home</Nav.Link>
                            <Nav.Link href="home#services" className='text-white'>Services</Nav.Link>
                            <Nav.Link as={Link} to="checkout" className='text-white'>Checkout</Nav.Link>
                            <Nav.Link as={Link} to="blog" className='text-white'>Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="signup" className='text-white'>Sign Up</Nav.Link>
                            <Nav.Link as={Link} to="login" className='text-white'>Log In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;