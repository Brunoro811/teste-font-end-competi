import { useEffect } from "react";
import { usePokemon } from "../../providers/pokemon";
import { Pokemon } from "../../providers/pokemon/pokemon.model";
import CardPokemon from "../cardPokemon";
import { Container, ContainerBody, Page } from "./style";
import { ContainerMainData } from "./containerMain.model";
import Pagination from "../pagination";

function ContainerMain({ currentPokemons }: ContainerMainData) {
  const {
    handleGetPokemons,
    totalPages,
    setCurrentPage,
    currentPage,
    setCurrenSubtPage,
    numberPage,
  } = usePokemon();

  const arrPages = Array.from(Array(totalPages), (element, index) => index);
  useEffect(() => {
    handleGetPokemons();
  }, []);
  return (
    <>
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
      <Pagination
        arrPages={arrPages}
        currentPage={currentPage}
        numberPagination={2}
        setCurrenSubtPage={setCurrenSubtPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
}
export default ContainerMain;
