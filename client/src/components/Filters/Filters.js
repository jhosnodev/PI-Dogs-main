import React, { useEffect } from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getTemperament,
  filterTemps,
  orderAlpha,
  orderNumber,
  filterSource,
} from "../../redux/actions";

function Filters() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperament());
  }, [dispatch]);

  const allTemps = useSelector((state) => state.temps);
  const handleSortWeight = (order) => {
    dispatch(orderNumber(order));
  };

  const handleSortBreed = (order) => {
    dispatch(orderAlpha(order));
  };

  const handleTempFilter = (e) => {
    dispatch(filterTemps(e.target.value));
  };
  const handleSourceFilter = (source) => {
    dispatch(filterSource(source));
  };

  return (
    <div className="filter___main">
      <div className="filter___weight-control">
        <div>
          <button
            className="btn___hightlight btn___primary"
            id="as"
            value="as"
            onClick={() => handleSortWeight("as")}
          >
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
          <button
            className="btn___hightlight btn___primary"
            id="des"
            value="des"
            onClick={() => handleSortWeight("des")}
          >
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
        <div>
          <button
            className="btn___hightlight btn___primary"
            id="as"
            value="as"
            onClick={() => handleSortBreed("as")}
          >
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
          <button
            className="btn___hightlight btn___primary"
            id="des"
            value="des"
            onClick={() => handleSortBreed("des")}
          >
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
      <div className="filter___source-control">
        <div>
          <button
            className="btn___hightlight btn___primary"
            id="as"
            value="as"
            onClick={() => handleSourceFilter("cloud")}
          >
            <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none">
              <path
                d="M6.28571 19C3.91878 19 2 17.1038 2 14.7647C2 12.4256 3.91878 10.5294 6.28571 10.5294C6.56983 10.5294 6.8475 10.5567 7.11616 10.6089M14.381 8.02721C14.9767 7.81911 15.6178 7.70588 16.2857 7.70588C16.9404 7.70588 17.5693 7.81468 18.1551 8.01498M7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498M7.11616 10.6089C7.68059 10.7184 8.20528 10.9374 8.66667 11.2426M18.1551 8.01498C20.393 8.78024 22 10.8811 22 13.3529C22 16.0599 20.0726 18.3221 17.5 18.8722"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 22V16M12 22L14 20M12 22L10 20"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="btn___hightlight btn___primary"
            id="des"
            value="des"
            onClick={() => handleSourceFilter("DB")}
          >
            <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"
                stroke="#000000"
                strokeWidth="1.5"
              />
              <path
                d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"
                stroke="#000000"
                strokeWidth="1.5"
              />
              <path
                d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"
                stroke="#000000"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="filter___temperaments-control">
        <select onChange={(e) => handleTempFilter(e)}>
          <option value="all">All Temperaments</option>
          {allTemps.map((temp) => {
            return (
              <option value={temp.name} key={temp.id}>
                {temp.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Filters;
