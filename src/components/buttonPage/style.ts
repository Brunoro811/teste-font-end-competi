import styled from "styled-components";
import {ButtonPageProps} from "./index"


export const Button = styled.button<ButtonPageProps>`
    border: none;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    background-color: ${(props)=> props.backgroundColor || "#7E7394"};
    color: #ffffff;
    border: 2px solid #100B16 ;
    cursor: pointer;
`