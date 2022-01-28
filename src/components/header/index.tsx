import InputSearch from "../InputSearch";
import LinkButton from "../linkbutton";

import pokemonSvg from "../../assets/svg/logoPokemon.svg";
import competi from "../../assets/svg/logoCompeti.svg";

import { ContainerHeader, DivRow } from "./style";
import React from "react";

interface HeaderProps {
  isLoged?: boolean;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  handleSearchPokemonForName?: () => void;
}

function Header({
  isLoged = false,
  value,
  onChange,
  handleSearchPokemonForName,
}: HeaderProps) {
  return (
    <ContainerHeader>
      <img src={pokemonSvg} alt="Pokemon Api Site!" />
      <InputSearch
        value={value}
        onChange={onChange}
        placeholder="Search Pokémon for name"
        functionSearch={handleSearchPokemonForName}
      />
      <DivRow>
        {!isLoged && <LinkButton tolink="/" value="Login" />}
        {isLoged && <span>usuário</span>}
        <img src={competi} alt="Competi!" />
      </DivRow>
    </ContainerHeader>
  );
}
export default Header;
