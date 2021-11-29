import React from 'react'
import {Navbar,Container,Nav,NavDropdown, Brand, Toggle,Collapse,Link} from 'react-bootstrap'

function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/About">ABOUT</Nav.Link>
                            <Nav.Link href="/products">PRODUCTS</Nav.Link>
                            <Nav.Link href="/catalogue">CATALOGUE</Nav.Link>
                            <Nav.Link href="/contact">CONTACTS</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="#login"><i class="fa fa-sign-in-alt"><b>Log In</b></i></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <b>SignUp</b>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header





{/* <header id="header">

<div className="bottom-row">
    <div className="container_24">
        <div className="grid_24">
            <nav className="primary">
                <ul id="topnav" className="sf-menu">
                    <li
                        id="menu-item-205"
                        className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-203 current_page_item menu-item-205"
                    >
                        <a href="index-2.html">Home</a>
                    </li>
                    <li
                        id="menu-item-21"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21"
                    >
                        <a href="about.html">About</a>
                    </li>
                    <li
                        id="menu-item-324"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-324"
                    >
                        <a href="product.html">Products</a>
                    </li>
                    <li
                        id="menu-item-105"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-105"
                    >
                        <a href="catalogue.html">Catalogue</a>
                    </li>
                    <li
                        id="menu-item-17"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17"
                    >
                        <a href="contact.html">Contacts</a>
                    </li>
                    <li
                        id="menu-item-17"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17"
                    />
                </ul>{" "}
            </nav>
            <div className="clear" />
        </div>
    </div>
</div>
</header> */}