import styled from "styled-components";
import { SpanTypePokemonProps } from "../cardPokemon/cardPokemon.model";

export const Container = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    @media(min-width:600px){
        height: 100px;
        flex-direction: row;
        padding: 0px;

    }
`
export const Col = styled.div`
    flex:3;
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-child(3n+1){
        flex: 1;
    }
    &:nth-child(n+2){
        padding: 10px;
    }

    @media(min-width:600px){
        padding: 10px 20px;
        justify-content: flex-start;
    }
`
export const DivFlex = styled.div`
    display: flex;
    gap: 10px;
`

export const Center = styled.div`
    width: 100%;
    border: 2px solid black;
    border-radius: 5px 5px 0px 0px;
    background-color: #B4ADBE;
    text-align: center;
    @media(min-width:600px){
        width: 87px;
        height: 78px;
        border-radius: 5px;
    }
`
export const Img = styled.img`
    width: 100%;
    max-width: 125px;
    @media(min-width:600px){
        width: 87px;
        height: 78px;
        object-fit: none;
    }
`
export const P = styled.p`
    color: #535662;
    font-size: 21px;
`

export const SpanType = styled.span<SpanTypePokemonProps>`
    padding: 10px 20px;
    border-radius: 7px;
    ${(props)=>{
        switch (props.type) {
            case 'grass':
                return "background-color: #079e45;"
            case 'electric':
                return "background-color: #fff92b;"
            case 'fire':
                return "background-color: #F25D52;"
            case 'water':
                return "background-color: #118ec2;"
            default:
                return "background-color: #020202;"
          }
    }}
  
    color: #ffffff;
`