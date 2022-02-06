import { createContext, useContext, useEffect, useState } from "react";
import {
  PokemonContextData,
  PokemonProviderData,
  Pokemon,
} from "./pokemon.model";

import axios from "axios";

import { baseURL } from "../../services/api";
import {
  POKEMONS,
  POKEMONS_LINKS,
  POKEMON_CARROSEL,
} from "../../services/localStorage";

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData
);

export const PokemonProvider = ({ children }: PokemonProviderData) => {
  const [allNamesPokemon, setAllNamesPokemon] = useState(
    JSON.parse(localStorage.getItem(POKEMONS_LINKS) || "{}")
  );
  const [pokemons, setPokemons] = useState<Pokemon[]>(
    localStorage.getItem(POKEMONS)
      ? JSON.parse(localStorage.getItem(POKEMONS) || "")
      : []
  );
  const [pokemonsCarrosel, setPokemonsCarrosel] = useState<Pokemon[]>(
    localStorage.getItem(POKEMON_CARROSEL)
      ? JSON.parse(localStorage.getItem(POKEMON_CARROSEL) || "")
      : []
  );

  useEffect(() => {
    async function load() {
      if (!allNamesPokemon.count) {
        await axios
          .get(`${baseURL}?limit=1118&offset=0`)
          .then((response) => {
            localStorage.setItem(POKEMONS_LINKS, JSON.stringify(response.data));
            setAllNamesPokemon(response.data);
          })
          .catch((error) => console.log(error.response.data));
      }
    }
    load();
  }, [allNamesPokemon]);

  useEffect(() => {
    async function loadPokemon() {
      console.log("buscar pokemons");
      let pokemonsList: Pokemon[] = [];
      if (!pokemons[0]) {
        if (allNamesPokemon.count) {
          const { results } = allNamesPokemon;
          for (let i = 0; i < results.length; i++) {
            await axios
              .get(`${results[i].url}`)
              .then((response) => {
                const {
                  name,
                  id,
                  types,
                  sprites: { front_default },
                  abilities,
                  stats,
                } = response.data;
                const newPokemon: Pokemon = {
                  name: name,
                  id: id,
                  types: types[0].type.name,
                  image: front_default,
                  abilities: abilities,
                  stats: stats,
                };
                console.log("buscar pokemons");
                pokemonsList.push(newPokemon);
              })
              .catch((error) => console.log(error.response.data));
          }
          if (!pokemonsCarrosel[0]) {
            let carroselPokemonsList = [];
            for (let i = 0; i < 16; i++) {
              let position = Math.floor(Math.random() * 1118);
              carroselPokemonsList.push(pokemonsList[position]);
            }
            setPokemonsCarrosel(carroselPokemonsList);
            localStorage.setItem(
              POKEMON_CARROSEL,
              JSON.stringify(carroselPokemonsList)
            );
          }
          setPokemons(pokemonsList);
          localStorage.setItem(POKEMONS, JSON.stringify(pokemonsList));
        }
      }
    }
    loadPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allNamesPokemon]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        allNamesPokemon,
        setPokemons,
        pokemonsCarrosel,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
export const usePokemon = () => useContext(PokemonContext);
