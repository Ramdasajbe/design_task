import React from "react";
import "../Styles/Bottam.css";
import { TiShoppingCart } from "react-icons/ti";
import {
  AiFillApple,
  AiOutlineGooglePlus,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
function Bottam() {
  return (
    <div className="container-fluid">
      <div className="row footer-bg">
        <div className="container  tranperant-bg">
          <div className="col-12  bottam-main bottam1 mr-100">
            <div className="row main-conatiner">
              <div className="col-4 ">
                <div className="bottam2">
                  <TiShoppingCart
                    style={{ color: "#40AA54", fontSize: "120px" }}
                  />
                  <div>
                    <span style={{ color: "#40AA54", fontSize: "120px" }}>
                      e
                    </span>
                    <span style={{ fontSize: "30px" }}> Grocery</span>
                  </div>
                </div>
                <div className="bottam4">
                  <AiFillApple
                    style={{
                      fontSize: "60",
                      border: "2px #40AA54 solid",
                      borderRadius: "50%",
                      marginRight: "10px",
                      padding: "9px",
                    }}
                  />
                  <AiOutlineGooglePlus
                    style={{
                      fontSize: "60",
                      border: "2px #40AA54 solid",
                      borderRadius: "50%",
                      marginRight: "10px",
                      padding: "9px",
                    }}
                  />
                  <AiOutlineTwitter
                    style={{
                      fontSize: "60",
                      border: "2px #40AA54 solid",
                      borderRadius: "50%",
                      marginRight: "10px",
                      padding: "9px",
                    }}
                  />
                  <FaFacebookF
                    style={{
                      fontSize: "60",
                      border: "2px #40AA54 solid",
                      borderRadius: "50%",
                      marginRight: "10px",

                      padding: "9px",
                    }}
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="bottam3">
                  <p
                    style={{
                      fontSize: "25px",
                      fontWeight: 900,
                      color: "#40AA54",
                    }}
                  >
                    About Us
                  </p>
                  <p>How it works</p>
                  <p>Our Packages</p>
                  <p>Promotion</p>
                  <p>Refer to friend</p>
                </div>
              </div>
              <div className="col-2">
                <div className="bottam3">
                  <p
                    style={{
                      fontSize: "25px",
                      fontWeight: 900,
                      color: "#40AA54",
                    }}
                  >
                    Delivery
                  </p>
                  <p>Cost On Delivery</p>
                  <p>Payment Method</p>
                  <p>Delivary</p>
                  <p>Return</p>
                </div>
              </div>
              <div className="col-2">
                <div className="bottam3">
                  <p
                    style={{
                      fontSize: "25px",
                      fontWeight: 900,
                      color: "#40AA54",
                    }}
                  >
                    Contacts
                  </p>
                  <p>216/e East Road</p>
                  <p>Emeergencyat@gmail.com</p>
                  <p>9876543210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        //{" "}
      </div>
      //{" "}
    </div>
  );
}

export default Bottam;
