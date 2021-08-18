import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Games of Thrones</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Charackters</Nav.Link>
                        <Nav.Link href="#features">Books</Nav.Link>
                        <Nav.Link href="#pricing">Houses</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default Header;