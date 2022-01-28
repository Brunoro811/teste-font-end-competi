import { useEffect, useState } from "react";
import { usePokemon } from "../../providers/pokemon";
import { Pokemon } from "../../providers/pokemon/pokemon.model";
import ButtonPage from "../buttonPage";
import CardPokemon from "../cardPokemon";
import {
  Container,
  Header,
  ContainerBody,
  Select,
  Label,
  ContainerPagination,
  Page,
} from "./style";

import next from "../../assets/svg/next.svg";
import previous from "../../assets/svg/previous.svg";

function ContainerMain() {
  const {
    handleGetPokemons,
    pages,
    currentPokemons,
    setCurrentPage,
    currentPage,
    currentSubPage,
    setCurrenSubtPage,
    numberPage,
  } = usePokemon();
  const [countPagePagination, setCountPagePagination] = useState(
    Array.from(Array(pages), (element, index) => index).slice(
      currentSubPage,
      currentSubPage + 3
    ).length
  );

  useEffect(() => {
    handleGetPokemons();
  }, []);
  return (
    <Container>
      <Header>
        <Label>
          Filtro
          <Select defaultValue="filtro">
            <option value="value"> Value</option>
          </Select>
        </Label>
      </Header>
      <Page>Pagina: {numberPage + 1}</Page>
      <ContainerBody>
        {currentPokemons &&
          currentPokemons.map((element: Pokemon, index: number) => (
            <CardPokemon
              key={element.name}
              name={element.name}
              type={element.types}
              alt={element.name}
              number={element.order}
              image={element.image}
            />
          ))}
      </ContainerBody>
      <ContainerPagination>
        <ButtonPage
          onClick={(e) => setCurrentPage(currentPage - 1)}
          isImage
          image={previous}
        />

        {Array.from(Array(pages), (element, index) => index)
          .slice(currentSubPage, currentSubPage + 3)
          .map((element, index) => {
            return (
              <ButtonPage
                key={index}
                value={Number(currentPage + index)}
                children={currentPage + index + 1}
                onClick={(e) => setCurrenSubtPage(Number(e.target.value))}
              />
            );
          })}
        {numberPage + 1 < pages && (
          <ButtonPage
            onClick={(e) => setCurrentPage(currentPage + 1)}
            isImage
            image={next}
          />
        )}
      </ContainerPagination>
    </Container>
  );
}
export default ContainerMain;
