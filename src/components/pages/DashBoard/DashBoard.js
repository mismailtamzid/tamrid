import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import AddProduct from './AddProduct/AddProduct';
import AddReview from './AddReview/AddReview';
import Admin from './Admin/Admin';
import ManageProducts from './ManageProducts/ManageProducts';


const DashBoard = () => {
   let { path, url } = useRouteMatch();
    return (
      <div className='container-fluid'>
        <div>
          <Row
            xs={1}
            md={2}
            className="g-4 d-flex justify-content-between "
          >
            <Col
              className="text-start p-4 bg-primary col-md-2"
              style={{ height: "93vh",
               }}
            >
              {" "}
              <ul type="none">
                <h3 className='text-start fw-bold'>DashBoard</h3>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-light fs-4 fw-normal"
                    to={url}
                  >
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-light fs-4 fw-normal"
                    to={`${url}/admin`}
                  >
                    Make Admin
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-light fs-4 fw-normal"
                    to={`${url}/addReview`}
                  >
                    Add Review
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-light fs-4 fw-normal"
                    to={`${url}/manageProducts`}
                  >
                   Manage Products
                  </Link>
                </li>
              </ul>
            </Col>
            <Col className='col-md-10'>
              {" "}
              <Switch>
                <Route exact path={path}>
                  <AddProduct />
                </Route>
                <Route path={`${path}/admin`}>
                  <Admin />
                </Route>
                <Route path={`${path}/addReview`}>
                  <AddReview/>
                </Route>
                <Route path={`${path}/manageProducts`}>
                  <ManageProducts/>
                </Route>
              </Switch>
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default DashBoard;