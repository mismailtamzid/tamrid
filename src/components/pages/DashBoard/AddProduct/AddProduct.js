import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
     const { register, handleSubmit } = useForm();
     const onSubmit = (data) => {
       alert(JSON.stringify(data));
     };
    return (
      <div>
        <h3>add product</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="productName">Product Name</label>
            <input  {...register("productName")} />
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <input type="number"  {...register("price")} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email"  {...register("email")} />
          </div>
          <div>
            <label htmlFor="imageUrl">Image Url</label>
            <input type="text"  {...register("imageUrl")} />
          </div>
          <div>
            <label htmlFor="brand">Brand</label>
            <input type="text"  {...register("brand")} />
          </div>
          
          <input type="submit" />
        </form>
      </div>
    );
};

export default AddProduct;