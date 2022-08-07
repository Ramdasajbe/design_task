import React from "react";
import "../Styles/Categories.css";
import { IoFishOutline } from "react-icons/io5";
import { GiMedicines } from "react-icons/gi";
import { FaBabyCarriage } from "react-icons/fa";
import { GiOfficeChair, GiGardeningShears, GiFruitBowl } from "react-icons/gi";
import LandingComponent from "./LandingComponent";
import Bottam from "./Bottam";
function Categories() {
  const Abcd = () => {
    alert("Clicked");
  };
  return (
    <div className=" container-fluid">
      {/* navbar start */}
      <LandingComponent />
      {/* navbar end */}
      <div className="container  ">
        <h3>Categories</h3>
        <div className="row mt-3 ">
          <div
            className="col-4 col-md-2 icons "
            onClick={() => {
              Abcd();
            }}
          >
            <div className="icon1">
              <IoFishOutline style={{ fontSize: 40 }} />
              Meat & fish
            </div>
          </div>
          <div
            className="col-4 col-md-2 icons"
            onClick={() => {
              Abcd();
            }}
          >
            <div className="icon1">
              <GiFruitBowl style={{ fontSize: 40 }} />
              Vegetable
            </div>
          </div>
          <div
            className="col-4 col-md-2 icons"
            onClick={() => {
              Abcd();
            }}
          >
            <div className="icon1">
              <GiMedicines style={{ fontSize: 40 }} />
              Medicine
            </div>
          </div>
          <div
            className="col-4 col-md-2 icons"
            onClick={() => {
              Abcd();
            }}
          >
            <div className="icon1">
              <FaBabyCarriage style={{ fontSize: 40 }} />
              Baby
            </div>
          </div>
          <div
            className="col-4 col-md-2 icons"
            onClick={() => {
              Abcd();
            }}
          >
            <div className="icon1">
              <GiOfficeChair style={{ fontSize: 40 }} />
              Office
            </div>
          </div>
          <div
            className="col-4 col-md-2 icons"
            onClick={() => {
              Abcd();
            }}
          >
            <div className="icon1">
              <GiGardeningShears style={{ fontSize: 40 }} />
              Garden
            </div>
          </div>
        </div>
      </div>
      {/* bottam start */}
      <Bottam />
      {/* bottam end */}
    </div>
  );
}

export default Categories;
