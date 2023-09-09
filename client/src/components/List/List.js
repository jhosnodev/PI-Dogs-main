import { useEffect, useState } from "react";
import "./List.css";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions";
import Pagination from "../Pagition/Pagination";
/* import dogs from "../../data/pivot"; */



function List({ search, setSearch }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);
  const allDogs = useSelector((state) => state.dogs);
  const searchResult = useSelector((state) => state.search);
  /* console.log(allDogs) */
  

  const handleEaraser = ()=>{
   
    dispatch({ type: "RESET_SEARCH" });
    setSearch('')
  }
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  
  //dogs to list
  const dogs = searchResult.length ? searchResult : Object.values(allDogs);
  
  //pagination settings
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

  return (
    <div className="list___main">
      <div className="list___header-container">
        <h3>{searchResult.length > 0 ? `Busqueda de: ${search}` : "Perritus"} </h3>
        <button onClick={handleEaraser} className={`btn___hightlight btn___primary ${searchResult.length > 0 ? '' : 'hidden'}`}>Limpiar</button>
      </div>
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
          totalItems={dogs.length}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default List;
