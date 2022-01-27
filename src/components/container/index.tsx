import { ReactNode } from "react";
import { ContainerAll } from "./style";
interface ContainerMainProps {
  children: ReactNode;
}
function Container({ children }: ContainerMainProps) {
  return <ContainerAll>{children}</ContainerAll>;
}
export default Container;
