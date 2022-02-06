import styled from "styled-components";
export const Item = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 5px;
    border: 2px solid black;
    background-color: var(--background-card-details);
    margin:50px 30px;
    padding: 10;
    position: relative;
    flex: none;

    @media(min-width:600px){
        margin:50px 20px;
    }
`
export const ImageDiv = styled.div``
export const Img = styled.img`
    width: 200px;
    object-fit: cover;
`
export const Info = styled.div`
   // height: 100px;
    display: flex;
    justify-content: center;
`
export const SpanType = styled.span`
    background-color: yellow;
    color: var(--white-100);
    z-index: 2;
    padding: 5px;
    border-radius: 5px;
    position: absolute;
    bottom: 13px;
`
export const SpanName = styled.span`
     position: absolute;
    width: 145px;
    height: 55px;
    border-radius: 10px;
    background-color: var(--background-primary );
    border: 2px solid var(--color-border);
    bottom: -30px;
    p{
        text-align: center;
        color: var(--white-100);
        font-size: 20px;
        line-height: 50px;
        text-transform: capitalize;
    }
`
export const DivRotate = styled.div`
    padding: 20px;
    border-radius: 12px;
    border: 2px solid var(--color-border);
    background-color: var(--background-active);
    transform: rotate(-43deg);
    position: absolute;
    top: -22px;

    
    
    `
export const SpanNumber = styled.span`
    height: 30px;
    justify-content: center;
    width: 30px;
    display: flex;
    font-size: 22px;
    color: var(--white-100);
    position: absolute;
    top: -15px;
   
`