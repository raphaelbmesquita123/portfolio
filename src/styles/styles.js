import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    position: absolute;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`

export const Carousel = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    transition: left 0.6s ease-in-out;
`

export const Menu = styled.nav`
    position: absolute;
    top: 0;
    right: 2rem;

    @media only screen and (max-width: 400px){
        right: 0;
        /* transform: translateX(-50%); */
    }
    
    ul{
        display: flex;
        list-style: none;
        li{
            position: relative;
            cursor: pointer;
            padding: 1.5rem;
            z-index: 3;
            color: white;

            &:first-child{
                margin-left: 0;
            }

            span{
                display: flex;
                justify-content: center;
                align-items: center;
                content: '';
                position: absolute;
                top: -100%;
                left: 0;
                background-color: black;
                width: 100%;
                height: 100%;
                border-radius: 0 0 10px 10px;
                transition: top 0.4s ease-in-out;
                z-index: 1;
            }
        }
    }
`