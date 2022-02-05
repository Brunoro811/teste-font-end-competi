import styled from "styled-components";

export const HeaderFiltro = styled.div`
    width: 100%;
    height: 80px;
    padding: 10px;
    border-bottom: 1px solid #707070;
    display: flex;
    align-items: center;

`
export const Select = styled.select`
    width: 200px;
    padding: 10px;
    outline: none;
    border-radius: 5px;
`
export const Label = styled.label`
    font-size: 12px;
    display: flex;
    flex-direction: column;
    padding: 2px;
`
export const ContainerCenter = styled.div`
    width: 100%;
    max-width: 1310px;
    display: flex;
    margin: 0 auto;
    align-items: center;

`
export const ContainerMax = styled.div`
    min-width: 100px;
    max-width: 1200px;
`
export const CaroselContainer = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    overflow-x: hidden;

`
export const SpanAside = styled.span`
`
export const DivCenter = styled.div`
    width: 100%;
    max-width: 1310px;
    display: none;
    margin: 0 auto;
    justify-content: center;
    @media(min-width:1200px){
        display: flex;
    }
`