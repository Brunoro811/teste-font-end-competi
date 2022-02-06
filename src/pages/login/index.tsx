import * as yup from "yup";

import PageAction from "../../components/PageAction";
import { useUser } from "../../providers/user";

function Login() {
  const { handleLogin } = useUser();
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });
  const { isWarning } = useUser();
  return (
    <PageAction
      link="Não possui conta? cadastre-se!"
      toLink="/register"
      warning={isWarning ? "Usuario ou senha inválidos!" : false}
      schema={schema}
      callbackSubmit={handleLogin}
      valueButton="Login"
      title="Login"
    />
  );
}
export default Login;
