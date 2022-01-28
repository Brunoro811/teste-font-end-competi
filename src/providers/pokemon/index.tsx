import { createContext, useContext, useEffect, useState } from "react";
import {
  PokemonContextData,
  PokemonProviderData,
  Pokemon,
} from "./pokemon.model";

import axios from "axios";

import { baseURL } from "../../services/api";

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData
);

export const PokemonProvider = ({ children }: PokemonProviderData) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [itensPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentSubPage, setCurrenSubtPage] = useState(0);

  const pages = Math.ceil(pokemons.length / itensPerPage);

  const startindex = currentPage * itensPerPage;
  const endIndex = startindex + itensPerPage;
  const startindexSubPage = currentSubPage * itensPerPage;
  const endIndexSubPage = startindexSubPage + itensPerPage;

  const [currentPokemons, setCurrentPokemons] = useState<Pokemon[]>([]);
  const [numberPage, setNumberPage] = useState(1);

  useEffect(() => {
    setCurrentPokemons(pokemons.slice(startindex, endIndex));
    setNumberPage(currentPage);
  }, [currentPage, endIndex, pokemons, startindex]);

  useEffect(() => {
    setCurrentPokemons(pokemons.slice(startindexSubPage, endIndexSubPage));
    setNumberPage(currentSubPage);
  }, [currentSubPage, endIndexSubPage, pokemons, startindexSubPage]);

  const handleGetPokemons = async (defaultNumber: number = 6) => {
    let pokemonsList: Pokemon[] = [];
    for (let i = 1; i < 55; i++) {
      await axios
        .get(`${baseURL}/${i}/`)
        .then((response) => {
          const {
            name,
            order,
            types,
            sprites: { front_default },
          } = response.data;
          const newPokemon: Pokemon = {
            name: name,
            order: order,
            types: types[0].type.name,
            image: front_default,
          };
          pokemonsList.push(newPokemon);
        })
        .catch((error) => console.log(error.response.data));
    }
    setPokemons(pokemonsList);
    setCurrentPokemons(pokemonsList.slice(0, 6));
  };

  return (
    <PokemonContext.Provider
      value={{
        handleGetPokemons,
        pokemons,
        pages,
        currentPokemons,
        setCurrentPage,
        currentPage,
        currentSubPage,
        setCurrenSubtPage,
        numberPage,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
export const usePokemon = () => useContext(PokemonContext);
