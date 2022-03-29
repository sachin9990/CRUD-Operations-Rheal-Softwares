import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import ClassExample from "./Routes/ClassExample/ClassExample";
import EditBook from "./Routes/ClassExample/EditBook";
import AddBook from "./Routes/ClassExample/AddBook";
import FunctionExample from "./Routes/FunctionExample/FunctionExample";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const routing = (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/classExample" element={<ClassExample />} />
      <Route exact path="/functionExample" element={<FunctionExample />} />
      <Route exact path="/EditBook/:bookId" element={<EditBook />} />
      <Route exact path="/AddBook" element={<EditBook />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
