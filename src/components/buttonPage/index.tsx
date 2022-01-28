import { Button } from "./style";

interface ButtonPageData {
  children?: number;
  isImage?: boolean;
  image?: string;
  onClick?: (e: any) => void;
  value?: number;
}
function ButtonPage({
  children,
  isImage = false,
  image = "",
  ...rest
}: ButtonPageData) {
  return (
    <Button {...rest}>
      {children && children}
      {isImage && <img src={image} alt={image} />}
    </Button>
  );
}
export default ButtonPage;
