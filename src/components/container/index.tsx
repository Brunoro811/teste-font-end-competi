import { ReactNode } from "react";
import { ContainerAll } from "./style";
interface ContainerMainData {
  children: ReactNode;
  height?: number;
  verticalCenter?: boolean;
}
export interface ContainerProps {
  height?: number;
  verticalCenter?: boolean;
}
function Container({
  children,
  height,
  verticalCenter = false,
}: ContainerMainData) {
  return (
    <ContainerAll verticalCenter={verticalCenter} height={height}>
      {children}
    </ContainerAll>
  );
}
export default Container;
