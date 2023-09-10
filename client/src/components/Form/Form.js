import React, { useState, useEffect } from "react";
import "./Form.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperament, setDog } from "../../redux/actions";
import validations from "./validation";
import Select from "react-select";
import Alert from "../Alert/Alert";

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
  const [temps, setTemps] = useState([]);

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
    if (Object.values(error).length === 0 && temps.length > 0 ) {
      const allValues = {
        name: dogData.name.trim(),
        bred_for: dogData.bred_for.trim(),
        height: `${dogData.height_min} - ${dogData.height_max}`,
        weight: `${dogData.weight_min} - ${dogData.weight_max}`,
        life_span: `${dogData.life_min} - ${dogData.life_max}`,
        temperament: temps,
      };

      dispatch(setDog(allValues));
    } else {
      console.log("tienes erorres");
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
    const messages = validations(dogData);
    setError(messages);
  };

  return (
    <div className="form___main">
      <Alert type="success" msg="mensaje generico" />
      <div className="form___dogs-info">
        <h2>{id ? "Editar" : "Nuevo Perritu"}</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>Raza:</label>
            <input
              id="name"
              name="name"
              onChange={handleInputs}
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
              onChange={handleInputs}
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
                onChange={handleInputs}
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
                onChange={handleInputs}
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
                onChange={handleInputs}
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
                onChange={handleInputs}
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
                onChange={handleInputs}
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
                onChange={handleInputs}
                value={dogData.life_max}
                className="input_range"
                type="number"
              />
              <span className="form___error-msg">{error?.life_max}</span>
            </div>
          </fieldset>
          <fieldset>
            <label>Temperamentos:</label>
            <Select
              options={options}
              isMulti
              name="temps"
              className="form___multi-select"
              classNamePrefix="select"
              onChange={(value) => setTemps(value)}
            />
            {/*  defaultValue={dogData.temps} */}
          </fieldset>

          <button className={`btn___hightlight `}>
            {id ? "Editar" : "Agregar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
