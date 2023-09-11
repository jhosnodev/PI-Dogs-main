import {  useState } from "react";
import "./Fav.css";
import "../List/List.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

import Pagination from "../Pagition/Pagination";
/* import dogs from "../../data/pivot"; */

function Fav() {
  const favs = useSelector((state) => state.favs);

  const searchResult = useSelector((state) => state.search);

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
      <h3 className="fav___header-container">Tus perritus favoritos</h3>
      <div className="fav___container">
        <div className="fav___container-card">
          {currentDogs.length === 0
            ? "Guarda algunos perritos para empezar 🐾"
            : currentDogs.map((dog) => (
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
      {currentDogs.length === 0 ? (
        ""
      ) : (
        <Pagination
          dogsPerPage={dogsPerPage}
          totalItems={dogs.length}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

export default Fav;
