import styled from "styled-components";

export const RowTile = styled.div`
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media(min-width:600px){
        flex-direction: row;
    }
`

export const Title = styled.h1`
    padding-bottom: 20px;
    font-size: 20px;
    font-family: Poppins;
    font-weight: 500;
    color: var(--title-primary);
    @media(min-width:600px){
        padding: 0px;
        flex-direction: row;
    }

`
export const Main = styled.div`
    width: 100%;
    padding: 20px 10px;
`
export const Row = styled.div`
    display: flex;
   
`
export const Col = styled.p`
    font-family: Poppins;
    font-weight: 500;
    color: var(--title-primary);
    flex:3 ;
    &:nth-child(3n+1){
        flex: 1;
    }
    @media(min-width:600px){
        padding: 10px 20px;
       
    }
`