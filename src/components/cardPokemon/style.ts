import styled from "styled-components";
import { SpanTypePokemonProps } from "./cardPokemon.model";

export const Container = styled.div`
    width: 100%;
    max-width: 245px;
    height: 245px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    `
    export const DivHoverOptions = styled.div`
        width: 200px;
        height: 200px;
        color: var(--white-100);
        background-color: rgba(0,0,0,0.24);
        border-radius: 5px;
        position: absolute;
        display: none;
        justify-content: center;
        align-items: center;
        gap: 20px;
     
    `
export const ContainerHover = styled.div`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    
`
export const ContainerBackground = styled.div`
    border-radius: 5px;
    border: 2px solid black;
    background-color: var(--background-card-details);
    margin: 0 auto;
    width: 200px;
    height: 200px;
  
`
export const Image = styled.img`
    width:200px;

` 
export const SpanType = styled.span<SpanTypePokemonProps>`
    padding: 10px 20px;
    border-radius: 7px;
    ${(props)=>{
        switch (props.type) {
            case 'grass':
                return "background-color: var(--grass);"
            case 'electric':
                return "background-color: var(--electric);"
            case 'fire':
                return "background-color: var(--fire);"
            case 'water':
                return "background-color: var(--water);"
            default:
                return "background-color: var(--outhers);"
          }
    }
    }
  
    color: var(--white-100);
    position: absolute;
    top: 5px;
    right: 40px;
    z-index: 1;
`
export const DivRotate = styled.div`
    padding: 20px;
    border-radius: 12px;
    border: 2px solid var(--color-border);
    background-color: var(--background-active);
    transform: rotate(-43deg);
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1;
    
    
    `
export const SpanNumber = styled.span`
    height: 30px;
    justify-content: center;
    width: 30px;
    display: flex;
    font-size: 22px;
    color: var(--white-100);
    position: absolute;
    top: 12px;
    left: 11px;
    z-index: 1;
`
export const DivName = styled.div`
    position: absolute;
    width: 145px;
    height: 55px;
    border-radius: 10px;
    background-color: var(--background-primary);
    border: 2px solid var(--color-border);
    bottom: 7px;
    p{
        text-align: center;
        color: var(--white-100);
        font-size: 20px;
        line-height: 50px;
        text-transform: capitalize;
    }
`
