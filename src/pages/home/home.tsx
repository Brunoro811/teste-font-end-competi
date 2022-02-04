import { useEffect, useState } from "react";
import Container from "../../components/container";
import ContainerCard from "../../components/ContainerCard";
import ContainerMain from "../../components/ContainerMain";
import Footer from "../../components/footer";
import Header from "../../components/header";
import InformationModal from "../../components/modal/information";
import { usePokemon } from "../../providers/pokemon";
import { Pokemon } from "../../providers/pokemon/pokemon.model";
import { useUser } from "../../providers/user";

import { HeaderFiltro, Label, Select } from "./style";
export interface UserData {
  name: string;
  password: string;
  pokedex: [any];
}

function Home() {
  const [search, setSearch] = useState<string>("");
  const { pokemons, setPokemons } = usePokemon();
  //const [pokemonList, setPokemonList] = useState(pokemons);
  const [achados, setAchados] = useState<Pokemon[]>([]);

  const { isInformation, setIsInformation, handleAddPokemon } = useUser();
  const handleInformation = () => setIsInformation(!isInformation);
  const [backupPokemon, setBackupPokemon] = useState(pokemons);

  const handleSearchPokemonForName = () => {
    setAchados(
      pokemons.filter((element: Pokemon) => element.name.includes(search))
    );
  };

  const handleSearchPokemonForType = (type: string) => {
    if (type !== "") {
      setBackupPokemon(
        pokemons.filter((element: Pokemon) => element.types.includes(type))
      );
    } else {
      setBackupPokemon(pokemons);
    }
  };

  useEffect(() => {
    if (search) {
      handleSearchPokemonForName();
    }
    if (!search) {
      setBackupPokemon(pokemons);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  /* useEffect(() => {
    if (pokemonList[0]) {
      setAchados(
        pokemons.filter((element: Pokemon) => element.name.includes(search))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonList]);*/

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
            {/*<HeaderFiltro>
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
            </HeaderFiltro>*/}
            <ContainerMain callbackAdd={handleAddPokemon} pokemons={achados} />
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
            <ContainerMain
              callbackAdd={handleAddPokemon}
              pokemons={backupPokemon}
            />
          </ContainerCard>
        </Container>
      )}
      <Footer />
      {isInformation && (
        <InformationModal handleIsInformation={handleInformation} />
      )}
    </>
  );
}
export default Home;
