import React from "react";
import "./Hero.css";
import perritu from "../resource/perrito_hero.png";

function Hero() {
  return (
    <section className="hero___container">
      <div className="hero___right-section-container">
        <h1>dogs.</h1>
        <p>Los perros pueden ayudarte a ser más activo y saludable. Te obligan a salir a caminar, jugar y hacer ejercicio.</p>
        <button className="btn___hightlight btn___primary">Conoce +</button>
        <button className="btn___hightlight" role="button" >Quiz</button>
      </div>
      <div className="hero___left-section-container"> 
      <img src={perritu} alt="Perritu bonito hero"/>
      </div>
    </section>
  );
}

export default Hero;
