import { useEffect, useState } from "react";
import "./List.css";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions";
import Pagination from "../Pagition/Pagination";
import dogs from "../../data/pivot";
function List() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);
  const allDogs = useSelector((state) => state.dogs);
/* console.log(allDogs) */
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = Object.values(allDogs).slice(indexOfFirstDog, indexOfLastDog);

  return (
    <div className="list___main">
      <h3>Listado</h3>
      <div className="list___container">
        {currentDogs.map((dog) => (
          <Card
            key={dog.id}
            id={dog.id}
            name={dog.name}
            image={dog.image}
            temperament={dog.temperament}
            bred_for={dog.bred_for}
            weight={dog.weight}
            breed={dog.breed}
          />
        ))}
        <Pagination
          dogsPerPage={dogsPerPage}
          totalItems={allDogs.length}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default List;
