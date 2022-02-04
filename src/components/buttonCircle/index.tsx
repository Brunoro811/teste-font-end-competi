import { Button } from "./style";
interface ButtonCircleData {
  alt?: string;
  image?: string;
  color?: string | undefined;
  callback: () => void;
}
export interface ButtonCircleProps {
  color: string;
}
function ButtonCircle({
  image = "",
  alt = "",
  color = "",
  callback,
}: ButtonCircleData) {
  return (
    <Button onClick={() => callback()} color={color}>
      <img src={image} alt={alt} />
    </Button>
  );
}
export default ButtonCircle;
