import React, { useState } from "react";
import "./Quiz.css";
import { quizData, temps } from "../../data/quiz";
import { useDispatch, useSelector } from "react-redux";
import { filterTemps, getDogs } from "../../redux/actions";
import Card from "../Card/Card";

//! quiz
function Quiz({ quiz, setQuiz }) {
  const [hours, setHours] = useState("");
  const [kids, setKids] = useState("");
  const [pets, setPets] = useState("");
  const [home, setHome] = useState("");
  const [active, setActive] = useState("");
  const [exp, setExp] = useState("");
  const [resource, setResource] = useState("");
  const [love, setLove] = useState("");
  const [training, setTraining] = useState("");
  const [social, setSocial] = useState("");
  const useHandlers = {
    hours: hours,
    kids: kids,
    pets: pets,
    home: home,
    active: active,
    exp: exp,
    resource: resource,
    love: love,
    training: training,
    social: social,
  };
  const useSetHandlers = {
    hours: setHours,
    kids: setKids,
    pets: setPets,
    home: setHome,
    active: setActive,
    exp: setExp,
    resource: setResource,
    love: setLove,
    training: setTraining,
    social: setSocial,
  };

  //pagination settings
  const [currentPage, setCurrentPage] = useState(1);
  const [questionPerPage] = useState(2);
  const [tempResult, setTempResult] = useState("");
  /*   const dispatch = useDispatch(); */
  const indexOfLastQuestion = currentPage * questionPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionPerPage;
  const currentQuiz = quizData.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const dogs = useSelector((state) => state.dogs);
  console.log(dogs);
  const randog = Math.floor(Math.random() * dogs.length);

  return (
    /* onClick={()=> setQuiz(!quiz)} */
    <div className="quiz___main">
      <div className="quiz___background" onClick={() => setQuiz(!quiz)}></div>
      <div className="quiz___cointainer">
        <h3>
          {tempResult
            ? `El caracter ideal para ti es: ${tempResult}`
            : "Descubre que perrito seria tu compañero ideal"}
        </h3>
        {tempResult ? (
          <Card
            key={dogs[randog].id}
            id={dogs[randog].id}
            name={dogs[randog].name}
            image={dogs[randog].image}
            temperaments={dogs[randog].temperaments}
            bred_for={dogs[randog].bred_for}
            weight={dogs[randog].weight}
          />
        ) : (
          <div>
            <form className="quiz___form">
              {currentQuiz.map((q, index) => (
                <fieldset key={index}>
                  <label>{q.question}</label>

                  <div className="quiz___radio-tile-container">
                    {q.options.map((op) => (
                      <div className="quiz___radio-container" key={op.value}>
                        <input
                          type="radio"
                          name={q.name}
                          value={op.value}
                          className="quiz___radio-btn"
                          checked={useHandlers[q.name] === op.value}
                          onChange={(event) =>
                            useSetHandlers[q.name](event.target.value)
                          }
                        />
                        <div className="quiz___radio_tile">
                          <div className="quiz___radio-icon">{op.icon}</div>
                          <label className="quiz___radio-label">
                            {op.label}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </fieldset>
              ))}
            </form>

            <Pagination
              questionPerPage={questionPerPage}
              totalItems={quizData.length}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              useHandlers={useHandlers}
              tempResult={tempResult}
              setTempResult={setTempResult}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;

function Pagination({
  questionPerPage,
  totalItems,
  currentPage,
  onPageChange,
  useHandlers,
  tempResult,
  setTempResult,
}) {
  const dispatch = useDispatch();
  const pageNumbers = [];

  // Calcula el número total de páginas
  const totalPages = Math.ceil(totalItems / questionPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleResults = () => {
    const result = { active: 0, calm: 0, clever: 0, beloved: 0, protective: 0 };
    //!Hours
    switch (useHandlers.hours) {
      case "3h":
        result.active++;
        break;
      case "6h":
        result.protective++;
        break;
      case "8h":
        result.clever++;
        break;
      case "+8h":
        result.calm++;
        break;
      default:
        break;
    }
    //!kids
    if (useHandlers.kids === "yes") {
      result.beloved++;
    } else {
      result.calm++;
    }
    //!pets
    switch (useHandlers.pets) {
      case "no":
        result.protective++;
        break;
      case "other":
        result.clever++;
        break;
      case "cat":
        result.beloved++;
        break;
      default:
        break;
    }
    //!house
    if (useHandlers.house === "edif") {
      result.calm++;
    } else {
      result.active++;
    }
    //!active
    switch (useHandlers.active) {
      case "no":
        result.calm++;
        break;
      case "regular":
        result.protective++;
        break;
      case "yes":
        result.active++;
        break;
      default:
        break;
    }
    //!exp
    switch (useHandlers.exp) {
      case "no":
        //!dddddd
        result.beloved++;
        break;
      case "regular":
        result.clever++;
        break;
      case "yes":
        result.protective++;
        break;
      default:
        break;
    }
    //!resource
    if (useHandlers.resource === "yes") {
      result.active++;
    } else {
      result.clever++;
    }
    //!love
    if (useHandlers.love === "yes") {
      result.beloved++;
    } else {
      result.clever++;
    }
    //!training
    if (useHandlers.training === "yes") {
      result.active++;
    } else {
      result.calm++;
    }
    //!social
    if (useHandlers.social === "yes") {
      result.beloved++;
    } else {
      result.protective++;
    }

    //filtrando resultados
    const tempGroup = Object.entries(result).sort((a, b) => b[1] - a[1])[0];
    const random = Math.floor(Math.random() * temps[tempGroup[0]].length);
    setTempResult(temps[tempGroup[0]][random]);
    console.log(tempResult);

    dispatch(filterTemps(temps[tempGroup[0]][random]));
  };
  return (
    <div className="quiz___wizard-handle">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`quiz___wizard-btn ${
            currentPage === number ? "active" : ""
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
      {Object.values(useHandlers).includes("") ? (
        <button
          className="quiz___wizard-next btn___hightlight"
          onClick={() =>
            Object.values(useHandlers).includes("")
              ? onPageChange(
                  currentPage !== totalPages ? currentPage + 1 : totalPages
                )
              : handleResults()
          }
        >
          Siguiente
        </button>
      ) : (
        <button
          className="quiz___wizard-next btn___hightlight"
          onClick={handleResults}
        >
          Enviar
        </button>
      )}
    </div>
  );
}
