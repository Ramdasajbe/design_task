import React from "react";
import "../Styles/Slider.css";
import { Carousel } from "react-bootstrap";
function Slider() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 ">
          <Carousel className="slidtotal">
            <Carousel.Item>
              <div>
                <div className="sliderinner1">
                  <h1>Lorem Ipsum is simply dummy</h1>
                  <h3>ndustry. Lorem Ipsum has been the industry's standard</h3>
                  <p>
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into
                  </p>
                </div>
                <div className="sliderinner">
                  <img
                    style={{ height: "400px", width: "100vw" }}
                    classNameNameName="d-block "
                    src={process.env.PUBLIC_URL + "images/gar.jpg"}
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <div className="sliderinner1">
                  <h1>Lorem Ipsum is simply dummy</h1>
                  <h3>ndustry. Lorem Ipsum has been the industry's standard</h3>
                  <p>
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into
                  </p>
                </div>
                <div className="sliderinner">
                  <img
                    style={{ height: "400px", width: "100vw" }}
                    classNameNameName="d-block sliderimages"
                    src={process.env.PUBLIC_URL + "images/veg.jpg"}
                    alt="First slide"
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <div className="sliderinner1">
                  <h1>Lorem Ipsum is simply dummy</h1>
                  <h3>ndustry. Lorem Ipsum has been the industry's standard</h3>
                  <p>
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into
                  </p>
                </div>
                <div className="sliderinner">
                  <img
                    style={{ height: "400px", width: "100vw" }}
                    classNameNameName="d-block "
                    src={process.env.PUBLIC_URL + "images/off.jpg"}
                    alt="Third slide"
                  />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Slider;
{
  /* <img
classNameNameName="d-block images"
src={process.env.PUBLIC_URL + "images/off.jpg"}
alt="Third slide"
/> */
}

{
  /* <img
classNameNameName="d-block images"
src={process.env.PUBLIC_URL + "images/gar.jpg"}
/> */
}

{
  /* <img
classNameNameName="d-block images"
src={process.env.PUBLIC_URL + "images/veg.jpg"}
alt="First slide"
/> */
}
