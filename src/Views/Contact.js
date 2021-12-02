import React from 'react';
import Footer from '../components/Footer';
import Head from '../components/Head';
import Header from '../components/Header';
import { Card, Row, Col } from 'react-bootstrap'
import { Navbar, Container, Nav, NavDropdown, Brand, Toggle, Collapse, } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Contact = () => {
    return (
        <div>
            <Head />
            <Header />

            <div className="main-content">
                <div className="container_24 primary_content_wrap clearfix">
                    <div id="content">
                        <div
                            id="post-14"
                            className="post-14 page type-page status-publish hentry page"
                        >
                            <div className="grid_24 ">
                                <h3 style={{ textAlign: "center" }}>H&H Impex.<b>Map</b></h3>
                                <hr />
                                <br />
                                <div className="google-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d926737.8937868911!2d67.0099388!3d24.8614622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9764eec0fcef%3A0x5343f729e3cc3e36!2sHyderabad+Deccan!5e0!3m2!1sen!2s!4v1423793573161"
                                        width={940}
                                        height={300}
                                        frameBorder={0}
                                        style={{ border: 0 }}
                                    />
                                </div>
                            </div>
                            <div className="clear" />
                            <div className="grid ">
                                <hr />

                                <br />
                                <br />
                                <br />
                                <h3 style={{ textAlign: "center" }}>Contact information <b>H&H Impex.</b></h3>
                                <hr />
                                <br />

                                <div>
                                    <Row>
                                        <Col><Card border="dark" style={{ width: '18rem' }} className="inp0">
                                            <Card.Header style={{ textAlign: "center" }} ><b>Samar Hussain</b></Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    Business Associate
                                                    (Karachi,Pakistan)
                                                    187Q P.E.C.H.S. Karachi,
                                                    +923142500475
                                                    samar@handhimpex.com
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                            <br /></Col>
                                        <Col><Card border="dark" style={{ width: '18rem' }} className="inp1">
                                            <Card.Header style={{ textAlign: "center" }}><b>Kumail Reza</b></Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    (London,England)
                                                    Business Associate
                                                    81 church drive, Harrow, middlesex, HA2 7NR.
                                                    00447946305320
                                                    kumail@handhimpex.com
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                            <br /></Col>
                                        <Col> <Card border="dark" style={{ width: '18rem' }} className="inp2">
                                            <Card.Header style={{ textAlign: "center" }}><b>Sadiq Badami</b></Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    (Hyderabad,India)
                                                    Business Associate
                                                    22-6-1017, irani lane, hyderabad-500002,telangana.
                                                    +919703608540
                                                    sadiq@handhimpex.com
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                            <br /></Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row>
                                        <Col><Card border="dark" style={{ width: '18rem' }} className="inp3">
                                            <Card.Header style={{ textAlign: "center" }}><b>Muzammil ali khan</b></Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    (Karachi,Pakistan)
                                                    Business Associate
                                                    187Q P.E.C.H.S. Karachi.
                                                    03002682535
                                                    muzammilkhan@handhimpex.com
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                            <br /></Col>
                                        <Col><Card border="dark" style={{ width: '18rem' }} className="inp4">
                                            <Card.Header style={{ textAlign: "center" }}><b>Maesam Raza</b></Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    (Karachi,Pakistan)
                                                    Business Associate
                                                    187Q P.E.C.H.S. Karachi.
                                                    03322901615
                                                    maesam@handhimpex.com
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                            <br /></Col>
                                        <Col> <Card border="dark" style={{ width: '18rem' }} className="inp5">
                                            <Card.Header style={{ textAlign: "center" }}><b>Asif Z. Warsi</b></Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    (Karachi,Pakistan)
                                                    Business Associate
                                                    187Q P.E.C.H.S. Karachi.
                                                    03202121330
                                                    asifwarsi@handhimpex.com
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                            <br /></Col>
                                    </Row>
                                </div>


                                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="justify-content-center">
                                    

                                            <Nav>
                                                
                                                <Row style={{marginTop:35 }}>
                                                    <Col >
                                                <Navbar.Brand ><Link style={{ color: '#b6b8b6', textDecoration: 'none' }} to="#"><b>website</b>: www.handhimpex.com</Link></Navbar.Brand>
                                                    </Col>
                                                    <Col >
                                                <Navbar.Brand><p style={{ color: '#b6b8b6', textDecoration: 'none', paddingTop: "5px" }}><b>E-mail</b>: info@handhimpex.com</p></Navbar.Brand>
                                                    </Col>
                                                    <Col >
                                                <Navbar.Brand><p style={{ color: '#b6b8b6', textDecoration: 'none', paddingTop: "5px" }}><b>Tel</b>: 021123456789</p></Navbar.Brand>
                                                    </Col>
                                                </Row>
                                              
                                            </Nav>


                                </Navbar>


                                {/* <dl className="address">
                                    <dd>
                                        <ul>
                                            <br />
                                            <li>
                                                website :
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;www.handhimpex.com
                                            </li>
                                            <br />
                                            <li>
                                                E-mail:
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;info@handhimpex.com
                                            </li>
                                        </ul>
                                    </dd>
                                </dl> */}
                            </div>
                            <div className="clear" />
                            <div className="pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;