import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillLock, AiOutlineReload } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

const UpWork = () => {
    return (
      <div style={{ backgroundColor: "#e8eaeb" }}>
        {" "}
        <div className="container p-5">
          <Row xs={1} md={3} lg={4} className="g-4">
            <Col>
              <h6 className='text-primary'>UP TO 30% OFF</h6>
              <h2>How we work</h2>
              <p>Aces eius fusce ab in maiores mus mollis Aliquet sempero.</p>
              <Link>SHOP NOW</Link>
            </Col>
            <Col>
                        <AiFillLock style={{fontSize:"50px"}}/>
              <h2>Free shipping</h2>
              <p>Aces eius fusce ab in maiores mus mollis! Aliquet</p>
            </Col>
            <Col>
                        <AiOutlineReload style={{ fontSize: "50px" }}/>
              <h2>How we work</h2>
              <p>Aces eius fusce ab in maiores mus mollis Aliquet sempero.</p>
            </Col>
            <Col>
                        <BiWorld style={{ fontSize: "50px" }}/>
              <h2>Free shipping</h2>
              <p>Aces eius fusce ab in maiores mus mollis Aliquet sempero.</p>
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default UpWork;