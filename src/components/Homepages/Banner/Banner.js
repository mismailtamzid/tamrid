import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "./../../../images/fixure1.png"
import img2 from "./../../../images/fixure2.png"
import img3 from "./../../../images/fixure3.png"

const Banner = () => {
    return (
      <div className="container">
        <Carousel>
          <Carousel.Item style={{ backgroundColor: "gray" }}>
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-6">
                <h3 style={{ color: "black" }}>First slide label</h3>
                <p style={{ color: "black" }}>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  className="d-block"
                  height="450px"
                  src={img1}
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item Item style={{ backgroundColor: "gray" }}>
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-6">
                <h3 style={{ color: "black" }}>First slide label</h3>
                <p style={{ color: "black" }}>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  className="d-block"
                  height="450px"
                  src={img2}
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item Item style={{ backgroundColor: "gray" }}>
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-6">
                <h3 style={{ color: "black" }}>First slide label</h3>
                <p style={{ color: "black" }}>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  className="d-block"
                  height="450px"
                  src={img3}
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Banner;