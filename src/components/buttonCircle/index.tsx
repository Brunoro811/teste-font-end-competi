import { Button, Image } from "./style";
interface ButtonCircleData {
  alt?: string;
  image?: string;
  color?: string | undefined;
  callback: (e: any) => void;
  ref?: React.MutableRefObject<HTMLButtonElement>;
  borderNone?: boolean;
}
export interface ButtonCircleProps {
  color: string;
  borderNone?: boolean;
}
function ButtonCircle({
  image = "",
  alt = "",
  color = "",
  callback,
  borderNone = false,
  ...rest
}: ButtonCircleData) {
  return (
    <Button
      {...rest}
      onClick={(e) => callback(e)}
      color={color}
      borderNone={borderNone}
    >
      {image && <Image src={image} alt={alt} />}
    </Button>
  );
}
export default ButtonCircle;
