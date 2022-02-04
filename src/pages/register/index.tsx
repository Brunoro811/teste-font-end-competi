import * as yup from "yup";

import PageAction from "../../components/PageAction";
import { useUser } from "../../providers/user";

function Register() {
  const { handleRegister, isWarning } = useUser();
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo Obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/gim,
        "Somente letras sem espaços."
      ),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/gim,
        "8 caracteres, pelo menos uma letra maiúscula, uma letra minúscula e um número"
      ),
  });

  return (
    <>
      <PageAction
        link="Possui conta? faça login."
        toLink="/login"
        warning={isWarning ? "Usuario já existe!" : false}
        schema={schema}
        callbackSubmit={handleRegister}
        valueButton="Register"
        title="Register"
      />
    </>
  );
}
export default Register;
