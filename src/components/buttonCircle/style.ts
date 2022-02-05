import styled from "styled-components";
import { ButtonCircleProps } from ".";

export const Button = styled.button<ButtonCircleProps>`
    min-width: 27px;
    margin: 5px;
    min-height: 27px;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color : ${props=> props.color || "#49DBDF"};
    
    border: 2px solid #000;
    :hover{
    }   
`
export const Image = styled.img`
   width: 45px;
   height: 45px;
   padding: 10px;
   box-sizing: border-box;
`
