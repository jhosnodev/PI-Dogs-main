import React from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { getTemperament } from "../../redux/actions";
import { useEffect } from "react";

function Filters() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemperament());
  }, [dispatch]);
  const allTemps = useSelector((state) => state.temps);
  console.log(allTemps);

  return (
    <div className="filter___main">
      <div className="filter___weight-control">
        <label>Peso</label>
        <div>
          <button className="btn___hightlight btn___primary">
            <svg
              fill="#000000"
              width="18px"
              height="18px"
              viewBox="-32 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M304 96h16v64h-16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-16V48a16 16 0 0 0-16-16h-48a16 16 0 0 0-14.29 8.83l-16 32A16 16 0 0 0 304 96zm26.15 162.91a79 79 0 0 0-55 54.17c-14.25 51.05 21.21 97.77 68.85 102.53a84.07 84.07 0 0 1-20.85 12.91c-7.57 3.4-10.8 12.47-8.18 20.34l9.9 20c2.87 8.63 12.53 13.49 20.9 9.91 58-24.76 86.25-61.61 86.25-132V336c-.02-51.21-48.4-91.34-101.85-77.09zM352 356a20 20 0 1 1 20-20 20 20 0 0 1-20 20zm-176-4h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z" />
            </svg>
          </button>
          <button className="btn___hightlight btn___primary">
            <svg
              fill="#000000"
              width="18px"
              height="18px"
              viewBox="-32 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M107.31 36.69a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31zM400 416h-16V304a16 16 0 0 0-16-16h-48a16 16 0 0 0-14.29 8.83l-16 32A16 16 0 0 0 304 352h16v64h-16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM330.17 34.91a79 79 0 0 0-55 54.17c-14.27 51.05 21.19 97.77 68.83 102.53a84.07 84.07 0 0 1-20.85 12.91c-7.57 3.4-10.8 12.47-8.18 20.34l9.9 20c2.87 8.63 12.53 13.49 20.9 9.91 58-24.77 86.25-61.61 86.25-132V112c-.02-51.21-48.4-91.34-101.85-77.09zM352 132a20 20 0 1 1 20-20 20 20 0 0 1-20 20z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="filter___alphabect-control">
        <label>Raza</label>
        <div>
          <button className="btn___hightlight btn___primary">
            <svg
              fill="#000000"
              width="18px"
              height="18px"
              viewBox="-32 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm240-64H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 321.63V304a16 16 0 0 0-16-16zm31.06-85.38l-59.27-160A16 16 0 0 0 372.72 32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16 16 0 0 0 15.06-21.38zM335.61 144L352 96l16.39 48z" />
            </svg>
          </button>
          <button className="btn___hightlight btn___primary">
            <svg
              fill="#000000"
              width="18px"
              height="18px"
              viewBox="-32 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160zm272 64h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 65.63V48a16 16 0 0 0-16-16H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 190.37V208a16 16 0 0 0 16 16zm159.06 234.62l-59.27-160A16 16 0 0 0 372.72 288h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 480h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 480H432a16 16 0 0 0 15.06-21.38zM335.61 400L352 352l16.39 48z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="filter___temperaments-control">
        <label>Temperamento</label>
        <select>
          <option>Temperamento</option>
       {
        allTemps.map( temp => 
          <option value={ temp.id } key={temp.id}>{temp.name}</option>
        )
       }
        </select>
      </div>
    </div>
  );
}

export default Filters;
