import React from "react";
import { Movies, Genres, MovieDetails } from "./pages/export";
import { Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components/export";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}
