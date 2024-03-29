import { Button } from "./style";

interface ButtonActionData {
  type?: "button" | "submit" | "reset" | undefined;
  value: string;
  onClick?: () => void;
}
function ButtonAction({ value, type, onClick = () => {} }: ButtonActionData) {
  return (
    <Button data-testid="submit" onClick={() => onClick()} type={type}>
      {value}
    </Button>
  );
}
export default ButtonAction;
