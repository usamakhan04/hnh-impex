import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import $ from "jquery";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HnH from "../../src/assets/hnh.mp4"

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
                {/* <div className="hero__categories__all">
                  <i className="fa fa-bars" />
                  <span>All departments</span>
                </div> */}
                <Card className="listGroup_card_width">
                  <ListGroup >
                    <ListGroup.Item style={{ backgroundColor: "black" }} className="text-white"><b>ALL CATEGORIES</b></ListGroup.Item>
                    <ListGroup.Item><Link className="listGroup_item_link" to="">DOWNLOADS </Link> <ChevronRightIcon /></ListGroup.Item>
                    <ListGroup.Item><Link className="listGroup_item_link" to="">MATERIALS </Link> <ChevronRightIcon /></ListGroup.Item>
                    <ListGroup.Item><Link className="listGroup_item_link" to="">ELECTRO </Link><ChevronRightIcon /></ListGroup.Item>
                    <ListGroup.Item><Link className="listGroup_item_link" to="">BEAUTY </Link><ChevronRightIcon /></ListGroup.Item>
                    <ListGroup.Item><Link className="listGroup_item_link" to="">BROCHURES </Link><ChevronRightIcon /></ListGroup.Item>
                  </ListGroup>
                </Card>
                <video className="video_width mt-3" autoPlay muted controls >
                  <source src={HnH} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="col-lg-9">
              <Carousel fade>
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
            <div className="col-md-3 mb-3">
              <Card className="cards_height">
                <Card.Img className="card_images"
                  variant="top"
                  src="./surgical_categories/medical-diagnostics-products.jpg"
                />
                <Card.Body className="inp">
                  <Link to="" style={{ color: '#000000', textDecoration: 'none', textAlign: 'center' }}>
                    <hr />

                    <Card.Title>DENTAL</Card.Title>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 mb-3">
              <Card className="cards_height">
                <Card.Img className="card_images"
                  variant="top"
                  src="./surgical_categories/SR_065165.jpg"
                />
                <Card.Body className="inp">
                  <Link to="" style={{ color: '#000000', textDecoration: 'none', textAlign: 'center' }}>
                    <hr />
                    <Card.Title>SURGICAL</Card.Title>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 mb-3">
              <Card className="cards_height">
                <Card.Img className="card_images"
                  variant="top"
                  src="./surgical_categories/s3k3m9.jpg"
                />
                <Card.Body className="inp">
                  <Link to="" style={{ color: '#000000', textDecoration: 'none', textAlign: 'center' }}>
                    <hr />

                    <Card.Title>VETERINARY</Card.Title>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 mb-3">
              <Card className="cards_height">
                <Card.Img className="card_images"
                  variant="top"
                  src="./surgical_categories/utcs tungsten scissor.jpg"
                />
                <Card.Body className="inp">
                  <Link to="" style={{ color: '#000000', textDecoration: 'none', textAlign: 'center' }}>
                    <hr />

                    <Card.Title>ORTHOPAEDIC</Card.Title>
                  </Link>

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
  );
}

export default MainContent;
