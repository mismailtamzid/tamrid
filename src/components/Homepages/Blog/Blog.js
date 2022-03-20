import React, { Component } from "react";
import Slider from "react-slick";
import { Card, Col, Row } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
 
    
    return (
      <div className="container mt-5 mb-5">
        <h1>Blog And News</h1>
        <h6>
          Aobortis conubialaoreet pellentesque quod olorem nibh eius Facilis
          voluptate sequuy
            </h6>
            <br />
        <div>
                <Row xs={1} md={3} lg={3}>
                   
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://demo-egenslab.b-cdn.net/html/foxture/assets/images/home-one/home-one-blog-img-3.png"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://demo-egenslab.b-cdn.net/html/foxture/assets/images/home-one/home-one-blog-img-2.png"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://demo-egenslab.b-cdn.net/html/foxture/assets/images/home-one/home-one-blog-img-1.png"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
           
         
          </Row>
        </div>
      </div>
    );
};

export default Blog;