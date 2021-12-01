import React from "react";
import Head from "../../../components/Head";
import Header from "../../../components/Header";
import SurgicalCategories from "../SurgicalCategories";
const BonePunches = () => {
  return (
    <div>
      <Head />
      <Header />
      <section className="hero mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SurgicalCategories />
            </div>
            <div className="col-lg-9">
              <h4 className="text-muted">DENTAL INSTRUMENTS</h4>
              <hr />
              <div className="">{/* <Cards /> */}</div>
            </div>
          </div>
        </div>
        <br />
      </section>
    </div>
  );
};

export default BonePunches;
