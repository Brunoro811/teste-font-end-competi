import { useEffect, useState } from "react";
import { usePokemon } from "../../providers/pokemon";
import { Pokemon } from "../../providers/pokemon/pokemon.model";
import CardPokemon from "../cardPokemon";
import { ContainerBody, Page } from "./style";
import { ContainerMainData } from "./containerMain.model";
import Pagination from "../pagination";

function ContainerMain({ pokemons, itemsForPage = 6 }: ContainerMainData) {
  const {
    handleGetPokemons,
    /*totalPages,
    setCurrentPage,
    currentPage,
    setCurrenSubtPage,
    numberPage,*/
  } = usePokemon();
  //const [currentPokemons, setCurrentPokemons] = useState<Pokemon[]>([]);
  const [currentPokemons, setCurrentPokemons] = useState<Pokemon[]>();
  const itensPerPage = itemsForPage;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentSubPage, setCurrenSubtPage] = useState<number>(0);
  const totalPages = Math.ceil(pokemons.length / itensPerPage);

  const startindex = currentPage * itensPerPage;
  const endIndex = startindex + itensPerPage;
  const startindexSubPage = currentSubPage * itensPerPage;
  const endIndexSubPage = startindexSubPage + itensPerPage;

  const [numberPage, setNumberPage] = useState(1);

  useEffect(() => {
    if (!currentPokemons) {
      setCurrentPokemons(pokemons.slice(0, 6));
    }
  }, [currentPokemons, pokemons]);

  useEffect(() => {
    setCurrentPokemons(pokemons.slice(startindex, endIndex));
    setNumberPage(currentPage);
  }, [currentPage, endIndex, pokemons, startindex]);

  useEffect(() => {
    setCurrentPokemons(pokemons.slice(startindexSubPage, endIndexSubPage));
    setNumberPage(currentSubPage);
  }, [currentSubPage, endIndexSubPage, pokemons, startindexSubPage]);

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
