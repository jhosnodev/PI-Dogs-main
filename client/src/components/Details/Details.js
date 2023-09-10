import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import { useDispatch, useSelector } from "react-redux";
import { getDogByID } from "../../redux/actions";
import { Link } from "react-router-dom";

function Details() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogByID(id));
  }, [dispatch, id]);
  const detail = useSelector((state) => state.detail);
  const dog = detail;
  /* console.log(dog); */
  return (
    <article className="details___main">
      <div
        className="details___dogs-img"
        style={
          dog
            ? {
                backgroundImage: `url("${dog.image}")`,
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundOrigin: "content-box",
                backgroundSize: "cover",
              }
            : {}
        }
      >
        <div className="details___dogs-img-gradien"></div>
      </div>
      <div className="details___dogs-info">
        <Link className="btn___hightlight" to={`dog/edit/${dog?.id}`}>
          Editar
        </Link>
        <button className="details___fav-buttom">❤</button>

        <h2>{dog?.name}</h2>
        <div className="details___tag">
          <h3>Peso (Kg)</h3>
          <span>
            <svg width="18px" height="18px" viewBox="0 0 16 16" version="1.1">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(1.000000, 0.000000)" fill="#fd5a59">
                  <rect x="8" y="9" width="0.905" height="0.92"></rect>
                  <path d="M11.017,4.42369478 C11.017,3.69176707 10.42,3.01706827 9.682,3.01706827 L8.913,3.01706827 C8.948,2.84839357 8.97,2.67369478 8.97,2.4939759 C8.97,1.11947791 7.855,0 6.486,0 C5.116,0 4.002,1.11947791 4.002,2.4939759 C4.002,2.67369478 4.023,2.84839357 4.059,3.01706827 L3.315,3.01706827 C2.58,3.01706827 1.983,3.69176707 1.983,4.42369478 L0.00800000003,13.6736948 C0.00800000003,14.4066265 0.606,15 1.344,15 L11.657,15 C12.393,15 12.99,14.4066265 12.99,13.6736948 L11.017,4.42369478 L11.017,4.42369478 Z M5,2.50802644 C5,1.67610954 5.67272158,1 6.50046978,1 C7.32633887,1 8,1.67610954 8,2.50802644 C8,2.68177526 7.96523645,2.84419263 7.9116818,3 L5.08925775,3 C5.03476355,2.84513692 5,2.68177526 5,2.50802644 L5,2.50802644 Z M6.047,9.005 L5.045,9.005 L5.045,9.953 L6.047,9.953 L6.047,11.02 L4.982,11.02 L4.982,10.015 L4.043,10.015 L4.043,11.02 L2.962,11.02 L2.962,5.911 L4.043,5.911 L4.043,8.942 L4.982,8.942 L4.982,7.937 L6.047,7.937 L6.047,9.005 L6.047,9.005 Z M10.047,13.023 L9.047,13.023 L9.047,14.046 L7.985,14.046 L7.985,13.038 L8.049,12.975 L8.941,12.958 L8.953,11.021 L6.986,11.021 L6.978,7.952 L10.048,7.965 L10.048,13.023 L10.047,13.023 Z"></path>
                </g>
              </g>
            </svg>{" "}
            {dog?.weight}
          </span>
        </div>
        <div className="details___tag">
          <h3>Origen</h3>
          <p>{dog.origin ? dog.origin : 'Desconocido'}</p>
        </div>
        <div className="details___tag">
          <h3>Raza para </h3>
          <p>{dog?.bred_for}</p>
        </div>
        <div className="details___tag">
          <h3>Promedio de vida</h3>
          <p>{dog?.life_span}</p>
        </div>
        <div className="details___tag">
        <h3>Altura (Cm)</h3>
          <p>{dog?.height}</p>

        </div>
        <div className="details___tag">
          <h3>Temperamento</h3>
          <ul className="details___temp-list">
            {dog?.temperaments?.map((temp) => (
              <li className="details___span-temp" key={temp}>
                {temp}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Details;
