import Container from "../components/container";
import ContainerMain from "../components/ContainerMain";
import Footer from "../components/footer";
import Header from "../components/header";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <ContainerMain />
      </Container>
      <Footer />
    </>
  );
}
export default Home;
