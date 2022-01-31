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
  const [allNamesPokemon, setAllNamesPokemon] = useState(
    JSON.parse(localStorage.getItem("@PokemonsNames") || "{}")
  );

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const handleGetPokemons = async (defaultNumber: number = 6) => {
    let pokemonsList: Pokemon[] = [];
    for (let i = 1; i < 55; i++) {
      await axios
        .get(`${baseURL}/${i}/`)
        .then((response) => {
          const {
            name,
            id,
            types,
            sprites: { front_default },
          } = response.data;
          const newPokemon: Pokemon = {
            name: name,
            id: id,
            types: types[0].type.name,
            image: front_default,
          };
          pokemonsList.push(newPokemon);
        })
        .catch((error) => console.log(error.response.data));
    }
    setPokemons(pokemonsList);
  };

  useEffect(() => {
    if (!allNamesPokemon.count) {
      axios
        .get(`${baseURL}?limit=1118&offset=0`)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("@PokemonsNames", JSON.stringify(response.data));
          setAllNamesPokemon(response.data);
        })
        .catch((error) => console.log(error.response.data));
    }
  }, [allNamesPokemon]);

  return (
    <PokemonContext.Provider
      value={{
        handleGetPokemons,
        pokemons,
        allNamesPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
export const usePokemon = () => useContext(PokemonContext);
