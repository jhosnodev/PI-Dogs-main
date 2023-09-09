import React, { useState } from "react";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filters/Filters";
import List from "../../components/List/List";
import "./home.css";

export const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <main className="home___main">
      <Search setSearch={setSearch} search={search} />
      <Filter />
      <List search={search} setSearch={setSearch} />
    </main>
  );
};
