import React, { useState } from "react";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filters/Filters";
import List from "../../components/List/List";
import "./home.css";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [clear, setClear] = useState(false);
  const [order, setOrder] = useState("");

  return (
    <main className="home___main">
      <Search
        setSearch={setSearch}
        search={search}
        clear={clear}
        setClear={setClear}
      />
      <Filter
        clear={clear}
        setClear={setClear}
        order={order}
        setOrder={setOrder}
      />
      <List
        search={search}
        setSearch={setSearch}
        clear={clear}
        setClear={setClear}
        order={order}
        setOrder={setOrder}
      />
    </main>
  );
};
