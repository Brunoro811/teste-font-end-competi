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
  id = 0,
  types = "type",
  image,
  name = "name",
  alt = "alt",
  stats,
  abilities,
  callbackAdd,
}: CardPokemonData) {
  const [isCardDetails, setIsCardDetails] = useState<boolean>(false);
  const handleViewDetails = () => setIsCardDetails(!isCardDetails);
  return (
    <>
      <Container>
        <DivRotate></DivRotate>
        <SpanNumber>{id}</SpanNumber>
        <SpanType type={types}>{types}</SpanType>

        <ContainerHover className="options">
          <DivHoverOptions className="hover">
            <ButtonCircle
              callback={handleViewDetails}
              image={view}
              alt={"view pokemon"}
            />
            <ButtonCircle
              callback={() =>
                callbackAdd({
                  id: id,
                  name: name,
                  image: image,
                  types: types,
                  stats: stats,
                  abilities: abilities,
                })
              }
              color="var(--grass)"
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
      {isCardDetails && (
        <ContainerDetails
          id={id}
          image={image}
          alt={image}
          name={name}
          types={types}
          abilities={abilities}
          callback={handleViewDetails}
          stats={stats}
        />
      )}
    </>
  );
}
export default CardPokemon;
