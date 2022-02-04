import ButtonCircle from "../buttonCircle";
import { Container, Col, Img, Center, P, SpanType } from "./style";
import View from "../../assets/svg/view.svg";
import Remove from "../../assets/svg/remove.svg";
import ContainerDetails from "../cardDetails";
import { Pokemon } from "../../providers/pokemon/pokemon.model";
import { useState } from "react";
import { useUser } from "../../providers/user";

export interface SpanTypePokemonProps {
  type: string;
}
function PokedexCard({ id, name, image, types, abilities, stats }: Pokemon) {
  const [isCardDetails, setIsCardDetails] = useState<boolean>(false);
  const handleViewDetails = () => setIsCardDetails(!isCardDetails);

  const { handleRemovePokemon } = useUser();

  return (
    <>
      <Container>
        <Col>
          <Center>
            <Img src={image} alt={name} />
          </Center>
        </Col>
        <Col>
          <P>{name}</P>
        </Col>
        <Col>
          <SpanType type={types}>{types}</SpanType>
        </Col>
        <Col>
          <ButtonCircle
            alt={"View"}
            image={View}
            callback={handleViewDetails}
          />
          <ButtonCircle
            color="#F25D52"
            alt={"Remove"}
            image={Remove}
            callback={() =>
              handleRemovePokemon({ id, name, image, types, abilities, stats })
            }
          />
        </Col>
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
export default PokedexCard;
