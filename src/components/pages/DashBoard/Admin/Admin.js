import React from 'react';
import { useForm } from 'react-hook-form';

const Admin = () => {
     const { register, handleSubmit } = useForm();
     const onSubmit = (data) => {
       alert(JSON.stringify(data));
     };
    return (
      <div>
        <h1>Admin route</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              placeholder="abc@gmail.com"
              type="email"
              {...register("email")}
                    />
                    
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter your password"
              type="password"
              {...register("password")}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
};

export default Admin;