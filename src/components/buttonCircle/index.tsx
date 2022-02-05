import { Button, Image } from "./style";
interface ButtonCircleData {
  alt?: string;
  image?: string;
  color?: string | undefined;
  callback: (e: any) => void;
  ref?: React.MutableRefObject<HTMLButtonElement>;
}
export interface ButtonCircleProps {
  color: string;
}
function ButtonCircle({
  image = "",
  alt = "",
  color = "",
  callback,
  ...rest
}: ButtonCircleData) {
  return (
    <Button {...rest} onClick={(e) => callback(e)} color={color}>
      {image && <Image src={image} alt={alt} />}
    </Button>
  );
}
export default ButtonCircle;
