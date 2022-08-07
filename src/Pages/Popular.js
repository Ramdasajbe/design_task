import React from "react";
import "../Styles/Popular.css";
import { BsFillBagPlusFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";

import Bottam from "./Bottam";
import axios from "axios";
import LandingComponent from "./LandingComponent";
import { useState } from "react";
import { useEffect } from "react";
function Popular() {
  const dispatch = useDispatch();
  const [List, setList] = useState([]);
  const getData = async () => {
    const productList = await axios.get("https://fakestoreapi.com/products");
    console.log(productList.data);
    setList(productList.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container-fluid">
      {/* navbar start */}
      <LandingComponent />
      <div className="container  margin ">
        <div className="row ">
          {List.slice(1, 7).map((item) => {
            return (
              <div className="col-3 mr-5 mb-3 icon pt-2">
                <div className="prod">
                  <img
                    className="d-block w-100 img-fluid  prodimage"
                    src={item.image}
                  />
                </div>
                <div>
                  <h6>{item.title}</h6>
                  <div className="prodinner">
                    <h6>{item.price} Rs</h6>
                    <p>Rating {item.rating.rate}</p>
                  </div>
                </div>
                <div className="prod">
                  <div className="prod1">
                    <FiPlus
                      style={{
                        color: "#FF7461",
                        fontSize: "20px",
                        marginRight: "5px",
                        backgroundColor: "#FFF0EE",
                      }}
                    />
                    0
                    <AiOutlineMinus
                      style={{
                        color: "#FF7461",
                        fontSize: "20px",
                        marginLeft: "5px",
                        backgroundColor: "#FFF0EE",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* navbar end */}
      {/* <div className="container">
        <div className="container popular col-12 inner">
          <div>
            <h4>Popular bundle pack</h4>
          </div>

          <div className="innerrow">
            <div className="row ">
              <div className="col-md-3 col-4    popmain">
                <img
                  className=" w-100 popolarimage"
                  src={process.env.PUBLIC_URL + "images/veg.jpg"}
                />
                <div>
                  <h6>Cabbage</h6>
                  <div className="popularinter">
                    <p>1kg</p>
                    <h6>$13</h6>
                  </div>
                </div>
                <div className="prod">
                  <div className="prod1">
                    <FiPlus
                      onClick={() => {
                        dispatch(add());
                      }}
                      style={{
                        color: "#FF7461",
                        fontSize: "22px",
                        marginRight: "5px",
                        backgroundColor: "#FFF0EE",
                      }}
                    />
                    2
                    <AiOutlineMinus
                      onClick={() => {
                        dispatch(remove());
                      }}
                      style={{
                        color: "#FF7461",
                        fontSize: "22px",
                        marginLeft: "5px",
                        backgroundColor: "#FFF0EE",
                      }}
                    />
                  </div>
                  <div>
                    <BsFillBagPlusFill
                      style={{
                        backgroundColor: "#D8E7DA",
                        color: "#40AA54",
                        backgroundColor: "#D8E7DA",
                        fontSize: "22px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 col-4 mx-1  popmain 
            "
              >
                <img
                  className=" w-100 popolarimage"
                  src={process.env.PUBLIC_URL + "images/cab.jpg"}
                />

                <div>
                  <h6>Cabbage</h6>
                  <div className="popularinter">
                    <p>1kg</p>
                    <h6>$13</h6>
                  </div>
                </div>
                <div className="prod">
                  <div className="prod1">
                    <FiPlus
                      onClick={() => {
                        dispatch(add());
                      }}
                      style={{
                        color: "#FF7461",
                        fontSize: "22px",
                        marginRight: "5px",
                        backgroundColor: "#FFF0EE",
                      }}
                    />
                    2
                    <AiOutlineMinus
                      onClick={() => {
                        dispatch(remove());
                      }}
                      style={{
                        color: "#FF7461",
                        fontSize: "22px",
                        marginLeft: "5px",
                        backgroundColor: "#FFF0EE",
                      }}
                    />
                  </div>
                  <div>
                    <BsFillBagPlusFill
                      style={{
                        backgroundColor: "#D8E7DA",
                        color: "#40AA54",
                        backgroundColor: "#D8E7DA",
                        fontSize: "22px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 col-4 mx-1  popmain 
            "
              >
                <img
                  className=" w-100 popolarimage"
                  src={process.env.PUBLIC_URL + "images/gar.jpg"}
                />
                <div>
                  <h6>Cabbage</h6>
                  <div className="popularinter">
                    <p>1kg</p>
                    <h6>$13</h6>
                  </div>
                </div>
                <div className="prod">
                  <div className="prod1">
                    <FiPlus
                      onClick={() => {
                        dispatch(add());
                      }}
                      style={{
                        color: "#FF7461",
                        fontSize: "22px",
                        marginRight: "5px",
                        backgroundColor: "#FFF0EE",
                      }}
                    />
                    2
                    <AiOutlineMinus
                      onClick={() => {
                        dispatch(remove());
                      }}
                      style={{
                        color: "#FF7461",
                        fontSize: "22px",
                        marginLeft: "5px",
                        backgroundColor: "#FFF0EE",
                      }}
                    />
                  </div>
                  <div>
                    <BsFillBagPlusFill
                      style={{
                        backgroundColor: "#D8E7DA",
                        color: "#40AA54",
                        backgroundColor: "#D8E7DA",
                        fontSize: "22px",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                className="col-md-3 col-4 mx-1  popmain 
            "
              >
                <img
                  className=" w-100 popolarimage"
                  src={process.env.PUBLIC_URL + "images/ice.jpg"}
                />
                <div>
                  <h6>Cabbage</h6>
                  <div className="popularinter">
                    <p>1kg</p>
                    <h6>$13</h6>
                  </div>
                </div>
                <div className="prod">
                  <div className="prod1">
                    <FiPlus
                      onClick={() => {
                        dispatch(add());
                      }}
                      style={{
                        color: "#FF7461",
                        fontSize: "22px",
                        marginRight: "5px",
                        backgroundColor: "#FFF0EE",
                      }}
                    />
                    2
                    <AiOutlineMinus
                      onClick={() => {
                        dispatch(remove());
                      }}
                      style={{
                        color: "#FF7461",
                        fontSize: "22px",
                        marginLeft: "5px",
                        backgroundColor: "#FFF0EE",
                      }}
                    />
                  </div>
                  <div>
                    <BsFillBagPlusFill
                      style={{
                        backgroundColor: "#D8E7DA",
                        color: "#40AA54",
                        backgroundColor: "#D8E7DA",
                        fontSize: "22px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 col-4 mx-1  popmain 
            "
              >
                <img
                  className=" w-100 popolarimage"
                  src={process.env.PUBLIC_URL + "images/off.jpg"}
                />
                <div>
                  <h6>Cabbage</h6>
                  <div className="popularinter">
                    <p>1kg</p>
                    <h6>$13</h6>
                  </div>
                </div>
                <div className="prod">
                  <div className="prod1">
                    <FiPlus
                      onClick={() => {
                        dispatch(add());
                      }}
                      style={{
                        color: "#FF7461",
                        fontSize: "22px",
                        marginRight: "5px",
                        backgroundColor: "#FFF0EE",
                      }}
                    />
                    2
                    <AiOutlineMinus
                      onClick={() => {
                        dispatch(remove());
                      }}
                      style={{
                        color: "#FF7461",
                        fontSize: "22px",
                        marginLeft: "5px",
                        backgroundColor: "#FFF0EE",
                      }}
                    />
                  </div>
                  <div>
                    <BsFillBagPlusFill
                      style={{
                        backgroundColor: "#D8E7DA",
                        color: "#40AA54",
                        backgroundColor: "#D8E7DA",
                        fontSize: "22px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 col-4 mx-1  popmain 
            "
              >
                <img
                  className=" w-100 popolarimage"
                  src={process.env.PUBLIC_URL + "images/pot.jpg"}
                />
                <div>
                  <h6>Cabbage</h6>
                  <div className="popularinter">
                    <p>1kg</p>
                    <h6>$13</h6>
                  </div>
                </div>
                <div className="prod">
                  <div className="prod1">
                    <FiPlus
                      onClick={() => {
                        dispatch(add());
                      }}
                      style={{
                        color: "#FF7461",
                        fontSize: "22px",
                        marginRight: "5px",
                        backgroundColor: "#FFF0EE",
                      }}
                    />
                    2
                    <AiOutlineMinus
                      onClick={() => {
                        dispatch(remove());
                      }}
                      style={{
                        color: "#FF7461",
                        fontSize: "22px",
                        marginLeft: "5px",
                        backgroundColor: "#FFF0EE",
                      }}
                    />
                  </div>
                  <div>
                    <BsFillBagPlusFill
                      style={{
                        backgroundColor: "#D8E7DA",
                        color: "#40AA54",
                        backgroundColor: "#D8E7DA",
                        fontSize: "22px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div> */}
      {/* bottam start */}
      <Bottam />
      {/* bottam end */}
    </div>
  );
}

export default Popular;
