import { Button, Span } from "./style";

interface ButtonPageData {
  children?: number;
  isImage?: boolean;
  image?: string;
  onClick?: (e: React.ChangeEvent<HTMLInputElement | any>) => void;
  value?: number;
  backgroundColor?: string;
  numberPage?: number;
  spanHidden?: boolean;
  circle?: boolean;
}
export interface ButtonPageProps {
  backgroundColor?: string;
  spanHidden?: boolean;
  circle?: boolean;
}
function ButtonPage({
  children,
  isImage = false,
  image = "",
  backgroundColor,
  numberPage,
  spanHidden = false,
  circle = false,
  ...rest
}: ButtonPageData) {
  return (
    <>
      {numberPage && (
        <Button
          circle={circle}
          backgroundColor={
            numberPage === children
              ? "var(--background-active)"
              : backgroundColor
          }
          {...rest}
        >
          {!spanHidden && children}
          {spanHidden && <Span spanHidden={spanHidden}>{children}</Span>}
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
