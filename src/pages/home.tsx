import { keyboard } from "@testing-library/user-event/dist/keyboard";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../components/container";
import ContainerCard from "../components/ContainerCard";
import ContainerMain from "../components/ContainerMain";
import Footer from "../components/footer";
import Header from "../components/header";
//import Pagination from "../components/pagination";
import { usePokemon } from "../providers/pokemon";
import { NamesPokemon, Pokemon } from "../providers/pokemon/pokemon.model";
import { baseURL } from "../services/api";

import { HeaderFiltro, Label, Select } from "./style";

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
          <ContainerCard>
            <ContainerMain currentPokemons={achados} />
          </ContainerCard>
        </Container>
      )}

      {!search[0] && (
        <Container>
          <ContainerCard>
            <HeaderFiltro>
              <Label>
                Filtro
                <Select defaultValue="filtro">
                  <option value=""> all</option>
                  <option value="value"> Fire</option>
                  <option value="value"> Grass</option>
                  <option value="value"> Normal</option>
                  <option value="value"> bug</option>
                  <option value="value"> poison</option>
                </Select>
              </Label>
            </HeaderFiltro>
            <ContainerMain currentPokemons={currentPokemons} />
          </ContainerCard>
        </Container>
      )}
      <Footer />
    </>
  );
}
export default Home;
