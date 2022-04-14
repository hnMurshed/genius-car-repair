import bandLogo from '../../../images/logo.png';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useFirebase from '../../../hooks/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MenuIcon } from '@heroicons/react/solid';
import './Header.css';

const Header = () => {
    const { signOutUser } = useFirebase();
    const [user] = useAuthState(auth)
    return (
        <>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="primary" variant="primary" className='header'>
                <Container>
                    <Navbar.Brand as={Link} to="/" className='m-0'>
                        <img className='brand-logo' src={bandLogo} alt="" />
                    </Navbar.Brand>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <div className='d-flex align-items-center user-profile-div'>
                        {
                            user && <NavDropdown id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={signOutUser} as={Link} to="/login">
                                    Sign Out
                                </NavDropdown.Item>
                            </NavDropdown>
                        }
                        {
                            user ? <div>
                                <span className='text-white'>{user.displayName}</span>
                                <img className='user-profile ms-2' src={user.photoURL} alt="" />
                            </div> : <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>
                        }
                        <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav">
                            <MenuIcon width={32} height={32}></MenuIcon>
                        </Navbar.Toggle>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;