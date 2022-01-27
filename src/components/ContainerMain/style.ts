import styled from "styled-components";

export const Container = styled.main`
    width: 95%;
    min-height: 50vh;
    max-width: 1140px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: #D4C3A3;
    box-shadow: 0px 0px 9px 0px #000000;
`
export const Header = styled.div`
    width: 100%;
    height: 80px;
    padding: 10px;
    border-bottom: 1px solid #707070;
    display: flex;
    align-items: center;

`
export const ContainerBody = styled.div`
    width: 100%;
    height: 200px;
    padding: 10px ;
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
`