import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --background-strong : #524153;
        --background-primary : #7E7394;
        --background-secoundary : #E0D7EC;
        --background-container : #D4C3A3;

        --black-300: #535662;
        --font-primary : #535662;
        --font-secondary: #ffffff;
    }

    h1,h2,h3,h4,h5,h6,div,main,section,header,button,form,a,span,p{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;

export default GlobalStyle;
