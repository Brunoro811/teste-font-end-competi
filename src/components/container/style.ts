import styled from "styled-components";
import { ContainerProps } from ".";


export const ContainerAll = styled.div<ContainerProps>`
    width: 100%;
    min-height: ${(props)=> props.height ? `${props.height}vh`  : "1386px"} ;
    background-color: var(--background-body);
    ${
        (props)=>props.verticalCenter ?
        "display: flex;flex-direction: column;align-items: center;justify-content: center;" :""
    }
`