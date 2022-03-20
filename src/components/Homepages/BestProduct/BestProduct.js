import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Favourite from '../Favourite/Favourite';

const BestProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
        .then(data=>setProducts(data))
    },[])
    return (
      <div className="container mb-5">
        <h2 className='text-light mb-5'>Best Products...</h2>

        <Row xs={1} md={3} lg={4} className="g-4">
          {products.map((product) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={product?.img} />
                <Card.Body>
                  <Link
                    to={`/products/${product?.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Card.Title>
                      <h6> {product?.name}</h6>
                    </Card.Title>
                  </Link>

                  <Card.Text>
                    <h6>${product?.price}</h6>
                    <p>
                      <span className="text-warning px-2">
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </span>
                      ({product?.reviews} reviews)
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* <Button variant="dark m-5" size="lg">
          Load More
        </Button> */}
      </div>
    );
};
export default BestProduct;