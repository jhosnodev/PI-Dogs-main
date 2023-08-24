import React from "react";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filters/Filters";
import List from "../../components/List/List";
import "./home.css";

export const Home = () => {
  return (
    <main className="home___main">
      <Search />
      <Filter />
      <List />
    </main>
  );
};
