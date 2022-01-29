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
import { ContainerMainData } from "./containerMain.model";

function ContainerMain({ currentPokemons }: ContainerMainData) {
  const {
    handleGetPokemons,
    pages,
    setCurrentPage,
    currentPage,
    currentSubPage,
    setCurrenSubtPage,
    numberPage,
  } = usePokemon();

  const arrPages = Array.from(Array(pages), (element, index) => index);
  const [arrPagination, setArrPagination] = useState();

  const walkArray = (array: any[], inicio: any, fim: any) => {
    let newArray = [];
    let diferenca = fim - inicio;
    if (inicio + diferenca <= array.length - 1) {
      for (let i = inicio; i <= fim; i++) {
        newArray.push(array[i]);
      }
    } else {
      for (let i = inicio; i < array.length; i++) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  };

  useEffect(() => {
    handleGetPokemons();
  }, []);
  return (
    <Container>
      <Header>
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
              number={element.id}
              image={element.image}
            />
          ))}
      </ContainerBody>
      <ContainerPagination>
        {walkArray(arrPages, currentPage, currentPage + 2)[0] > 0 && (
          <ButtonPage
            onClick={(e) => setCurrentPage(currentPage - 1)}
            isImage
            image={previous}
          />
        )}
        {walkArray(arrPages, currentPage, currentPage + 2).map(
          (element, index) => (
            <ButtonPage
              key={index}
              value={Number(currentPage + index)}
              children={currentPage + index + 1}
              onClick={(e) => setCurrenSubtPage(Number(e.target.value))}
            />
          )
        )}
        {walkArray(arrPages, currentPage, currentPage + 2)[
          walkArray(arrPages, currentPage, currentPage + 2).length - 1
        ] <
          pages - 1 && (
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
