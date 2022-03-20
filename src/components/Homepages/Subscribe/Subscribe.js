import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Subscribe = () => {
    return (
      <div>
        <div class="container px-4 mt-5 mb-5">
          <div class="row gx-5 d-flex align-items-center">
            <div class="col">
              <div class="p-3">
                <h1>Subscribe our newsletter</h1>
                <p>
                  Aobortis conubialaoreet pellentesque quod olorem nibh eius
                  Facilis voluptate sequuy
                </p>
              </div>
            </div>
            <div class="col">
              <div class="p-3 ">
                {" "}
                <ButtonGroup aria-label="Basic example">
                  {" "}
                  <input
                    type="email"
                    style={{ height: "60px", width: "420px" }}
                    id="inputEmail4"
                  />
                  <Button variant="primary" size="lg">
                    Subscribe
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Subscribe;