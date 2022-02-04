import { Button } from "./style";
interface ButtonCircleData {
  alt?: string;
  image?: string;
  color?: string | undefined;
  callback: (e: any) => void;
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
    <Button onClick={(e) => callback(e)} color={color}>
      <img src={image} alt={alt} />
    </Button>
  );
}
export default ButtonCircle;
