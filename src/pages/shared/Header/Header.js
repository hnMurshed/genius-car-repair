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
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="primary" variant="primary">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img width={180} src={bandLogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav">
                        <MenuIcon width={32} height={32}></MenuIcon>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                        </Nav>
                        <Nav className='align-items-center'>
                            {
                                user ? <>
                                    <Nav.Link onClick={signOutUser} as={Link} to="login">
                                        Sign Out
                                    </Nav.Link>
                                    <span className='text-white'>{user.displayName}</span>
                                    <img className='user-profile ms-1' src={user.photoURL} alt="" />
                                </> : <>
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;