import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputGenerics, Errors, SpanError } from "./style";
interface InputData {
  register: UseFormRegister<FieldValues>;
  registerValue: string;
  placeholder: string;
  type?: string;
  erros?: {
    message: string;
    type: string;
  };
}
function Input({
  register,
  registerValue,
  placeholder = "placehoolder",
  type = "text",
  erros,
}: InputData) {
  return (
    <>
      <SpanError>{erros && <Errors>{erros.message}</Errors>}</SpanError>
      <InputGenerics
        placeholder={placeholder}
        type={type}
        {...register(registerValue)}
      />
    </>
  );
}
export default Input;
