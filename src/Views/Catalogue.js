import React from "react";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";
import { Button } from "@mui/material";
import { Row, Col } from "react-bootstrap";

const Catalogue = () => {
  const data = [
    {
      img: "https://handhimpex.com/dental-tools2.jpg",
      title: "DENTAL INSTRUMENTS",
      para: "Extracting Forceps AmeExtracting Forceps Eng Filling InstrumentsPeriodontal Curettes a Dental Probes Burnishers and Pocket Periodontal Pocket Pro Periodontia Instrument Periodontia Instrument,...",
    },
    {
      img: "https://handhimpex.com/Bone_Holding_Forceps,_Curved_w-_Drill_Guide-600x3155.jpg",
      title: "SURGICAL INSTRUMENTS",
      para: " Hooks & Retractors Abdominal Sugery, Inte Gall Blader, Liver & SVaginal Specula & Retr Utrine Dilators, ProbeBiopsy Instruments ObstetricsTracheotomy, ,...",
    },
    {
      img: "	https://handhimpex.com/tagged_Ins3.jpg",
      title: "VETERINARY INSTRUMENTS",
      para: " Bull Nose Castration Forceps Castrators Ear Instruments Equine Instruments Helters Livestock and Identifi Needle Holders with Ca Torcars,...",
    },
    {
      img: "	https://handhimpex.com/Spectrum%20Dental2.jpg",
      title: "ORTHOPAEDIC INSTRUMENTS",
      para: "Plates Screws Others,...",
    },
    {
      img: "https://handhimpex.com/iStock_000002816114Large11.jpg",
      title: "ELECTRO INSTRUMENTS",
      para: "Abbey Resction Needle Bipolar Forceps Dispos Bipolar Forceps Dispos Diathermy Instruments  Diathermy Knife Disposible Laparoscopi Electrodes Electrosurgical Hand C Monopolar Disposible E Monopolar ,...",
    },
    // {
    //   img: "https://static.pexels.com/photos/7357/startup-photos.jpg",
    //   title: "ProVyuh",
    //   para: " This is a company that builds websites, web .",
    // },
    // {
    //   img: "https://static.pexels.com/photos/262550/pexels-photo-262550.jpeg",
    //   title: "ProVyuh",
    //   para: " This is a company that builds websites, web apps and e-commerce solutions.",
    // },
    // {
    //   img: "https://static.pexels.com/photos/326424/pexels-photo-326424.jpeg",
    //   title: "ProVyuh",
    //   para: " This is a company that builds websites, web apps and e-commerce solutions.",
    // },
  ];
  return (
    <div>
      <Head />
      <Header />

      <div class="container">
        <div className="header-title">
          <br />
          <h3>CATALOGUE</h3>
          <hr />
        </div>

        <div className="container mt-1 mb-5">
          {data.map((currElem) => {
            return (
              <>
                <div className="row mb-3">
                  <div className="col-md-3 col-sm-6 item mb-5">
                    <h6 className="item-card-title mt-3 mb-3">
                      {currElem.title}
                    </h6>
                    <div className="card item-card card-block mb-5">
                      {/* <h4 className="card-title text-right">
                      </h4> */}

                      <img
                        className="catalogue_images"
                        src={currElem.img}
                        alt="Photo of sunset"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-6 item mt-5 mb-5">
                    <p className="card-text p-2">{currElem.para}</p>
                    <Row>
                      <Col className="p-4">
                        <Button variant="contained">Details</Button>
                      </Col>
                      <Col></Col>
                    </Row>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalogue;
