import styled from "styled-components";

export const Container = styled.main`
    width: 95%;
   // height: 500px;
    max-width: 1140px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: #D4C3A3;
    box-shadow: 0px 0px 9px 0px #000000;
`

export const ContainerBody = styled.div`
    //width: 100%;
    padding-top: 50px ;
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    @media(min-width: 600px){
        flex-direction: row;
        justify-content: center;
    }
`
export const ContainerPagination = styled.div`
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
    height: 150px;
    padding: 20px;
`
export const Page = styled.p`
    text-align: end;
    margin: 0 auto;
    width: 100%;
    max-width: 750px;
    padding: 10px;
`