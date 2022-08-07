import React from "react";
import LandingComponent from "./LandingComponent";
import Slider from "./Slider";
import Trusted from "./Trusted";
import ProductList from "./ProductList";
import { Outlet } from "react-router-dom";
import Bottam from "./Bottam";
import "../Styles/Popular.css";
function Navcomo() {
  return (
    <div className="main">
      {" "}
      {/* navbar start */}
      <LandingComponent />
      {/* navbar end */}
      {/* slider start */}
      <Slider />
      {/* slider end */}
      {/* productlist start */}
      <ProductList />
      {/* product list end */}
      <Outlet />
      {/* trusted start */}
      <Trusted />
      {/* Trusted end */}
      {/* bottam start */}
      <Bottam />
      {/* bottam end */}
    </div>
  );
}

export default Navcomo;
