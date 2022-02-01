import styled from "styled-components";
import ButtonCircle from "../buttonCircle";


export const ContainerBlack = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top: 0px;
    z-index: 2;
`

export const  Container = styled.div`
    margin: 0 auto;
    position: relative;
    top: 50px;
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
    width: 100%;
    max-width: 250px;
    height: 250px;
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
    max-width: 250px;
    height: 250px;
    background-color: #ffffff;
    border-bottom:2px solid black;
    border-right:2px solid black;
    border-left:2px solid black;
    border-radius: 0px 0px 5px 5px;
    width: 100%;
    max-width: 250;
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
width:200px;

` 
export const DivName = styled.div`
    position: absolute;
    width: 145px;
    height: 55px;
    border-radius: 10px;
    background-color: #7E7394;
    border: 2px solid #100B16;
    bottom: 7px;
    p{
        text-align: center;
        color: #ffffff;
        font-size: 20px;
        line-height: 50px;
        text-transform: capitalize;
    }
`
