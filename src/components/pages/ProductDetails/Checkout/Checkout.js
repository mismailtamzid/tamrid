import React from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";

const Checkout = ({ lgShow, setLgShow, details }) => {
  const { register, handleSubmit } = useForm();
  const {user}=useAuth()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div>
      <h3>checkout</h3>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title
            className="text-center"
            id="example-modal-sizes-title-lg"
          >
            Fill up this checkout form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="productName">Product Name</label>
              <input
                disabled
                defaultValue={details?.name}
                {...register("productName")}
              />
            </div>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input type="number" {...register("quantity")} />
            </div>

            <div>
              <label htmlFor="price">Price</label>
              <input
                disabled
                defaultValue={details?.price}
                type="number"
                {...register("price")}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                disabled
                defaultValue={user?.email}
                type="email"
                {...register("email")}
              />
            </div>
            <div>
              <label htmlFor="deliveryCharge">Delivery Charge</label>
              <input defaultValue="$120" {...register("deliveryCharge")} />
            </div>

            <div>
              <label htmlFor="address">Address</label>
              <textarea rows="3" type="text" {...register("address")} />
            </div>

            <input type="submit" />
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Checkout;
