import styled from "styled-components";

export const HeaderFiltro = styled.div`
    width: 100%;
    height: 109px;
    padding: 40px;
    border-bottom: 1px solid var(--color-border-light);
    display: flex;
    align-items: center;

`
export const Select = styled.select`
    width: 204px;
    height: 45px;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    background-color: var(--background-white-100);
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Label = styled.label`
 font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
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
    margin-top: 30px;
`
export const CaroselContainer = styled.div`
    display: flex;
    overflow: hidden;
    scroll-behavior: smooth;

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
        gap: 10px;
    }
`