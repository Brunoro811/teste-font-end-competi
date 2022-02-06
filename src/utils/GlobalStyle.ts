import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --background-strong : #524153;
        --background-body : #E0D7EC;
        --background-container : #D4C3A3;
        --background-primary : #7E7394;

        --background-view: #49DBDF;
        --background-active: #535662;
        --background-card-details: #B4ADBE;
        --background-white-100: #ffffff;
        --white-100: #ffffff;
        --font-primary : #535662;
        --color-error: #e2010a;
        --color-link: #524153 ;
        --title-primary: #535662;
        --background-remove: #F25D52;
        
        --color-border: #100B16;
        --color-border-light: #707070;

        --grass: #079e45;
        --electric: #F6BD20;
        --fire : #F25D52;
        --water: #118ec2;
        --outhers : #020202;

    }

    h1,h2,h3,h4,h5,h6,div,main,footer,section,header,button,form,a,span,p{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        margin: 0;
        font-family:'Open Sans', 'Helvetica Neue', sans-serif
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;

export default GlobalStyle;
