import React, { useState, useEffect } from "react";
import "./Form.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperament, setDog } from "../../redux/actions";
import validations from "./validation";

import Alert from "../Alert/Alert";
import { Link } from "react-router-dom";

function Form() {
  const [dogData, setDogData] = useState({
    name: "",
    bred_for: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_min: "",
    life_max: "",
  });
  const [error, setError] = useState([]);
  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    type: "",
  });
  const [temps, setTemps] = useState([]);
  const [mytemps, setMyTemps] = useState([]);
  console.log(mytemps);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperament());
  }, [dispatch]);

  const allTemps = useSelector((state) => state.temps);
  const options = allTemps.map((temp) => {
    return { value: temp.id, label: temp.name };
  });

  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Object.values(error).length === 0 &&
      mytemps.length > 0 &&
      dogData.name.length > 3 &&
      dogData.bred_for.length > 3 &&
      Number(dogData.height_min) > 0 &&
      Number(dogData.height_max) > 0 &&
      Number(dogData.weight_min) > 0 &&
      Number(dogData.weight_max) > 0 &&
      Number(dogData.life_min) > 0 &&
      Number(dogData.life_max) > 0
    ) {
      const allValues = {
        name: dogData.name.trim(),
        bred_for: dogData.bred_for.trim(),
        height: `${dogData.height_min} - ${dogData.height_max}`,
        weight: `${dogData.weight_min} - ${dogData.weight_max}`,
        life_span: `${dogData.life_min} - ${dogData.life_max}`,
        temperament: mytemps,
      };
      console.log('paso');
      dispatch(setDog(allValues));
      setAlertMsg({
        msg: "¡Creado con éxito!",
        type: "success",
      });
    } else {
      console.log("tienes erorres");
      setAlertMsg({
        msg: "No se ha enviado por que tiene errores",
        type: "error",
      });
    }
  };
  const handleInputs = (e) => {
    setDogData({
      name: e.target.name === "name" ? e.target.value : dogData.name,
      bred_for:
        e.target.name === "bred_for" ? e.target.value : dogData.bred_for,
      height_min:
        e.target.name === "height_min" ? e.target.value : dogData.height_min,
      height_max:
        e.target.name === "height_max" ? e.target.value : dogData.height_max,
      weight_min:
        e.target.name === "weight_min" ? e.target.value : dogData.weight_min,
      weight_max:
        e.target.name === "weight_max" ? e.target.value : dogData.weight_max,
      life_min:
        e.target.name === "life_min" ? e.target.value : dogData.life_min,
      life_max:
        e.target.name === "life_max" ? e.target.value : dogData.life_max,
    });
    /*     console.log(dogData) */
    const messages = validations(dogData);
    setError(messages);
  };
  const handleTemps = (e) => {
    console.log(e.target.value);
    mytemps.includes(e.target.value)
      ? console.log("ya esta")
      : setMyTemps([...mytemps, e.target.value]);
  };
  const handleDeleteTemps = (value) => {
    setMyTemps(mytemps.filter((temp) => temp !== value));
  };

  return (
    <div className="form___main">
      {alertMsg.msg ? <Alert type={alertMsg.type} msg={alertMsg.msg} /> : ""}
      <Link className="btn___comeback  " title="Volver" to="/home">
        <svg width="25px" height="25px" viewBox="0 0 2050 2050" fill="#f4f2f2">
          <path d="M1582.2,1488.7a44.9,44.9,0,0,1-36.4-18.5l-75.7-103.9A431.7,431.7,0,0,0,1121.4,1189h-60.1v64c0,59.8-33.5,112.9-87.5,138.6a152.1,152.1,0,0,1-162.7-19.4l-331.5-269a153.5,153.5,0,0,1,0-238.4l331.5-269a152.1,152.1,0,0,1,162.7-19.4c54,25.7,87.5,78.8,87.5,138.6v98.3l161,19.6a460.9,460.9,0,0,1,404.9,457.4v153.4a45,45,0,0,1-45,45Z" />
        </svg>
      </Link>
      <div className="form___dogs-info">
        <h2>{id ? "Editar" : "Nuevo Perritu"}</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>Raza:</label>
            <input
              id="name"
              name="name"
              onChange={(e) => handleInputs(e)}
              placeholder="Nombre de la raza"
              value={dogData.name}
            />
            <span className="form___error-msg">{error?.name}</span>
          </fieldset>
          <fieldset>
            <label>Criado para:</label>
            <input
              id="bred_for"
              name="bred_for"
              onChange={(e) => handleInputs(e)}
              placeholder="Especialidad de la raza"
              value={dogData.bred_for}
            />
            <span className="form___error-msg">{error?.bred_for}</span>
          </fieldset>
          <fieldset className="form___range">
            <label>Peso (Kg):</label>
            <div className="form___input-min-range">
              <input
                id="height_min"
                name="height_min"
                placeholder="min"
                onChange={(e) => handleInputs(e)}
                value={dogData.height_min}
                className="input_range"
                type="number"
              />
              <span className="form___error-msg">{error?.height_min}</span>
            </div>
            <p>{" - "}</p>
            <div className="form___input-max-range">
              <input
                id="height_max"
                name="height_max"
                placeholder="max"
                onChange={(e) => handleInputs(e)}
                value={dogData.height_max}
                className="input_range"
                type="number"
              />
              <span className="login___form-error">{error?.height_max}</span>
            </div>
          </fieldset>
          <fieldset className="form___range">
            <label>Altura (cm):</label>
            <div className="form___input-min-range">
              <input
                id="weight_min"
                name="weight_min"
                placeholder="min"
                onChange={(e) => handleInputs(e)}
                value={dogData.weight_min}
                className="input_range"
                type="number"
              />
              <span className="login___form-error">{error?.weight_min}</span>
            </div>
            <p>{" - "}</p>
            <div className="form___input-max-range">
              <input
                id="weight_max"
                name="weight_max"
                placeholder="max"
                onChange={(e) => handleInputs(e)}
                value={dogData.weight_max}
                className="input_range"
                type="number"
              />
              <span className="form___error-msg">{error?.weight_max}</span>
            </div>
          </fieldset>
          <fieldset className="form___range">
            <label>Años de vida:</label>
            <div className="form___input-min-range">
              <input
                id="life_min"
                name="life_min"
                placeholder="min"
                onChange={(e) => handleInputs(e)}
                value={dogData.life_min}
                className="input_range"
                type="number"
              />
              <span className="form___error-msg">{error?.life_min}</span>
            </div>
            <p>{" - "}</p>
            <div className="form___input-max-range">
              <input
                id="life_max"
                name="life_max"
                placeholder="max"
                onChange={(e) => handleInputs(e)}
                value={dogData.life_max}
                className="input_range"
                type="number"
              />
              <span className="form___error-msg">{error?.life_max}</span>
            </div>
          </fieldset>

          <fieldset>
            <label>Temperamentos:</label>
            <select
              className="form___multi-select"
              onChange={(e) => handleTemps(e)}
            >
              {options.map((op) => (
                <option value={op.label} key={op.value}>
                  {op.label}
                </option>
              ))}
            </select>
            <div>
              Temperamentos seleccionados
              {mytemps.map((tem) => (
                <p key={tem} className="card___span-temp">
                  {tem} <span onClick={() => handleDeleteTemps(tem)}>X</span>
                </p>
              ))}
            </div>
          </fieldset>

          <button className={`btn___hightlight `}>
            {id ? "Editar 🐕" : "Agregar 🐶"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
