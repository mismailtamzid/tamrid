import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Discount.css";

const Discount = () => {
  return (
    <div className="container pt-5">
      <h3>Discount</h3>
      <br />
      <Row xs={1} md={2} lg={3} className="g-4">
        {/* <div className=" row g-5"> */}
        
        <Col className="card1 bg-dark p-5 text-light text-start">
          <div>
            {" "}
            <h4>Discount Upto 50%</h4>
            <h2>Hanging Black Light</h2>
            <Link>SHOP NOW</Link>
          </div>
        </Col>
        <Col className="card2 bg-dark p-5 text-light text-start">
          <div>
            {" "}
            <h4>Discount Upto 50%</h4>
            <h2>Hanging Black Light</h2>
            <Link>SHOP NOW</Link>
          </div>
        </Col>
        <Col className="card3 bg-dark p-5 text-light text-start">
          <div>
            {" "}
            <h4>Discount Upto 50%</h4>
            <h2>Hanging Black Light</h2>
            <Link>SHOP NOW</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Discount;
