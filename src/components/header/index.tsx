import InputSearch from "../InputSearch";
import LinkButton from "../linkbutton";

import pokemonSvg from "../../assets/svg/logoPokemon.svg";
import competi from "../../assets/svg/logoCompeti.svg";

import { ContainerHeader, DivRow } from "./style";

interface HeaderProps {
  isLoged?: boolean;
}

function Header({ isLoged = false }: HeaderProps) {
  return (
    <ContainerHeader>
      <img src={pokemonSvg} alt="Pokemon Api Site!" />
      <InputSearch placeholder="Search Pokémon" />
      <DivRow>
        {!isLoged && <LinkButton tolink="/" value="Login" />}
        {isLoged && <span>usuário</span>}
        <img src={competi} alt="Competi!" />
      </DivRow>
    </ContainerHeader>
  );
}
export default Header;
