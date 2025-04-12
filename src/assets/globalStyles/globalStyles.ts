import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
    box-sizing: border-box;
}
html{
    font-size: 16px;
}
body {
    margin:0 140px;
    padding:0;
    background: rgb(251,251,251);
    @media(max-width:1850px){
        margin:0;
    }
}
`;
