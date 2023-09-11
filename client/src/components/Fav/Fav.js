import { useEffect, useState } from "react";
import "./Fav.css";
import "../List/List.css";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";

import Pagination from "../Pagition/Pagination";
/* import dogs from "../../data/pivot"; */

function Fav({ search, setSearch }) {
  const dispatch = useDispatch();

  const favs = useSelector((state) => state.favs);

  const searchResult = useSelector((state) => state.search);

  const handleEaraser = () => {
    dispatch({ type: "RESET_SEARCH" });
    setSearch("");
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);

  //dogs to Fav
  const dogs = searchResult.length ? searchResult : favs;

  //pagination settings
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = favs?.slice(indexOfFirstDog, indexOfLastDog);

  return (
    <div className="fav___main">
      <h3  className="fav___header-container">Tus perritus favoritos</h3>
      <div className="fav___container">
    
        <div className="fav___container-card">
          {currentDogs.map((dog) => (
            <Card
              key={dog.id}
              id={dog.id}
              name={dog.name}
              image={dog.image}
              temperaments={dog.temperaments}
              bred_for={dog.bred_for}
              weight={dog.weight}
            />
          ))}
        </div>
      </div>
      <Pagination
        dogsPerPage={dogsPerPage}
        totalItems={dogs.length}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Fav;
