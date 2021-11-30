import React from "react";
import Cards from "./Cards";
import Header from "./Header";
import Head from './Head'

const Products = () => {
  return (
    <div>
      <Head/>
      <Header />
      <div className="container mt-5">
        <Cards />
      </div>
    </div>
  );
};

export default Products;
