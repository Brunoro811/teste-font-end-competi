import { useEffect, useRef, useState } from "react";

import { Pokemon } from "../../providers/pokemon/pokemon.model";
import { useUser } from "../../providers/user";
import { usePokemon } from "../../providers/pokemon";

import ItemCarrosel from "../../components/itemCarrosel";
import Container from "../../components/container";
import ContainerCard from "../../components/ContainerCard";
import ContainerMain from "../../components/ContainerMain";
import Footer from "../../components/footer";
import Header from "../../components/header";
import InformationModal from "../../components/modal/information";

import Right from "../../assets/svg/right.svg";
import Left from "../../assets/svg/left.svg";

import {
  CaroselContainer,
  ContainerCenter,
  ContainerMax,
  HeaderFiltro,
  Label,
  Select,
  SpanAside,
} from "./style";
import ButtonCircle from "../../components/buttonCircle";
export interface UserData {
  name: string;
  password: string;
  pokedex: [any];
}

function Home() {
  const [search, setSearch] = useState<string>("");
  const { pokemons, setPokemons } = usePokemon();
  const [achados, setAchados] = useState<Pokemon[]>([]);

  const { isInformation, setIsInformation, handleAddPokemon } = useUser();
  const handleInformation = () => setIsInformation(!isInformation);
  const [backupPokemon, setBackupPokemon] = useState(pokemons);

  const carrosel = useRef<HTMLInputElement>({} as HTMLInputElement);

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

  const handleCarroselRight = (e: EventTarget) => {
    carrosel.current.scrollLeft += carrosel.current.offsetWidth + 10;
  };
  const handleCarroselleft = (e: EventTarget) => {
    carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
  };

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

          <ContainerCenter>
            <SpanAside>
              <ButtonCircle
                color="#524153"
                image={Left}
                callback={handleCarroselleft}
                alt="left"
              />
            </SpanAside>
            <ContainerMax>
              <CaroselContainer ref={carrosel}>
                <ItemCarrosel />
                <ItemCarrosel />
                <ItemCarrosel />
                <ItemCarrosel />
                <ItemCarrosel />
                <ItemCarrosel />
                <ItemCarrosel />
                <ItemCarrosel />
                <ItemCarrosel />
                <ItemCarrosel />
                <ItemCarrosel />
                <ItemCarrosel />
                <ItemCarrosel />
                <ItemCarrosel />
              </CaroselContainer>
            </ContainerMax>
            <SpanAside>
              <ButtonCircle
                color="#524153"
                image={Right}
                callback={handleCarroselRight}
                alt="right"
              />
            </SpanAside>
          </ContainerCenter>
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
