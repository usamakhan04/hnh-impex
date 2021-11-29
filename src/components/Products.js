import React from "react";
import Cards from "./Cards";
import Header from "./Header";

const Products = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <Cards />
      </div>
    </div>
  );
};

export default Products;
