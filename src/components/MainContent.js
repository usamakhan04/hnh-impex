import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import $ from 'jquery'
import Carousel from 'react-bootstrap/Carousel'

function MainContent() {

    // $('.hero__categories__all').on('click', function(){
    //     $('.hero__categories ul').slideToggle(400);
    // });

    return (
        <div>
            <section className="hero mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                    <i className="fa fa-bars" />
                                    <span>All departments</span>
                                </div>
                                <Card style={{ width: '18rem' }}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>DOWNLOADS</ListGroup.Item>
                                        <ListGroup.Item>MATERIALS</ListGroup.Item>
                                        <ListGroup.Item>ELECTRO</ListGroup.Item>
                                        <ListGroup.Item>BEAUTY</ListGroup.Item>
                                        <ListGroup.Item>BROCHURES</ListGroup.Item>
                                    </ListGroup>
                                </Card>

                            </div>
                        </div>
                        <div className="col-lg-9">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="./surgical_categories/slide-11.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        {/* <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="./surgical_categories/slide-21.jpg"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        {/* <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="./surgical_categories/slide-31.jpg"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        {/* <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>

                        </div>
                    </div>
                </div>
                <br />
                <div className="container">

                    <div className="row">
                        <div className="col-md-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./surgical_categories/medical-diagnostics-products.jpg" />
                                <Card.Body>
                                    <Card.Title>DENTAL</Card.Title>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./surgical_categories/SR_065165.jpg" />
                                <Card.Body>
                                    <Card.Title>SURGICAL</Card.Title>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./surgical_categories/s3k3m9.jpg" />
                                <Card.Body>
                                    <Card.Title>VETERINARY</Card.Title>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./surgical_categories/utcs tungsten scissor.jpg" />
                                <Card.Body>
                                    <Card.Title>ORTHOPAEDIC</Card.Title>
                                    {/* <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text> */}
                                </Card.Body>
                            </Card>
                        </div>


                    </div>
                </div>
            </section>




        </div>
    )
}

export default MainContent
