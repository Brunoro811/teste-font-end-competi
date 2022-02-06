import styled from "styled-components";

export const Button = styled.button<any>`
    width: 100%;
    max-width: 200px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: var(--background-primary);
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--white-100);
    border: 2px solid var(--color-border) ;
    cursor: pointer;
`