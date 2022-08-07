import React from "react";
import "../Styles/Landingpage.css";
import { Link } from "react-router-dom";

import { TiShoppingCart } from "react-icons/ti";

import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillHeart,
} from "react-icons/ai";
function LandingComponent() {
  return (
    <div className="App">
      {/* Navbar start */}
      <div className="container-fluid main">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <div className="SliderIcon">
              <Link to={"/"}>
                <TiShoppingCart style={{ color: "#40AA54", fontSize: "40" }} />{" "}
              </Link>
              <span style={{ color: "#40AA54" }}>e</span>Grocerry{" "}
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse ms-auto "
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  // href="/Categories"
                  to={"/"}
                >
                  Home
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  // href="/Categories"
                  to={"/Categories"}
                >
                  Categories
                </Link>

                <Link
                  className="nav-link active"
                  aria-current="page"
                  // href="/Popular"
                  to={"/Popular"}
                >
                  Popular
                </Link>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/Singal"
                  >
                    <AiOutlineShoppingCart
                      className="carticon"
                      style={{
                        fontSize: 30,
                        color: "#40AA54",
                        marginRight: "10px",
                      }}
                    />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/Singal"
                  >
                    <AiFillHeart
                      className="carticon"
                      style={{
                        fontSize: 30,
                        color: "#FF6D59",
                        marginRight: "10px",
                      }}
                    />
                  </Link>
                </li>
                <li class="nav-item headerimg">
                  <a class="nav-link active" aria-current="page" to="#">
                    Hellojonny{" "}
                  </a>
                  <img
                    style={{ height: 50, width: 50, borderRadius: 50 }}
                    src={
                      process.env.PUBLIC_URL +
                      "images/julian-wan-WNoLnJo7tS8-unsplash.jpg"
                    }
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default LandingComponent;
