import { Container, Header, ContainerBody, Select, Label } from "./style";
function ContainerMain() {
  return (
    <Container>
      <Header>
        <Label>
          Filtro
          <Select defaultValue="filtro">
            <option value="value"> Value</option>
          </Select>
        </Label>
      </Header>
      <ContainerBody>listagem de cards pokemon</ContainerBody>
    </Container>
  );
}
export default ContainerMain;
