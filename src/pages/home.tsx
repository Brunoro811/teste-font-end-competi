import { keyboard } from "@testing-library/user-event/dist/keyboard";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../components/container";
import ContainerMain from "../components/ContainerMain";
import Footer from "../components/footer";
import Header from "../components/header";
import Pagination from "../components/pagination";
import { usePokemon } from "../providers/pokemon";
import { NamesPokemon, Pokemon } from "../providers/pokemon/pokemon.model";
import { baseURL } from "../services/api";

function Home() {
  const [search, setSearch] = useState<string>("");
  const { allNamesPokemon, currentPokemons } = usePokemon();
  const [result, setResult] = useState([]);
  const [achados, setAchados] = useState<Pokemon[]>([]);

  function handleSearchPokemonForName() {}

  useEffect(() => {
    if (search) {
      setResult(
        allNamesPokemon.results.filter(
          (element: NamesPokemon, index: number) => {
            if (element.name.includes(search)) {
              return element;
            }
          }
        )
      );
    }
  }, [search]);

  useEffect(() => {
    const pokemonsList: Pokemon[] = [];
    result.map(async (element: any, index) => {
      await axios
        .get(`${element.url}`)
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
      setAchados(pokemonsList);
    });
  }, [result]);

  return (
    <>
      <Header
        value={search}
        handleSearchPokemonForName={handleSearchPokemonForName}
        onChange={setSearch}
      />

      {search && (
        <Container>
          {result && console.log("result:", result)}
          <ContainerMain currentPokemons={achados} />
        </Container>
      )}

      {!search[0] && (
        <Container>
          <ContainerMain currentPokemons={currentPokemons} />
        </Container>
      )}
      <Pagination />
      <Footer />
    </>
  );
}
export default Home;
