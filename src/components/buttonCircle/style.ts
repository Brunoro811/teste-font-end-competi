import styled from "styled-components";
import { ButtonCircleProps } from ".";

export const Button = styled.button<ButtonCircleProps>`
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color : ${props=> props.color || "#49DBDF"};

    :hover{
        border: 2px solid #ffffff;
    }
    
    
`
export const Image = styled.img`
    width: 30px;
`