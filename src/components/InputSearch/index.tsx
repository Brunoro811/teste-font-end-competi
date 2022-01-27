import { InputSearchData } from "./inputSearch.model";
import { Input } from "./style";
function InputSearch({ value, register, placeholder, rest }: InputSearchData) {
  return (
    <Input
      {...rest}
      placeholder={placeholder}
      type="text"
      //{...register(value)}
    />
  );
}
export default InputSearch;
