import { MouseEventHandler, useEffect, useRef, useState } from "react";
import "./active.css";

import { Pokemon } from "../../providers/pokemon/pokemon.model";
import { useUser } from "../../providers/user";
import { usePokemon } from "../../providers/pokemon";

import ItemCarrosel from "../../components/itemCarrosel";
import Container from "../../components/container";
import ContainerCard from "../../components/containerCard";
import ContainerMain from "../../components/containerMain";
import Footer from "../../components/footer";
import Header from "../../components/header";
import InformationModal from "../../components/modal/information";

import Right from "../../assets/svg/right.svg";
import Left from "../../assets/svg/left.svg";

import {
  CaroselContainer,
  ContainerCenter,
  ContainerMax,
  DivCenter,
  HeaderFiltro,
  Label,
  Select,
  SpanAside,
} from "./style";
import ButtonCircle from "../../components/buttonCircle";
import ButtonPage from "../../components/buttonPage";
export interface UserData {
  name: string;
  password: string;
  pokedex: [any];
}

function Home() {
  const [search, setSearch] = useState<string>("");
  const { pokemons } = usePokemon();
  const [achados, setAchados] = useState<Pokemon[]>([]);
  const widthTotal = 1200;

  const { isInformation, setIsInformation, handleAddPokemon } = useUser();
  const handleInformation = () => setIsInformation(!isInformation);
  const [backupPokemon, setBackupPokemon] = useState(pokemons);

  const carrosel = useRef<HTMLInputElement>({} as HTMLInputElement);
  const [carroselPage, setCarroselPage] = useState(1);

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
  const handleMoveButton = (e: React.ChangeEvent<Element>, code: number) => {
    setCarroselPage(code + 1);
    carrosel.current.scrollLeft = widthTotal * code;
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
          <DivCenter>
            <ButtonPage
              onClick={(e) => handleMoveButton(e, 0)}
              circle
              spanHidden
              children={1}
              backgroundColor="#7E7394"
              numberPage={carroselPage}
            />
            <ButtonPage
              onClick={(e) => handleMoveButton(e, 1)}
              circle
              spanHidden
              children={2}
              backgroundColor="#7E7394"
              numberPage={carroselPage}
            />
            <ButtonPage
              onClick={(e) => handleMoveButton(e, 2)}
              circle
              spanHidden
              children={3}
              backgroundColor="#7E7394"
              numberPage={carroselPage}
            />
          </DivCenter>
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
