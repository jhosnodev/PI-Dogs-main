import { useEffect, useState } from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";
import hero from "../../data/hero";
import perritu from "../resource/perrito_hero_1.png";
import Quiz from "../Quiz/Quiz";

function Hero() {
  const [random, setRandom] = useState(0);
  const [quiz, setQuiz] = useState(false);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 6));
  }, []);
  const handleQuiz = () => {
    setQuiz(!quiz);
    console.log(quiz);
  };
  return (
    <section className="hero___container">
      {quiz ? <Quiz quiz={quiz}  setQuiz={setQuiz}/> : ""}
      <div className="hero___right-section-container">
        <h1>dogs!</h1>
        <p>{hero[random]}</p>
        <NavLink to="/home" className="btn___hightlight btn___primary">
          Conoce +
        </NavLink>
        <button className="btn___hightlight" onClick={handleQuiz}>
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
