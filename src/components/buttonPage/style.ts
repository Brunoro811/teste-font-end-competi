import styled from "styled-components";
import {ButtonPageProps} from "./index"


export const Button = styled.button<ButtonPageProps>`
    border: none;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    ${(props)=> props.circle? "width: 21px;height: 22px;border-radius:100%;" : ""}
    background-color: ${(props)=> props.backgroundColor || "var(--background-primary)"};
    color: var(--white-100);
    border: 2px solid #000000;
    cursor: pointer;
`
export const Span = styled.span<ButtonPageProps>`
    display: ${(props)=> props.spanHidden ? 'none' : 'inline'};
`