import { useEffect, useState } from "react";
import Container from "../components/container";
import ContainerCard from "../components/ContainerCard";
import ContainerMain from "../components/ContainerMain";
import Footer from "../components/footer";
import Header from "../components/header";
import { usePokemon } from "../providers/pokemon";
import { Pokemon } from "../providers/pokemon/pokemon.model";

import { HeaderFiltro, Label, Select } from "./style";

function Home() {
  const [search, setSearch] = useState<string>("");
  const { pokemons } = usePokemon();
  const [pokemonList, setPokemonList] = useState(pokemons);
  const [achados, setAchados] = useState<Pokemon[]>([]);

  const handleSearchPokemonForName = () => {
    setAchados(
      pokemons.filter((element: Pokemon) => element.name.includes(search))
    );
  };

  const handleSearchPokemonForType = (type: string) => {
    if (type !== "") {
      setPokemonList(
        pokemons.filter((element: Pokemon) => element.types.includes(type))
      );
    } else {
      setPokemonList(pokemons);
    }
  };

  useEffect(() => {
    if (search) {
      handleSearchPokemonForName();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

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
            <HeaderFiltro>
              <Label>
                Filtro
                <Select
                  defaultValue={"all"}
                  onChange={(e) => handleSearchPokemonForType(e.target.value)}
                >
                  <option value=""> all</option>
                  <option value="fire"> Fire</option>
                  <option value="grass"> Grass</option>
                  <option value="normal"> Normal</option>
                  <option value="bug"> bug</option>
                  <option value="poison"> poison</option>
                </Select>
              </Label>
            </HeaderFiltro>
            <ContainerMain pokemons={achados} />
          </ContainerCard>
        </Container>
      )}

      {!search && (
        <Container>
          <ContainerCard>
            <HeaderFiltro>
              <Label>
                Filtro
                <Select
                  defaultValue={"all"}
                  onChange={(e) => handleSearchPokemonForType(e.target.value)}
                >
                  <option value=""> all</option>
                  <option value="fire"> Fire</option>
                  <option value="grass"> Grass</option>
                  <option value="normal"> Normal</option>
                  <option value="bug"> bug</option>
                  <option value="poison"> poison</option>
                </Select>
              </Label>
            </HeaderFiltro>
            <ContainerMain pokemons={pokemonList} />
          </ContainerCard>
        </Container>
      )}
      <Footer />
    </>
  );
}
export default Home;
