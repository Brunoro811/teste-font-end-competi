import { useState } from "react";
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
import ContainerDetails from "../cardDetails";

function CardPokemon({
  number = 0,
  type = "type",
  image,
  name = "name",
  alt = "alt",
}: CardPokemonData) {
  const [isCardDetails, setIsCardDetails] = useState<boolean>(false);
  const handleViewDetails = () => setIsCardDetails(!isCardDetails);
  return (
    <>
      <Container>
        <DivRotate></DivRotate>
        <SpanNumber>{number}</SpanNumber>
        <SpanType type={type}>{type}</SpanType>

        <ContainerHover className="options">
          <DivHoverOptions className="hover">
            <ButtonCircle
              callback={handleViewDetails}
              image={view}
              alt={"view pokemon"}
            />
            <ButtonCircle
              callback={() => {}}
              color="#3AA05B"
              image={add}
              alt={"add pokemon"}
            />
          </DivHoverOptions>

          <ContainerBackground>
            <Image src={image} alt={alt} />
          </ContainerBackground>
        </ContainerHover>

        <DivName>
          <p>{name}</p>
        </DivName>
      </Container>
      {isCardDetails && console.log("Atvido")}
      {isCardDetails && (
        <ContainerDetails
          image={image}
          alt={image}
          name={name}
          callback={handleViewDetails}
        />
      )}
    </>
  );
}
export default CardPokemon;
