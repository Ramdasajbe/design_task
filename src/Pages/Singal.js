import React from "react";
import LandingComponent from "./LandingComponent";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function Singal() {
  const user = useSelector((state) => state.user);
  console.log(user);
  const [userwishlist, setuserwishlist] = useState([]);
  const Setdata = async () => {
    const uniqueId = [];
    const unique = user.filter((elements) => {
      const isDuplicate = uniqueId.includes(elements.id);
      if (!isDuplicate) {
        uniqueId.push(elements.id);
        return true;
      } else {
        return false;
      }
    });
    setuserwishlist(unique);
  };
  useEffect(() => {
    Setdata();
  }, []);

  return (
    <div className="container-fluid">
      {/* navbar start */}
      <LandingComponent />
      {/* navbar end */}
      <div className="container">
        {user.length === 0 ? (
          "No item in wishlist"
        ) : (
          <div className="col-12  mt-5">
            <div className="row">
              {userwishlist.map((item) => {
                return (
                  <div className="col-3 mb-5">
                    <div class="card">
                      <div className="d-block">
                        <img
                          src={item.image}
                          style={{ height: "200px" }}
                          class="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">
                          {item.title.slice(0, 20)}
                        </h5>
                        <p className="card-text">
                          {item.description.slice(1, 70)}
                        </p>
                      </div>
                      <div class="card-body">
                        <button className="btn btn-danger">Remove-item</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Singal;
