import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {Link} from "react-router-dom";

function NavigationBar() {
    return (
        <Navbar bg="light" variant="light" id="navigation-bar">
            <Container>
                <Navbar.Brand href="/">
                    <img id="logo" src="/logo.png" alt="Logo"/>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" className="links">All products</Link>
                    <Link to="/basses" className="links">Basses</Link>
                    <Link to="/pianos" className="links">Pianos</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}


export default NavigationBar;