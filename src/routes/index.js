import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/loginPage/login";
import PokemonPage from "../components/pokemonPage/pokemonPage";
import SearchPokemon from "../components/pokemonSearch/index";

const RoutePages = () => (
  <Routes>
    <Route exact path="/" element={<Login />} />
    <Route path="/pokemonpage" element={<PokemonPage />} />
    <Route path="/search" element={<SearchPokemon />} />
  </Routes>
);
export default RoutePages;
