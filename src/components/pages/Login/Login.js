import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import "./Login.css";

const Login = () => {
  const {googleLogin, manualSignin}= useFirebase()
    const { register, handleSubmit } = useForm({});
    const onSubmit = (data) => {
      console.log(data);
   manualSignin(data?.email, data?.password)
    };
    return (
      <div>
        <h3>this is login page</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <h4 style={{ color: "white" }}>
            {" "}
            Not Registered Yet!!! Please
            <Link to="/register">Register</Link>
          </h4>
          <input type="submit" />
          <Button variant="primary" size="lg" onClick={googleLogin}>
            {" "}
            <FcGoogle style={{ fontSize: "30px" }} />
            Google SignIn
          </Button>
        </form>
      </div>
    );
};

export default Login;