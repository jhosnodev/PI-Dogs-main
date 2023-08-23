import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Logo from '../resource/003-cara-de-perro.svg'

const Nav = () => {
  return (
    <nav className="nav___container">
      <div className="nav___left-inner-container">
        <Link to="/">
        <img src={Logo} alt="dogs logo" id="nav___brand"/>

        </Link>
      </div>
      <div className="nav___right-inner-container">
        <Link to="/home">Home</Link>
        <Link to="/home">Fav</Link>
        <Link to="/home">Nuevo</Link>
      </div>
    </nav>
  );
};

export default Nav;
