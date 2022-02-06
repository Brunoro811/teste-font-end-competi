import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 6;
    background-color: rgba(255,255,255,0.5);
    display: flex;
    align-items: center;
    `
export const Card = styled.div`
    width: 100%;
    max-width: 350px;
    margin: 0 auto ;
    border: 2px solid var(--color-border);
    background-color: var(--background-white-100);
    border-radius: 5px;
    padding: 20px;
`