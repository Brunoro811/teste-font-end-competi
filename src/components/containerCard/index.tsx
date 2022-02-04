import { ReactNode } from "react";
import { Container } from "./style";
interface ContainerCacrdProps {
  children: ReactNode;
}
function ContainerCard({ children }: ContainerCacrdProps) {
  return <Container>{children}</Container>;
}
export default ContainerCard;
