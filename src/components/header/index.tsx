import InputSearch from "../InputSearch";
import LinkButton from "../linkbutton";

import pokemonSvg from "../../assets/svg/logoPokemon.svg";
import competi from "../../assets/svg/logoCompeti.svg";

import { ContainerHeader, DivRow } from "./style";
import React from "react";
import { useUser } from "../../providers/user";
import { Link } from "react-router-dom";
import ButtonAction from "../buttonAction";

interface HeaderProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  handleSearchPokemonForName?: () => void;
}

function Header({ value, onChange, handleSearchPokemonForName }: HeaderProps) {
  const { isLogged, userLogged, handleLogout } = useUser();
  return (
    <ContainerHeader>
      <img src={pokemonSvg} alt="Pokemon Api Site!" />
      <InputSearch
        value={value}
        onChange={onChange}
        placeholder="Search Pokémon"
        functionSearch={handleSearchPokemonForName}
      />
      <DivRow>
        {!isLogged && <LinkButton tolink="/login" value="Login" />}
        {isLogged && (
          <>
            <Link to="/dashboard">
              <ButtonAction value={userLogged.name} />
            </Link>
            <ButtonAction onClick={() => handleLogout()} value="Sair" />
          </>
        )}
        <img src={competi} alt="Competi!" />
      </DivRow>
    </ContainerHeader>
  );
}
export default Header;
