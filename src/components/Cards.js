import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import img1 from '../assets/productimg/1.jpg'
import img2 from '../assets/productimg/2.jpg'
import img3 from '../assets/productimg/3.jpg'
import img4 from '../assets/productimg/4.jpg'
import img5 from '../assets/productimg/5.jpg'
import img6 from '../assets/productimg/6.jpg'

const Cards = () => {
  const data = [
    {
      img: "../assets/productimg/1.jpg",
      title: "Dental",
    },
    {
      img: "./src/assets/productimg/1.jpg",
      title: "Dental",
    },
    {
      img: "./src/assets/productimg/1.jpg",
      title: "Dental",
    },
    {
      img: "./src/assets/productimg/1.jpg",
      title: "Dental",
    },
    {
      img: "./src/assets/productimg/1.jpg",
      title: "Dental",
    },
    {
      img: "./src/assets/productimg/1.jpg",
      title: "Dental",
    },

  ];
  return (
    <div>
      <div className="containerm">
        <div className="row">
          <div className="col-md-4">
            <div className="image">
              {" "}
              <img src={img1} alt />{" "}
              <div className="SearchIcon1">
                <Row>
                  <Col class="col-sm-6"><input type="button" alt="Button" value="Deatils" className="btn btn-outline-primary" /></Col>
                  &nbsp;
                  <br />
                  &nbsp;
                  <Col class="col-sm-6"><input type="button" alt="Button" value="BUY NOW" className="btn btn-outline-success" />&nbsp;<ShoppingCartIcon /></Col>
                </Row>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image">
              {" "}
              <img src={img2} alt />{" "}
              <div className="SearchIcon1">
                <Row>
                  <Col class="col-sm-6"><input type="button" alt="Button" value="Deatils" className="btn btn-primary" /></Col>
                  &nbsp;
                  <br />
                  &nbsp;
                  <Col class="col-sm-6"><input type="button" alt="Button" value="BUY NOW" className="btn btn-danger" />&nbsp;<ShoppingCartIcon /></Col>
                </Row>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image">
              {" "}
              <img src={img3} alt />{" "}
              <div className="SearchIcon1">
                <Row>
                  <Col class="col-sm-6"><input type="button" alt="Button" value="Deatils" className="btn btn-primary" /></Col>
                  &nbsp;
                  <br />
                  &nbsp;
                  <Col class="col-sm-6"><input type="button" alt="Button" value="BUY NOW" className="btn btn-danger" />&nbsp;<ShoppingCartIcon /></Col>
                </Row>
              </div>
            </div>
          </div>
          &nbsp;
          <hr />
          <br />
          <div className="col-md-4">
            <div className="image">
              {" "}
              <img src={img4} alt />{" "}
              <div className="SearchIcon1">
                <Row>
                  <Col class="col-sm-6"><input type="button" alt="Button" value="Deatils" className="btn btn-primary" /></Col>
                  &nbsp;
                  <br />
                  &nbsp;
                  <Col class="col-sm-6"><input type="button" alt="Button" value="BUY NOW" className="btn btn-danger" />&nbsp;<ShoppingCartIcon /></Col>
                </Row>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image">
              {" "}
              <img src={img5} alt />{" "}
              <div className="SearchIcon1">
                <Row>
                  <Col class="col-sm-6"><input type="button" alt="Button" value="Deatils" className="btn btn-primary" /></Col>
                  &nbsp;
                  <br />
                  &nbsp;
                  <Col class="col-sm-6"><input type="button" alt="Button" value="BUY NOW" className="btn btn-danger" />&nbsp;<ShoppingCartIcon /></Col>
                </Row>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image">
              {" "}
              <img src={img6} alt />{" "}
              <div className="SearchIcon1">
                <Row>
                  <Col class="col-sm-6"><input type="button" alt="Button" value="Deatils" className="btn btn-primary" /></Col>
                  &nbsp;
                  <br />
                  &nbsp;
                  <Col class="col-sm-6"><input type="button" alt="Button" value="BUY NOW" className="btn btn-danger" />&nbsp;<ShoppingCartIcon /></Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
