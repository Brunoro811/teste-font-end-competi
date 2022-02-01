import ButtonCircle from "../buttonCircle";

import {
  Container,
  ContainerBlack,
  CardDetails,
  CardPokemon,
  Image,
  DivName,
} from "./style";
import close from "../../assets/svg/close.png";

interface CardDetailsData {
  callback: () => void;
  image: string;
  alt: string;
  name: string;
}

function ContainerDetails({ callback, image, alt, name }: CardDetailsData) {
  return (
    <ContainerBlack>
      <Container>
        <CardPokemon>
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
        <CardDetails>information</CardDetails>
      </Container>
    </ContainerBlack>
  );
}
export default ContainerDetails;
