import { useEffect /* , useState */ } from "react";
import "./List.css";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions";

function List() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  console.log(allDogs);
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className="list___main">
      <h3>Listado</h3>
      <div className="list___container">
        {allDogs.slice(0, 8).map((dog) => (
          <Card
            key={dog.id}
            id={dog.id}
            name={dog.name}
            image={dog.reference_image_id}
            temperament={dog.temperament}
            bred_for={dog.bred_for}
            weight={dog.weight}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
