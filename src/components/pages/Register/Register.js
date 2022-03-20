import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";


const Register = () => {
  const { registerUser } = useFirebase();
  const { register, handleSubmit } = useForm({});
  const onSubmit = (data) => {
    registerUser(data?.email, data?.password)
    console.log(data);
  };
  return (
    <div>
      <h3>this is Register page</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Name">
          {" "}
          <h4 style={{ color: "white" }}>Name</h4>{" "}
        </label>
        <input {...register("name")} />

        <label htmlFor="email">
          {" "}
          <h4 style={{ color: "white" }}>Email</h4>{" "}
        </label>
        <input type="email" {...register("email")} />

        <label htmlFor="password">
          {" "}
          <h4 style={{ color: "white" }}>Password</h4>{" "}
        </label>
        <input type="password" {...register("password")} />

        <label htmlFor="password">
          {" "}
          <h4 style={{ color: "white" }}>ReType Your Password</h4>{" "}
        </label>
        <input type="password" {...register("password")} />
        <h4 style={{ color: "white" }}>
          Already Registered!!! please
          <Link to="/login">Login</Link>
        </h4>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
