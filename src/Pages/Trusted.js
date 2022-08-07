import React from "react";
import "../Styles/Trusted.css";
function Trusted() {
  return (
    <div className="container trusted">
      <div className="row">
        <h2>Our Trusted Partner</h2>
        <div className="col-12 mx-auto">
          <div className="row ">
            <div className="col-3">
              <div className="row">
                <div className="img-wrap">
                  <img src={process.env.PUBLIC_URL + "images/airbnb.svg"} />
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row">
                <div className="img-wrap">
                  <img src={process.env.PUBLIC_URL + "images/adidas-7.svg"} />
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row">
                <div className="img-wrap">
                  <img src={process.env.PUBLIC_URL + "images/corsair-2.svg"} />
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row">
                <div className="img-wrap">
                  <img src={process.env.PUBLIC_URL + "images/disney.svg"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trusted;
