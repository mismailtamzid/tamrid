import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";


const Favourite = () => {
    //  const [products, setProducts] = useState([]);
    //  useEffect(() => {
    //    fetch("./fakeData.json")
    //      .then((res) => res.json())
    //      .then((data) => setProducts(data));
    //  }, []);
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 3,
       slidesToScroll: 2,
       autoplay: true,
       autoplaySpeed: 2000,
     };
  return (
    <div style={{ backgroundColor: "#dadbd7" }}>
      {" "}
      <div className="container p-5">
        <h1>Favorite Offers</h1>
        <p style={{fontSize:"30px"}}>
          Aobortis conubialaoreet pellentesque quod olorem nibh eius Facilis
          voluptate sequuy
        </p>
        <Slider {...settings}>
          <div>
            <Card>
              <Card.Img
                variant="top"
                height="380px"
                src="https://demo-egenslab.b-cdn.net/html/foxture/assets/images/shop/shope-two-prodict-img-6.png"
              />
              <Card.Body>
                <Card.Title>
                  <h6>Stand Sound Silver Box</h6>{" "}
                </Card.Title>
                <Card.Text>
                  <h6>$36</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                height="380px"
                src="https://demo-egenslab.b-cdn.net/html/foxture/assets/images/home-two/home-two-arrival-img-4.png"
              />
              <Card.Body>
                <Card.Title>
                  <h6>Stand Sound Silver Box</h6>{" "}
                </Card.Title>
                <Card.Text>
                  <h6>$36</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                height="380px"
                src="https://demo-egenslab.b-cdn.net/html/foxture/assets/images/home-two/home-two-arrival-img-1.png"
              />
              <Card.Body>
                <Card.Title>
                  <h6>Stand Sound Silver Box</h6>{" "}
                </Card.Title>
                <Card.Text>
                  <h6>$36</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                height="380px"
                src="https://demo-egenslab.b-cdn.net/html/foxture/assets/images/home-two/home-two-arrival-img-4.png"
              />
              <Card.Body>
                <Card.Title>
                  <h6>Stand Sound Silver Box</h6>{" "}
                </Card.Title>
                <Card.Text>
                  <h6>$36</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                height="380px"
                src="https://demo-egenslab.b-cdn.net/html/foxture/assets/images/shop/shope-two-prodict-img-2.png"
              />
              <Card.Body>
                <Card.Title>
                  <h6>Stand Sound Silver Box</h6>{" "}
                </Card.Title>
                <Card.Text>
                  <h6>$36</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            {" "}
            <Card>
              <Card.Img
                variant="top"
                height="380px"
                src="https://demo-egenslab.b-cdn.net/html/foxture/assets/images/shop/shope-two-prodict-img-5.png"
              />
              <Card.Body>
                <Card.Title>
                  <h6>Stand Sound Silver Box</h6>{" "}
                </Card.Title>
                <Card.Text>
                  <h6>$36</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            {" "}
            <Card>
              <Card.Img
                variant="top"
                height="380px"
                src="https://demo-egenslab.b-cdn.net/html/foxture/assets/images/home-two/home-two-arrival-img-1.png"
              />
              <Card.Body>
                <Card.Title>
                  <h6>Stand Sound Silver Box</h6>{" "}
                </Card.Title>
                <Card.Text>
                  <h6>$36</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                height="380px"
                src="https://demo-egenslab.b-cdn.net/html/foxture/assets/images/home-two/home-two-arrival-img-4.png"
              />
              <Card.Body>
                <Card.Title>
                  <h6>Stand Sound Silver Box</h6>{" "}
                </Card.Title>
                <Card.Text>
                  <h6>$36</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                height="380px"
                src="https://demo-egenslab.b-cdn.net/html/foxture/assets/images/home-two/home-two-arrival-img-1.png"
              />
              <Card.Body>
                <Card.Title>
                  <h6>Stand Sound Silver Box</h6>{" "}
                </Card.Title>
                <Card.Text>
                  <h6>$36</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Favourite;
