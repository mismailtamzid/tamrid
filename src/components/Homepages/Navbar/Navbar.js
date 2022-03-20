import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
  const {user, logout}= useAuth()
    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid container">
    <Link className="navbar-brand" to="/">TAMRID.</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shop">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashBoard">DashBoard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      {!user?.email ?  <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>:
        <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={logout}>Logout {user?.email }</Link>
        </li>}
      </ul>
    </div>
  </div>
</nav>
      </div>
    );
};

export default Navbar;