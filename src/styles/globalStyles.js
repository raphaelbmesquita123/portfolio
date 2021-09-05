import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body, input, button{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong, small{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    :root{
        --black-100: #000000;
        --black-70: #999999;
        --black-50: #dadada;
        --black-30: #F3F3F3;
        --white: #ffffff;
        --blue-100: #002240;
        --blue-70: #00417A;
        --blue-50: #0059A5;
        --blue-50: #41DCEA;
        --red-100: #622124;
        --red-70: #D31E41;
        --red-50: #E94C6D;
    }
`
