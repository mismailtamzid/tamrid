import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
import Checkout from './Checkout/Checkout';


const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState([])
  const [lgShow, setLgShow] = useState(false);
    const { id } = useParams()
    useEffect(() => {
       fetch("/fakeData.json")
         .then((res) => res.json())
         .then((data) => setSingleProduct(data));
    }, [])
    const details = singleProduct.find(detail => detail.id === id);
    console.log(details);
    return (
      <div className="container mt-5 mb-5 p-5 bg-white">
        <Row xs={1} md={2} lg={2} className="g-4 d-flex align-items-center">
          <Col>
            <img src={details?.img} alt="" width="400px" />
          </Col>
          <Col className="text-start">
            <div className="">
              <h2 className="">{details?.name}</h2>
              <h6>
                <span className="text-warning">
                  {" "}
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </span>{" "}
                ( {details?.reviews} reviews)
              </h6>
              <p className="text-dark">
                <span className="fw-bolder">${details?.price} </span>{" "}
                <del className="text-dark">$120.00</del>
              </p>
              <h4>
                Brand: <span className="text-muted">{details?.brand}</span>
              </h4>
              <h4>
                Availablity:{" "}
                <span className="text-muted">{details?.availability}</span>
              </h4>
              <br />
              <h4>
                Share: <BsFacebook className="m-2" />
                <BsTwitter className="m-2" />
                <BsPinterest className="m-2" />{" "}
              </h4>
              <Button onClick={() => setLgShow(true)} variant="dark" size="lg">
                Add to CheckOut
              </Button>
            </div>
          </Col>
        </Row>
        <h2 className="text-start mt-5">Description</h2>
        <p className=" text-muted text-start">
          Git, eu! Libero fermentum! Vivamus nibh mus curae, a ullamco nesciunt
          repudiandae, labore reiciendis similique! Dicta, non praesent dolor
          culpa pulvinar rerum gravida orci, repellat omnis architecto in,
          scelerisque nostrud potenti mauris, eros, luctus donec lobortis.
          Commodo <br /> <br /> Morbi molestiae explicabo, a sapien hac gravida
          quos, impedit, minim distinctio velit, itaque nibh, maiores tempora
          volutpat! Minima, voluptates adipisci pulvinar libero mus. Ratione!
          Pretium, montes habitant dignissim mollit? Suscipit? Accusamus sequi
          repudiandae penatibus delectus, labore! Vehicula error, nostrum
          expedita porttitor adipiscing, eget eiusmod porro diamlorem assumenda
          massa voluptates esse, maecenas sint rem asperiores lobortis esse
          dolor augue? Minima consequuntur, volutpat cupidatat augue.
        </p>
        <br />
        <br />
        <h4 className="text-start">Reviews</h4>
        <h4 className="text-start">
          RT Shuvro{" "}
          <span className="text-warning px-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </span>
        </h4>

        {/* modal */}
        <Checkout lgShow={lgShow} setLgShow={setLgShow} details={details}/>
      </div>
    );
};

export default ProductDetails;