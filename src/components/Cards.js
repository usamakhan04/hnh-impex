import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Cards = () => {
  const data = [
    {
      img: "./surgical_categories/medical-diagnostics-products.jpg",
      title: "Dental",
    },
    {
      img: "./surgical_categories/medical-diagnostics-products.jpg",
      title: "Dental",
    },
    {
      img: "./surgical_categories/medical-diagnostics-products.jpg",
      title: "Dental",
    },
    {
      img: "./surgical_categories/medical-diagnostics-products.jpg",
      title: "Dental",
    },
    {
      img: "./surgical_categories/medical-diagnostics-products.jpg",
      title: "Dental",
    },
    {
      img: "./surgical_categories/medical-diagnostics-products.jpg",
      title: "Dental",
    },
    {
      img: "./surgical_categories/medical-diagnostics-products.jpg",
      title: "Dental",
    },
    {
      img: "./surgical_categories/medical-diagnostics-products.jpg",
      title: "Dental",
    },
    {
      img: "./surgical_categories/medical-diagnostics-products.jpg",
      title: "Dental",
    },
  ];
  return (
    <div>
      <div className="row">
        {data.map((currElem) => {
          return (
            <>
              <div className="col-md-4">
                <Card className="mb-3">
                  <Card.Img variant="top" height="100%" src={currElem.img} />
                  <Card.Body>
                    
                      <div className="row justify-content-around">
                        <div className=" col-6 col-md-6 col-lg-6">
                          <Card.Title>
                            <Link to="" style={{ textDecoration: "none" }}>
                              {currElem.title}
                            </Link>
                          </Card.Title>
                        </div>

                        <div className=" col-6 col-md-6 col-lg-6">
                          <Button variant="outlined"> Add to Cart </Button>
                        </div>
                      </div>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
