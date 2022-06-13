import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../../images/logo/images.png'

const Header = () => {

    return (
        <header>

            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="100px"
                            height="50px"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#pricing">Home</Nav.Link>
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#features">Service</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>


        </header>
    );
};

export default Header;