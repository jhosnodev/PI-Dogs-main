import { useEffect, useState } from "react";
import "./Hero.css";
import hero from "../../data/hero";
import perritu from "../resource/perrito_hero.png";

function Hero() {
  console.log(hero);
  const [random, setRandom] = useState(0);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 6));
  }, []);

  return (
    <section className="hero___container">
      <div className="hero___right-section-container">
        <h1>dogs.</h1>
        <p>{hero[random]}</p>
        <button className="btn___hightlight btn___primary">Conoce +</button>
        <button className="btn___hightlight" role="button">
          Quiz
        </button>
      </div>
      <div className="hero___left-section-container">
        <img src={perritu} alt="Perritu bonito hero" />
      </div>
    </section>
  );
}

export default Hero;
