import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../components/container";
import ContainerCard from "../components/ContainerCard";
import ContainerMain from "../components/ContainerMain";
import Footer from "../components/footer";
import Header from "../components/header";
import { usePokemon } from "../providers/pokemon";
import { NamesPokemon, Pokemon } from "../providers/pokemon/pokemon.model";

import { HeaderFiltro, Label, Select } from "./style";

function Home() {
  const [search, setSearch] = useState<string>("");
  const { allNamesPokemon, pokemons } = usePokemon();
  const [achados, setAchados] = useState<Pokemon[]>([]);
  const handleSearchPokemonForName = async () => {
    let pokemonsList: Pokemon[] = [];
    if (search) {
      const resultForName: any[] = allNamesPokemon.results.filter(
        (element: NamesPokemon, index: number) => {
          if (element.name.includes(search)) {
            return element;
          }
        }
      );
      for (let i = 0; i < resultForName.length; i++) {
        await axios
          .get(`${resultForName[i].url}`)
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
        console.log("Lista de Pokemons Achados fora map", pokemonsList);
      }
      setAchados(pokemonsList);
    }
  };

  useEffect(() => {
    handleSearchPokemonForName();
  }, [search]);

  return (
    <>
      <Header
        value={search}
        handleSearchPokemonForName={handleSearchPokemonForName}
        onChange={setSearch}
      />
      {search && achados[0] && (
        <Container>
          <ContainerCard>
            <ContainerMain pokemons={achados} />
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
            <ContainerMain pokemons={pokemons} />
          </ContainerCard>
        </Container>
      )}
      <Footer />
    </>
  );
}
export default Home;
