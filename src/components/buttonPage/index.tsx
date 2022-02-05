import { Button } from "./style";

interface ButtonPageData {
  children?: number;
  isImage?: boolean;
  image?: string;
  onClick?: (e: React.ChangeEvent<HTMLInputElement | any>) => void;
  value?: number;
  backgroundColor?: string;
  currentPage?: number;
  numberPage?: number;
}
export interface ButtonPageProps {
  backgroundColor?: string;
}
function ButtonPage({
  children,
  isImage = false,
  image = "",
  backgroundColor,
  currentPage = 0,
  numberPage,
  ...rest
}: ButtonPageData) {
  return (
    <>
      {numberPage && (
        <Button
          backgroundColor={
            numberPage === children ? "#535662" : backgroundColor
          }
          {...rest}
        >
          {children && children}
          {isImage && <img src={image} alt={image} />}
        </Button>
      )}
      {!numberPage && (
        <Button backgroundColor={backgroundColor} {...rest}>
          {children && children}
          {isImage && <img src={image} alt={image} />}
        </Button>
      )}
    </>
  );
}
export default ButtonPage;
