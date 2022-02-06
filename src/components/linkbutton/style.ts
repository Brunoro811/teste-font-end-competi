import { Link as LinkDom } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(LinkDom)`
    width: 113px;
    height: 42px;
    padding:5px ;
    border: none;
    border-radius: 5px;
    background-color: var(--background-primary );
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--white-100);
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
`