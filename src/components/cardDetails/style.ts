import styled from "styled-components";
import { RowStatsProps } from "./cardDetails.model";
import { SpanTypePokemonProps } from "../cardPokemon/cardPokemon.model";


export const ContainerBlack = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 2;
`

export const  Container = styled.div`
    margin: 0 auto;
    position: relative;
    top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width:600px){
        top: 30%;
        flex-direction: row;
        justify-content: center;
    }
`   
export const CardPokemon = styled.div`
    width: 95%;
    max-width: 300px;
    background-color: #B4ADBE;
    border-top:2px solid black;
    border-right:2px solid black;
    border-left:2px solid black;
    border-radius: 5px 5px 0px 0px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    @media(min-width:600px){
        height: 320px;
        border-top:2px solid black;
        border-bottom:2px solid black;
        border-right:none;
        border-left:2px solid black;
        border-radius: 5px 0px 0px 5px;

    }
   button{
    position: absolute;
    top: -25px;
    right: -15px;
    @media(min-width:600px){
        top: -60px;
        right: -22px;
        
    }   
   }
`


export const CardDetails = styled.div`
    width: 95%;
    max-width: 300px;
    height: 320px;
    background-color: #ffffff;
    border-bottom:2px solid black;
    border-right:2px solid black;
    border-left:2px solid black;
    border-radius: 0px 0px 5px 5px;
    position: relative;
    padding: 10px;
    @media(min-width:600px){
        border-top:2px solid black;
        border-left:none;
        border-right:2px solid black;
        border-bottom:2px solid black;
        border-radius: 0px 5px 5px 0px;

    }
`
export const Image = styled.img`
    width: 95%;
    max-width: 200px;
` 
export const DivName = styled.div`
    position: absolute;
    width: 145px;
    height: 35px;
    padding: 5px;
    border-radius: 10px;
    background-color: #7E7394;
    border: 2px solid #100B16;
    bottom: -10px;
    right: 0px;
    z-index: 1;
    p{
        text-align: center;
        color: #ffffff;
        font-size: 16px;
        line-height: 25px;
        text-transform: capitalize;
    }
`
export const Row = styled.p`
    padding: 0px 10px 0px 0px;
    text-align: start;
`
export const SpanType = styled.span<SpanTypePokemonProps    >`
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
    position: absolute;
    top: 5px;
    right: 40px;
    z-index: 1;
`
export const ContainerStats = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 10px;
`
export const RowStats = styled.div<RowStatsProps>`
    
    width:${(props)=>props.base_stat ? `${props.base_stat}%` : '100%' };
    height: 30px;
    padding: 5px;
    text-align: start;
    border-radius: 5px;
    ${(props)=>{
        switch (props.name) {
            case 'grass':
                return "background-color: #079e45;"
            case 'electric':
                return "background-color: #fff92b;"
            case 'hp':
                return "background-color: #F25D52;"
            case 'water':
                return "background-color: #118ec2;"
            default:
                return "background-color: #020202;"
          }
    }}
  
    color: #ffffff;
`

export const  ContainerAbilities= styled.div`
    width :100%;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
`