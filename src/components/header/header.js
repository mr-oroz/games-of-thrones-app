import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link style={{textDecoration: 'none', color: 'white'}} to='/'>Games of Thrones</Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link style={{textDecoration: 'none', color: 'white'}}
                                  to={'/charackters'}>Charackters</Link>
                        </Nav.Link>
                        <Nav.Link href="#features">
                            <Link style={{textDecoration: 'none', color: 'white'}} to={'/books'}>Books</Link>
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                            <Link style={{textDecoration: 'none', color: 'white'}} to={'/houses'}>Houses</Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default Header;