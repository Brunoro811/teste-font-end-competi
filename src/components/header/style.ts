import styled from "styled-components";

export const ContainerHeader = styled.header`
    width: 100%;
    min-height: 86px;
    background-color: var(--background-strong);
    padding: 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    @media(min-width: 600px ){
    flex-direction: row;
    }
`
export const DivRow = styled.div`
    display: flex;
    gap: 10px;
    
`