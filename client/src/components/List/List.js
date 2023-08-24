import React from "react";
import "./List.css";
import Card from "../Card/Card";

function List() {
  const dog = {
    weight: {
      imperial: "6 - 13",
      metric: "3 - 6",
    },
    height: {
      imperial: "9 - 11.5",
      metric: "23 - 29",
    },
    id: 1,
    name: "Affenpinscher",
    bred_for: "Small rodent hunting, lapdog",
    breed_group: "Toy",
    life_span: "10 - 12 years",
    temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    origin: "Germany, France",
    reference_image_id: "BJa4kxc4X",
  };
  return (
    <div className="list___main">
      <h3>Listado</h3>
      <div className="list___container">
        <Card
          key={dog.id}
          name={dog.name}
          image={dog.reference_image_id}
          temperament={dog.temperament}
          bred_for={dog.bred_for}
          weight={dog.weight}
        />
        <Card
          key={dog.id}
          name={dog.name}
          image={dog.reference_image_id}
          temperament={dog.temperament}
          bred_for={dog.bred_for}
          weight={dog.weight}
        />
        <Card
          key={dog.id}
          name={dog.name}
          image={dog.reference_image_id}
          temperament={dog.temperament}
          bred_for={dog.bred_for}
          weight={dog.weight}
        />
        <Card
          key={dog.id}
          name={dog.name}
          image={dog.reference_image_id}
          temperament={dog.temperament}
          bred_for={dog.bred_for}
          weight={dog.weight}
        />
      </div>
    </div>
  );
}

export default List;
