import { useEffect, useState } from "react";

import CardPokemon from "../cardPokemon";
import Pagination from "../pagination";

import { ContainerMainData } from "./containerMain.model";
import { Pokemon } from "../../providers/pokemon/pokemon.model";

import { ContainerBody, Page, P } from "./style";

function ContainerMain({
  pokemons,
  itemsForPage = 6,
  callbackAdd,
}: ContainerMainData) {
  const [currentPokemons, setCurrentPokemons] = useState<Pokemon[]>([]);
  const itensPerPage = itemsForPage;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentSubPage, setCurrenSubPage] = useState<number>(0);
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
  return (
    <>
      <Page>Pagina: {numberPage + 1}</Page>
      <Page>Total Paginas: {totalPages + 1}</Page>
      <ContainerBody>
        {currentPokemons[0] &&
          currentPokemons.map((element: Pokemon, index: number) => (
            <CardPokemon
              callbackAdd={callbackAdd}
              key={element.name}
              name={element.name}
              types={element.types}
              alt={element.name}
              id={element.id}
              image={element.image}
              abilities={element.abilities}
              stats={element.stats}
            />
          ))}
      </ContainerBody>
      {currentPokemons[0] && (
        <Pagination
          arrPages={arrPages}
          currentPage={currentPage}
          numberPagination={2}
          setCurrentSubPage={setCurrenSubPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
      {!currentPokemons[0] && (
        <P>Desculpa não encontramos nenhum pokemon com este nome.</P>
      )}
    </>
  );
}
export default ContainerMain;
