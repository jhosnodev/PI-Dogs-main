import { useEffect, useState } from "react";
import "./List.css";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions";
import Pagination from "../Pagition/Pagination";
import Alert from "../Alert/Alert";

/* import dogs from "../../data/pivot"; */

function List({ search, setSearch, clear, setClear, order, setOrder }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);
  const allDogs = useSelector((state) => state.dogs);

  const handleErase = () => {
    dispatch({ type: "RESET_SEARCH" });
    setSearch("");
    setClear(!clear);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);

  //dogs to list
  const dogs = Object.values(allDogs);

  //pagination settings
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

  return (
    <div className="list___main">
      <div className="list___header-container">
        <h3>{clear ? 
        (search.length > 0 ? `Busqueda de: ${search}` : order ) : "Perritus"} </h3>
        <button
          onClick={handleErase}
          className={`btn___hightlight btn___primary ${clear ? "" : "hidden"}`}
        >
          Limpiar
        </button>
      </div>
      <div className="list___container">
   
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

        <Pagination
          dogsPerPage={dogsPerPage}
          totalItems={dogs.length}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default List;
