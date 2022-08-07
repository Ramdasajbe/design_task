import React, { useEffect } from "react";
import "../Styles/ProductList.css";
import { useSelector } from "react-redux/es/exports";
import { FiPlus } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";
import { product_detail } from "../redux/Aciton";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import ProductArry from "./ProductArray";
import axios from "axios";
function ProductList({ navigation }) {
  const [List, setList] = useState([]);
  const [slicelist, setslicelist] = useState(5);
  const [Seeall, setSeeall] = useState("View More");
  const [Count, setCount] = useState(0);
  const [backgroud, setbackgroud] = useState(false);
  const value = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setData = async () => {
    const dataList = await axios.get("https://fakestoreapi.com/products");
    setList(dataList.data);
  };

  useEffect(() => {
    setData();
  }, []);

  const fulllist = () => {
    if (Seeall == "View More") {
      setSeeall("View Less");
    } else {
      setSeeall("View More");
    }
    if (slicelist == 5) {
      setslicelist(9);
    } else {
      setslicelist(5);
    }
  };
  const addData = (item) => {
    dispatch(
      product_detail({
        category: item.category,
        description: item.description,
        price: item.price,
        rating: item.rating,
        title: item.title,
        image: item.image,
        id: item.id,
        wishList: backgroud,
      })
    );
  };

  return (
    <>
      <div className="spacer-top-3 "></div>
      <div className="container-fluid bg">
        <div className="row ">
          <div className="App transperant  container">
            <div className="row">
              <div className="Product">
                <h1>ProductList</h1>
                <button
                  onClick={() => {
                    fulllist();
                  }}
                >
                  {Seeall}
                </button>
              </div>
            </div>

            <div className=" mainContainer pb-5  list">
              <div className="row">
                {List.slice(1, slicelist).map((item) => {
                  return (
                    <div
                      className="col-sp-2 m-15-r  mb-3 icon pt-2 "
                      key={item.id}
                    >
                      <div className="prod">
                        <img
                          className="d-block w-100 img-fluid  prodimage"
                          src={item.image}
                          style={{ height: "intrinsic" }}
                        />
                      </div>
                      <div
                        className="prod"
                        style={{ marginTop: "50px", marginBottom: "30px" }}
                      >
                        <div className="prod1">
                          <AiOutlineMinus
                            onClick={() => {
                              if (Count > 1) {
                                setCount(Count - 1);
                              }
                            }}
                            style={{
                              color: "#FF7461",
                              fontSize: "20px",
                              marginLeft: "5px",
                              backgroundColor: "#FFF0EE",
                              marginRight: "10px",
                            }}
                          />
                          {Count}

                          <FiPlus
                            onClick={() => setCount(Count + 1)}
                            style={{
                              color: "#FF7461",
                              fontSize: "20px",
                              marginRight: "5px",
                              backgroundColor: "#FFF0EE",
                              marginLeft: "10px",
                            }}
                          />
                        </div>
                        <div
                          onClick={() => {
                            addData(item);
                            setbackgroud(backgroud ? false : true);
                          }}
                        >
                          {backgroud ? (
                            <FaRegHeart
                              style={{ color: "red", fontSize: "30px" }}
                            />
                          ) : (
                            <FaHeart
                              style={{ color: "red", fontSize: "30px" }}
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <h6>{item.title.slice(0, 20)}</h6>
                        <div className="prodinner">
                          <h6>Price: {item.price}Rs</h6>
                          <p>Rating {item.rating.rate}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;

// onClick={() => {
//   addData(item);
//   navigate("/Singal");
// }}
