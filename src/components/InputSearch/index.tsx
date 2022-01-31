import { useState } from "react";
import { InputSearchData } from "./inputSearch.model";
import { Input } from "./style";

import useDebounce from "./useDebouce";

function InputSearch({
  placeholder,
  value,
  onChange,
  functionSearch = () => {},
  rest,
}: InputSearchData) {
  const [displayValue, setDisplayValue] = useState(value);

  const debouceChange = useDebounce(onChange, 1000);

  function handleChange(event: any) {
    setDisplayValue(event.target.value);
    debouceChange(event.target.value);
  }
  return (
    <Input
      id="filtroBusca"
      {...rest}
      value={displayValue}
      onChange={handleChange}
      placeholder={placeholder}
      type="text"
    />
  );
}
export default InputSearch;
