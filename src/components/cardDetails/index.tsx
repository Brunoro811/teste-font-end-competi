import ButtonCircle from "../buttonCircle";

import {
  Container,
  ContainerBlack,
  CardDetails,
  CardPokemon,
  Image,
  DivName,
  Row,
  RowStats,
  SpanType,
  ContainerStats,
  ContainerAbilities,
} from "./style";
import close from "../../assets/svg/close.png";
import { CardDetailsData } from "./cardDetails.model";

function ContainerDetails({
  callback,
  image,
  alt,
  types,
  name,
  stats,
  abilities,
}: CardDetailsData) {
  return (
    <ContainerBlack>
      <Container>
        <CardPokemon>
          <SpanType type={types}>{types}</SpanType>
          <Image src={image} alt={alt} />
          <ButtonCircle
            callback={callback}
            color="#B4ADBE"
            image={close}
            alt={`${close}`}
          />
          <DivName>
            <p>{name}</p>
          </DivName>
        </CardPokemon>
        <CardDetails>
          <strong>Abilities: </strong>
          <ContainerAbilities>
            {abilities &&
              abilities.map((element) => (
                <Row key={element.ability.name}>{element.ability.name}</Row>
              ))}
          </ContainerAbilities>
          <ContainerStats>
            {stats &&
              stats.map((element) => (
                <RowStats
                  base_stat={element.base_stat}
                  name={element.stat.name}
                  key={element.stat.url}
                >
                  <strong>{element.stat.name} :</strong>
                  {element.base_stat}
                </RowStats>
              ))}
          </ContainerStats>
        </CardDetails>
      </Container>
    </ContainerBlack>
  );
}
export default ContainerDetails;
