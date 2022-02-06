import styled from "styled-components";


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
    top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width:600px){
        top: 30%;
        flex-direction: row;
        justify-content: center;
    }
`   
export const Card = styled.div`
    width: 100%;
    max-width: 300px;
    height: 150px;
    padding: 20px;
    background-color: var(--white-100);
    border-radius: 5px;
    border: 2px solid;
    position: relative;
`
export const Title = styled.h1`
    padding-bottom: 10px;
`
export const P = styled.p`
    padding: 10px 0px;

`
export const SpanDisplacement = styled.span`
    position: absolute;
    top: -10px;
    right: -10px;
`