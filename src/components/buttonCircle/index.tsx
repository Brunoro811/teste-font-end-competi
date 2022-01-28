import { Button, Image } from "./style";
interface ButtonCircleData {
  alt?: string;
  image?: string;
  color?: string | undefined;
}
export interface ButtonCircleProps {
  color: string;
}
function ButtonCircle({ image = "", alt = "", color = "" }: ButtonCircleData) {
  return (
    <Button color={color}>
      <Image src={image} alt={alt} />
    </Button>
  );
}
export default ButtonCircle;
