import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Head from "../components/Head";
import { Card, ListGroup } from "react-bootstrap";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <div>
      <Head />
      <Header />
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
                  <ListGroup>
                    <ListGroup.Item
                      style={{ backgroundColor: "black" }}
                      className="text-white"
                    >
                      <b>ALL CATEGORIES</b>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/DentalInstruments">
                        Dental Instruments{" "}
                      </Link>{" "}
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/SurgicalInstrument">
                        Surgical Instruments{" "}
                      </Link>{" "}
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/VeterinaryInstrument">
                        Veterinary Instruments{" "}
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                        Gynecology{" "}
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                        Material{" "}
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                        Electro{" "}
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                        Beauty{" "}
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                        Brochures{" "}
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                        Orthopaedics{" "}
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="">
                <h1 className="header-title1">ALL PRODUCTS</h1>
                <hr />
                <Cards />
                
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>
      <Footer />
    </div>
  );
};

export default Products;
