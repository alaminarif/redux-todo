import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import AddBook from "../feature/books/AddBooks";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import ShowBooks from "../feature/books/ShowBooks";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/show-book" element={<ShowBooks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
