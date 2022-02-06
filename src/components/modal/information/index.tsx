import ButtonCircle from "../../buttonCircle";
import {
  ContainerBlack,
  Container,
  Card,
  Title,
  P,
  SpanDisplacement,
} from "./style";

import Close from "../../../assets/svg/close.png";

interface InformationModalData {
  handleIsInformation: () => void;
}

function InformationModal({ handleIsInformation }: InformationModalData) {
  return (
    <ContainerBlack>
      <Container>
        <Card>
          <SpanDisplacement>
            <ButtonCircle
              color="var(--background-active)"
              alt="Close information"
              image={Close}
              callback={handleIsInformation}
            />
          </SpanDisplacement>
          <Title>Atenção</Title>
          <P>Precisa estar logado para capturar um pokemon!</P>
        </Card>
      </Container>
    </ContainerBlack>
  );
}
export default InformationModal;
