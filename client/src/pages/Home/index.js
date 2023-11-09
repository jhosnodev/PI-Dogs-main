import React, { useState, useEffect } from "react";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filters/Filters";
import List from "../../components/List/List";
import { useDispatch } from "react-redux";
import "./home.css";
import { getDogs } from "../../redux/actions";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [clear, setClear] = useState(false);
  const [order, setOrder] = useState("");

  const dispatch= useDispatch()
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

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
