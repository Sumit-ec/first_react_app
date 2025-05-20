import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import List from "../list/List";
import Table from "../table/Table";
import Product from "../product/Product";
import NavBar from "../navbar/NavBar";

export default function RoutesPath() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/List" element={<List />} />
        <Route path="/Table" element={<Table />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </div>
  );
}
