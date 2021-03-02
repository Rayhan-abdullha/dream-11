import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';

const Navigation = () => {
    
    return (
        <div className="navigation bg-dark d-flex justify-content-center">
            <Navbar>
                <Nav className="container" className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Players</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Navigation;