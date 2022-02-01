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

interface CardDetailsData {
  callback: () => void;
  image: string;
  alt: string;
  name: string;
  type: string;
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
    }
  ];
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }
  ];
}
export interface RowStatsProps {
  name: string;
  base_stat: number;
}

function ContainerDetails({
  callback,
  image,
  alt,
  type,
  name,
  stats,
  abilities,
}: CardDetailsData) {
  return (
    <ContainerBlack>
      <Container>
        <CardPokemon>
          <SpanType type={type}>{type}</SpanType>
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
