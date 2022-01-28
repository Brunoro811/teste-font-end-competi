import { CardPokemonData } from "./cardPokemon.model";

import "./cardpokemon.css";

import {
  Container,
  ContainerBackground,
  ContainerHover,
  DivHoverOptions,
  DivName,
  DivRotate,
  Image,
  SpanNumber,
  SpanType,
} from "./style";
import ButtonCircle from "../buttonCircle";

import view from "../../assets/svg/view.svg";
import add from "../../assets/svg/add.svg";

function CardPokemon({
  number = 0,
  type = "type",
  image,
  name = "name",
  alt = "alt",
}: CardPokemonData) {
  return (
    <Container>
      <DivRotate></DivRotate>
      <SpanNumber>{number}</SpanNumber>
      <SpanType type={type}>{type}</SpanType>

      <ContainerHover className="options">
        <DivHoverOptions className="hover">
          <ButtonCircle image={view} alt={"view pokemon"} />
          <ButtonCircle color="#3AA05B" image={add} alt={"add pokemon"} />
        </DivHoverOptions>

        <ContainerBackground>
          <Image src={image} alt={alt} />
        </ContainerBackground>
      </ContainerHover>

      <DivName>
        <p>{name}</p>
      </DivName>
    </Container>
  );
}
export default CardPokemon;
