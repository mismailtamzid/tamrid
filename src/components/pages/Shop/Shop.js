import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BestProduct from "../../Homepages/BestProduct/BestProduct";

const Shop = () => {
  return (
    <div className="container">
      <h2 className="text-light mt-5 mb-5">This is shop component</h2>
      <Row xs={1} md={2} className="g-4">
        <Col className="col-md-3">
          <div className="text-start  text-white">
            {" "}
            <h1 className="text-light text-start mt-3">Categories</h1>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Computer accessories
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Women dress
                <span class="badge bg-primary rounded-pill">07</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Coffee & Tables
                <span class="badge bg-primary rounded-pill">11</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Shoes
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Electronics
                <span class="badge bg-primary rounded-pill">23</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                T-Shirts
                <span class="badge bg-primary rounded-pill">45</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Beds
                <span class="badge bg-primary rounded-pill">09</span>
              </li>
            </ul>
            <h1 className="text-start mt-4">Brands</h1>
            <ul type="none" class="list-group">
              <li>Optical Electronics</li>
              <li>Bangalee Babu</li>
              <li>Samsung </li>
              <li>Unilever</li>
              <li>Khadem</li>
              <li>Quartz</li>
              <li>Nike</li>
            </ul>
          </div>
        </Col>
        <Col className="col-md-9">
          <BestProduct />
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <Link class="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  1
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  2
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  3
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </div>
  );
};

export default Shop;
