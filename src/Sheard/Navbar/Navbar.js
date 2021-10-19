import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
  const { SignOut, user } = useAuth()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="https://i.ibb.co/PgxWpBR/logo-main-img.png" alt="" width="168" height="44" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/doctors">Doctors</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                {user.displayName?<Link className="nav-link disabled" to="">{user.displayName}</Link>
                :<Link className="nav-link disabled" to="">{user.email}</Link>}
              </li>
              {user.email ? <li className="nav-item">
                <Link className="nav-link" to="/login"><Button className="rounded-pill px-4" onClick={SignOut}><i className="fas fa-sign-out-alt"></i>  LogOut</Button></Link>
              </li>
                : <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;