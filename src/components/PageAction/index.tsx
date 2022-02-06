import ButtonAction from "../buttonAction";
import Container from "../container";
import Input from "../input";
import { UserRegisterLoginData } from "../../providers/user/user.model";
import { useUser } from "../../providers/user";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  ContainerLogin,
  Row,
  Title,
  RowCenter,
  Information,
  Warning,
  Img,
  Link,
} from "./style";
import LogoPokemon from "../../assets/svg/logoPokemon.svg";

interface PageActionData {
  callbackSubmit: any | ((user: UserRegisterLoginData) => void);
  valueButton: string;
  title: string;
  isError?: boolean;
  schema: any;
  warning: boolean | string;
  link: string;
  toLink: string;
}
function PageAction({
  callbackSubmit,
  schema,
  valueButton,
  title = "Title",
  warning,
  link,
  toLink,
  isError = false,
}: PageActionData) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { isWarning, setIsWarning } = useUser();

  useEffect(() => {
    if (isWarning) {
      setIsWarning(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container verticalCenter height={100}>
      <Img src={LogoPokemon} alt="Logo Pokemon!" />
      <Information>{warning && <Warning>{warning}</Warning>}</Information>
      <ContainerLogin>
        <Title>{title}</Title>
        <form onSubmit={handleSubmit(callbackSubmit)}>
          <Row>
            <Input
              register={register}
              registerValue="name"
              placeholder="Seu nome de usuário"
              erros={errors?.name}
              type="text"
            />
          </Row>
          <Row>
            <Input
              register={register}
              registerValue="password"
              placeholder="Sua senha"
              erros={errors?.password}
              type="password"
            />
          </Row>
          <RowCenter>
            <ButtonAction type="submit" value={valueButton} />
          </RowCenter>
        </form>
      </ContainerLogin>
      <Information>{link && <Link to={toLink}>{link}</Link>}</Information>
      <Information>
        <Link to="">
          <ButtonAction value="Voltar para Pokemons!" />{" "}
        </Link>
      </Information>
    </Container>
  );
}
export default PageAction;
