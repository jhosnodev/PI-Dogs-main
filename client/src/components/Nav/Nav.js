import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import Logo from '../resource/003-cara-de-perro.svg'

const Nav = () => {
  return (
    <nav className="nav___container">
      <div className="nav___left-inner-container">
        <NavLink to="/">
        <img src={Logo} alt="dogs logo" id="nav___brand"/>

        </NavLink>
      </div>
      <div className="nav___right-inner-container">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/home">Fav</NavLink>
        <NavLink to="/home">Nuevo</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
