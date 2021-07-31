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
        --blue: #0059A5;
        --red: #E31E24;
        --gray: #F3F3F3;
        --gray-200: #dadada;
        --gray-500: #999999;
        --white: #ffffff
    }
`