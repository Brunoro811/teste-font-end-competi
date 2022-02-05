import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonAction from "../../components/buttonAction";
import Container from "../../components/container";
import ContainerCard from "../../components/containerCard";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PokedexCard from "../../components/pokedexCard";
import { useUser } from "../../providers/user";
import { POKEMONS_USER_LOGGED } from "../../services/localStorage";
import { UserData } from "../home/home";

import { Title, Row, Main, Col, RowTile } from "./style";

function Dashboard() {
  const { userLogged } = useUser();
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <Header value={search} onChange={setSearch} />
      <Container height={85}>
        <ContainerCard>
          <RowTile>
            <Title>Pokedex do Usuário</Title>
            <Link to="">
              <ButtonAction value="Procurar Pokemons!" />
            </Link>
          </RowTile>
          <Main>
            <Row>
              <Col>Foto</Col>
              <Col>Nome</Col>
              <Col>Tipo</Col>
              <Col>Ação</Col>
            </Row>
            {userLogged &&
              userLogged.pokedex.map((element: any) => {
                return (
                  <PokedexCard
                    key={element.name}
                    id={element.id}
                    name={element.name}
                    image={element.image}
                    types={element.types}
                    abilities={element.abilities}
                    stats={element.stats}
                  />
                );
              })}
          </Main>
        </ContainerCard>
      </Container>
      <Footer />
    </>
  );
}
export default Dashboard;
