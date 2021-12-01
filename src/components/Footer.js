import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Brand, Toggle, Collapse, } from 'react-bootstrap'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className="footer-area">
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <img
                                width="160" height="60"
                                src="./surgical_categories/logo.png"

                            />
                            <Nav>
                                <Navbar.Brand ><Link style={{ color: '#b6b8b6', textDecoration: 'none' }} to="#">H&H-Impex</Link></Navbar.Brand>
                                <Navbar.Brand><p style={{ color: '#b6b8b6', textDecoration: 'none', paddingTop: "5px" }}>is proudly powered by turabiIndustries</p></Navbar.Brand>

                            </Nav>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                </Nav>
                                <Nav>
                                    <br />
                                    <FacebookOutlinedIcon />
                                    &nbsp;
                                    &nbsp;
                                    <TwitterIcon />
                                    &nbsp;
                                    &nbsp;
                                    <InstagramIcon />

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>

        </div>
    )
}

export default Footer
